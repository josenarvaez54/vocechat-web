import AgoraRTC, { IMicrophoneAudioTrack } from 'agora-rtc-sdk-ng';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetAgoraConfigQuery, useGetAgoraVoicingListQuery, useLazyGetAgoraTokenQuery } from '../../app/services/server';
import { addVoiceMember, removeVoiceMember, updateMuteStatus, updateVoicingInfo, updateVoicingMember, updateVoicingNetworkQuality } from '../../app/slices/voice';
import { useAppSelector } from '../../app/store';

// type Props = {}
window.VOICE_TRACK_MAP = window.VOICE_TRACK_MAP ?? {};
// let tmpUids: number[] = [];
const Voice = () => {
    const { isAdmin } = useAppSelector(store => {
        return {
            isAdmin: !!store.authData.user?.is_admin,
            // joined: !!store.voice.voicing
        };
    });
    const { data: agoraConfig } = useGetAgoraConfigQuery(undefined, {
        skip: !isAdmin
    });
    useGetAgoraVoicingListQuery({
        appid: agoraConfig?.app_id ?? "",
        key: agoraConfig?.rtm_key ?? "",
        secret: agoraConfig?.rtm_secret ?? "",

    }, {
        skip: !isAdmin || !agoraConfig,
        pollingInterval: 5000
    });
    const dispatch = useDispatch();
    useEffect(() => {
        const initializeAgoraClient = async () => {
            // 创建agora客户端实例
            const agoraEngine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
            // 无论频道内是否有人说话，都会每两秒返回提示音量
            agoraEngine.enableAudioVolumeIndicator();
            // Listen for the "user-published" event to retrieve an AgoraRTCRemoteUser object.
            agoraEngine.on("user-published", async (user, mediaType) => {
                // Subscribe to the remote user when the SDK triggers the "user-published" event.
                await agoraEngine.subscribe(user, mediaType);
                console.log(user, " has published at the channel");
                if (mediaType == "audio") {
                    // 播放远端音频
                    user.audioTrack?.play();
                    window.VOICE_TRACK_MAP[+user.uid] = user.audioTrack;
                }
                agoraEngine.on("user-unpublished", (user) => {
                    //   远端用户取消了音频（muted）
                    dispatch(updateVoicingMember({ uid: +user.uid, info: { muted: true } }));
                });
                //remote user leave
                agoraEngine.on("user-left", (user, reason) => {
                    switch (reason) {
                        case "Quit":
                        case "ServerTimeOut": {
                            dispatch(removeVoiceMember(+user.uid as number));

                            console.log(user, "has left the channel");
                        }
                            break;

                        default:
                            break;
                    }
                });
                // 报告频道内正在说话的远端用户及其音量的回调。
                agoraEngine.on("volume-indicator", (vols) => {
                    vols.forEach((vol, index) => {
                        console.log(`${index} UID ${vol.uid} Level ${vol.level}`);
                        const { uid, level } = vol;
                        dispatch(updateVoicingMember({ uid: +uid, info: { speakingVolume: level } }));
                    });
                });
                // 信号强度
                agoraEngine.on("network-quality", (qlt) => {
                    const { downlinkNetworkQuality } = qlt;
                    dispatch(updateVoicingNetworkQuality(downlinkNetworkQuality));
                });
                // 用户状态变化
                agoraEngine.on("user-info-updated", (uid, msg) => {
                    console.log("user-info-updated", uid, msg);
                    switch (msg) {
                        case "mute-audio":
                            // todo
                            dispatch(updateVoicingMember({ uid: +uid, info: { muted: true } }));
                            break;
                        case "unmute-audio":
                            // todo
                            dispatch(updateVoicingMember({ uid: +uid, info: { muted: false } }));
                            break;

                        default:
                            break;
                    }
                    // const { downlinkNetworkQuality } = qlt;
                    // dispatch(updateVoicingNetworkQuality(downlinkNetworkQuality));
                });
            });
            // 有新用户加入
            agoraEngine.on("user-joined", async (user) => {
                console.log(user.uid, !!localTrack, agoraEngine.channelName, " has joined the channel");
                dispatch(addVoiceMember(+user.uid));
            });
            window.VOICE_CLIENT = agoraEngine;
        };
        if (!window.VOICE_CLIENT) {
            initializeAgoraClient();
        }

        return () => {
            if (window.VOICE_CLIENT && localTrack) {
                localTrack.close();
                localTrack = null;
                window.VOICE_CLIENT.leave();

            }
            // window.VOICE_CLIENT=null
        };
    }, []);


    return null;
};
let localTrack: IMicrophoneAudioTrack | null = null;
type VoiceProps = {
    id: number,
    context?: "channel" | "dm"
}
const useVoice = ({ id, context = "channel" }: VoiceProps) => {
    const dispatch = useDispatch();
    const { voicingInfo } = useAppSelector(store => {
        return {
            // loginUid: store.authData.user?.uid,
            voicingInfo: store.voice.voicing
        };
    });
    const [generateToken] = useLazyGetAgoraTokenQuery();
    const [joining, setJoining] = useState(false);
    const joinVoice = async () => {
        setJoining(true);
        const { isError, data } = await generateToken(id);
        if (!isError && data) {
            const { channel_name, app_id, agora_token, uid } = data;
            if (window.VOICE_CLIENT) {
                await window.VOICE_CLIENT.join(app_id, channel_name, agora_token, uid);
                console.table(data);
                // Create a local audio track from the microphone audio.
                localTrack = await AgoraRTC.createMicrophoneAudioTrack();
                // Publish the local audio track in the channel.
                await window.VOICE_CLIENT.publish(localTrack);
                console.log("Publish success!,joined the channel");
                dispatch(updateVoicingInfo({
                    muted: false,
                    id,
                    context,
                }));
                // 把自己加进去
                dispatch(addVoiceMember(uid));
            }
        }
        setJoining(false);
    };
    const leave = async () => {
        if (window.VOICE_CLIENT && localTrack) {
            localTrack.close();
            localTrack = null;
            await window.VOICE_CLIENT.leave();
            dispatch(updateVoicingInfo(null));
        }
    };
    const setMute = (mute: boolean) => {
        if (localTrack) {
            localTrack.setMuted(mute);
            dispatch(updateMuteStatus(mute));
        }
    };
    return {
        setMute,
        leave,
        // canVoice,
        voicingInfo,
        joining,
        joined: !!voicingInfo,
        joinVoice
    };
};
export { useVoice };
export default Voice;