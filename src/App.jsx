/** @format */
import { Route, Routes, useLocation } from "react-router-dom";
import "./styles.css";
import FirstScreen from "./components/Authentication/Onboarding/FirstScreen";
import img from "./assets/Onboarding/leftPanel.svg";
import SecondScreen from "./components/Authentication/Onboarding/SecondScreen/SecondScreen";
import { useEffect, useState } from "react";
import Loader from "./components/Animation/Loader";
import ThirdScreen from "./components/Authentication/Onboarding/ThirdScreen";
import FourthScreen from "./components/Authentication/Onboarding/Fourth/FourthScreen";
import FifthScreen from "./components/Authentication/Onboarding/Fifth/FifthScreen";
import SixthScreen from "./components/Authentication/Onboarding/SixthScreen";
import SeventhScreen from "./components/Authentication/Onboarding/SeventhScreen";
import EighthScreen from "./components/Authentication/Onboarding/EighthScreen";
import Step1 from "./components/Authentication/SignUp/Step1/Step1";
import Step2 from "./components/Authentication/SignUp/Step2";
import SignIn from "./components/Authentication/SignIn/SignIn";
import VerifyEmail from "./components/Authentication/SignUp/VerifyEmail";
import Forgot from "./components/Authentication/SignIn/ForgotPassword/Forgot";
import ChangePassword from "./components/Authentication/SignIn/ForgotPassword/ChangePassword";
import PasswordUpdate from "./components/Authentication/SignIn/ForgotPassword/PasswordUpdate";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Dashboard/Settings/Settings";
import Content from "./components/Dashboard/Content/Content";

export default function App() {
  const [appLoading, setAppLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading for 3.5 seconds
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
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
    <section
      className={
        path ? "grid grid-cols-2 h-screen w-screen overflow-hidden" : ""
      }
    >
      {path && <img src={img} className='w-screen' alt='' />}
      <Routes>
        <Route path='/' element={<FirstScreen />} />
        <Route path='/onboarding/2' element={<SecondScreen />} />
        <Route path='/onboarding/3' element={<ThirdScreen />} />
        <Route path='/onboarding/4' element={<FourthScreen />} />
        <Route path='/onboarding/5' element={<FifthScreen />} />
        <Route path='/onboarding/6' element={<SixthScreen />} />
        <Route path='/onboarding/7' element={<SeventhScreen />} />
        <Route path='/onboarding/8' element={<EighthScreen />} />

        <Route path='/signup/create-your-account' element={<Step1 />} />
        <Route path='/email-verification/verify-code' element={<Step2 />} />
        <Route path='/email-verification' element={<VerifyEmail />} />

        <Route path='/signin' element={<SignIn />} />
        <Route path='/signin/forgot-password' element={<Forgot />} />
        <Route path='/signin/change-password' element={<ChangePassword />} />
        <Route path='/signin/password-reset' element={<PasswordUpdate />} />

        <Route element={<Dashboard />}>
          <Route path='/dashboard' element={<Content />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>{" "}
    </section>
  );
}
