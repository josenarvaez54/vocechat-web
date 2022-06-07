import { Suspense, useEffect, lazy } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import toast from "react-hot-toast";
// import Welcome from './Welcome'
import NotFoundPage from "./404";
const HomePage = lazy(() => import("./home"));
const RegBasePage = lazy(() => import("./reg"));
const RegWithUsernamePage = lazy(() => import("./reg/RegWithUsername"));
const SendMagicLinkPage = lazy(() => import("./sendMagicLink"));
const RegPage = lazy(() => import("./reg/Register"));
const LoginPage = lazy(() => import("./login"));
const OAuthPage = lazy(() => import("./oauth"));
const ChatPage = lazy(() => import("./chat"));
const ContactsPage = lazy(() => import("./contacts"));
const FavoritesPage = lazy(() => import("./favs"));
const OnboardingPage = lazy(() => import("./onboarding"));
const InvitePage = lazy(() => import("./invite"));
const SettingChannelPage = lazy(() => import("./settingChannel"));
const SettingPage = lazy(() => import("./setting"));
const ResourceManagement = lazy(() => import("./resources"));
import RequireAuth from "../common/component/RequireAuth";
import RequireNoAuth from "../common/component/RequireNoAuth";
import Meta from "../common/component/Meta";
import Loading from "../common/component/Loading";

import store from "../app/store";

const PageRoutes = () => {
  const {
    ui: { online },
    fileMessages,
  } = useSelector((store) => {
    return { ui: store.ui, fileMessages: store.fileMessage };
  });
  // 掉线检测
  useEffect(() => {
    let toastId = 0;
    if (!online) {
      toast.error("Network Offline!", { duration: Infinity });
    } else {
      toast.dismiss(toastId);
    }
  }, [online]);

  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/oauth/:token" element={<OAuthPage />} />
          <Route
            path="/login"
            element={
              <RequireNoAuth>
                <LoginPage />
              </RequireNoAuth>
            }
          />
          <Route
            path="/send_magic_link"
            element={
              <RequireNoAuth>
                <SendMagicLinkPage />
              </RequireNoAuth>
            }
          />
          <Route
            path="/reg"
            element={
              <RequireNoAuth>
                <RegBasePage />
              </RequireNoAuth>
            }
          >
            <Route index element={<RegPage />} />
            <Route path="magiclink">
              <Route index element={<RegWithUsernamePage />} />
              <Route path=":token" element={<RegWithUsernamePage />} />
            </Route>
          </Route>
          <Route
            path="/email_login"
            element={
              <RequireNoAuth>
                <SendMagicLinkPage />
              </RequireNoAuth>
            }
          />
          <Route path="/invite" element={<InvitePage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          >
            <Route path="setting">
              <Route index element={<SettingPage />} />
              <Route path="channel/:cid" element={<SettingChannelPage />} />
            </Route>
            <Route index element={<ChatPage />} />
            <Route path="chat">
              <Route index element={<ChatPage />} />
              <Route path="channel/:channel_id" element={<ChatPage />} />
              <Route path="dm/:user_id" element={<ChatPage />} />
            </Route>
            <Route path="contacts">
              <Route index element={<ContactsPage />} />
              <Route path=":user_id" element={<ContactsPage />} />
            </Route>
            <Route path="favs" element={<FavoritesPage />}></Route>
            <Route
              path="files"
              element={<ResourceManagement fileMessages={fileMessages} />}
            ></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
// const local_key = "AUTH_DATA";
export default function ReduxRoutes() {
  // const [authData, setAuthData] = useState(
  //   JSON.parse(localStorage.getItem(local_key))
  // );
  // const updateAuthData = (data) => {
  //   localStorage.setItem(local_key, JSON.stringify(data));
  //   setAuthData(data);
  // };
  return (
    <Provider store={store}>
      <Meta />
      <PageRoutes />
    </Provider>
  );
}