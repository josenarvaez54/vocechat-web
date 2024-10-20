import SettingBlock from "@/components/SettingBlock";
import { useTranslation } from "react-i18next";
import StyledRadio from "@/components/styled/Radio";
import ServerVersionChecker from "@/components/ServerVersionChecker";
import { KEY_ADMIN_SEE_CHANNEL_MEMBERS } from "@/app/config";
import useServerExtSetting from "@/hooks/useServerExtSetting";

type Props = {};

const OnlyAdminCanSeeChannelMembers = ({}: Props) => {
  const { updateExtSetting, getExtSetting } = useServerExtSetting();
  const { t } = useTranslation("setting");
  const handleChange = (newVal: boolean) => {
    updateExtSetting(KEY_ADMIN_SEE_CHANNEL_MEMBERS, newVal);
  };
  const onlyAdminSeeChannelMembers = getExtSetting(KEY_ADMIN_SEE_CHANNEL_MEMBERS);
  return (
    <ServerVersionChecker empty version="0.3.50">
      <SettingBlock
        title={t("overview.admin_see_group_members.title")}
        desc={t("overview.admin_see_group_members.desc")}
      >
        <StyledRadio
          options={[
            t("overview.admin_see_group_members.enable"),
            t("overview.admin_see_group_members.disable")
          ]}
          values={["true", "false"]}
          value={`${onlyAdminSeeChannelMembers}`}
          onChange={(v) => {
            handleChange(v == "true");
          }}
        />
      </SettingBlock>
    </ServerVersionChecker>
  );
};

export default OnlyAdminCanSeeChannelMembers;
