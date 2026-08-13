/** @format */
import { Route, Routes, useLocation } from "react-router-dom";
import "./styles.css";
import FirstScreen from "./pages/Authentication/Onboarding/FirstScreen";
import img from "./assets/Onboarding/leftPanel.svg";
import SecondScreen from "./pages/Authentication/Onboarding/SecondScreen/SecondScreen";
import { useEffect, useState } from "react";
import Loader from "./components/Animation/Loader";
import ThirdScreen from "./pages/Authentication/Onboarding/ThirdScreen";
import FourthScreen from "./pages/Authentication/Onboarding/Fourth/FourthScreen";
import FifthScreen from "./pages/Authentication/Onboarding/Fifth/FifthScreen";
import SixthScreen from "./pages/Authentication/Onboarding/SixthScreen";
import SeventhScreen from "./pages/Authentication/Onboarding/SeventhScreen";
import EighthScreen from "./pages/Authentication/Onboarding/EighthScreen";
import Step1 from "./pages/Authentication/SignUp/Step1/Step1";
import Step2 from "./pages/Authentication/SignUp/Step2";
import SignIn from "./pages/Authentication/SignIn/SignIn";
import VerifyEmail from "./pages/Authentication/SignUp/VerifyEmail";
import Forgot from "./pages/Authentication/SignIn/ForgotPassword/Forgot";
import ChangePassword from "./pages/Authentication/SignIn/ForgotPassword/ChangePassword";
import PasswordUpdate from "./pages/Authentication/SignIn/ForgotPassword/PasswordUpdate";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Settings from "./pages/Dashboard/Settings/Settings";
import Content from "./pages/Dashboard/DashboardContent/Content";
import Contacts from "./pages/Dashboard/Contacts/Contacts";
import Reports from "./pages/Dashboard/Reports/Reports";
import Integrations from "./pages/Dashboard/Integrations/Integrations";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Channels from "./pages/Dashboard/Channels/Channels";
import Audit from "./pages/Dashboard/Audit/Audit";

export default function App() {
  const [appLoading, setAppLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading for 3.5 seconds
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 3500);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (appLoading) {
    return <Loader />;
  }

  const path =
    location.pathname.startsWith("/onboarding") ||
    location.pathname.startsWith("/signup") ||
    location.pathname.startsWith("/signin") ||
    location.pathname.startsWith("/email-verification") ||
    location.pathname === "/";

  return (
    <>
      {" "}
      <ToastContainer />
      <section
        className={
          path && !isMobile
            ? "grid grid-cols-2 h-screen w-screen overflow-hidden"
            : ""
        }
      >
        {path && !isMobile && <img src={img} className='w-screen' alt='' />}
        <Routes>
          <Route path='/' element={<Step1 />} />
          <Route path='/email-verification/verify-code' element={<Step2 />} />
          <Route
            path='/email-verification'
            element={
              <VerifyEmail
                appLoading={appLoading}
                setAppLoading={setAppLoading}
              />
            }
          />

          <Route path='/onboarding/1' element={<FirstScreen />} />
          <Route path='/onboarding/2' element={<SecondScreen />} />
          <Route path='/onboarding/3' element={<ThirdScreen />} />
          <Route path='/onboarding/4' element={<FourthScreen />} />
          <Route path='/onboarding/5' element={<FifthScreen />} />
          <Route path='/onboarding/6' element={<SixthScreen />} />
          <Route path='/onboarding/7' element={<SeventhScreen />} />
          <Route
            path='/onboarding/8'
            element={
              <EighthScreen
                appLoading={appLoading}
                setAppLoading={setAppLoading}
              />
            }
          />

          <Route
            path='/signin'
            element={
              <SignIn appLoading={appLoading} setAppLoading={setAppLoading} />
            }
          />
          <Route path='/signin/forgot-password' element={<Forgot />} />
          <Route path='/signin/change-password' element={<ChangePassword />} />
          <Route path='/signin/password-reset' element={<PasswordUpdate />} />

          <Route element={<DashboardLayout />}>
            <Route path='/dashboard' element={<Content />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/audit_logs' element={<Audit />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/integrations' element={<Integrations />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/channels/:type' element={<Channels />} />
          </Route>
        </Routes>{" "}
      </section>
    </>
  );
}
