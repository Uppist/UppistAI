/** @format */
import { Route, Routes } from "react-router-dom";
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
export default function App() {
  const [appLoading, setAppLoading] = useState(true);
  // const location = useLocation();

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

  return (
    <div>
      <section className='grid grid-cols-2 h-screen w-screen overflow-hidden '>
        <img src={img} className='w-screen' alt='' />
        <Routes>
          {/*Onboarding Routes */}
          <Route path='/UppistAI' element={<FirstScreen />} />
          <Route path='/onboarding/2' element={<SecondScreen />} />
          <Route path='/onboarding/3' element={<ThirdScreen />} />
          <Route path='/onboarding/4' element={<FourthScreen />} />
          <Route path='/onboarding/5' element={<FifthScreen />} />
          <Route path='/onboarding/6' element={<SixthScreen />} />
          <Route path='/onboarding/7' element={<SeventhScreen />} />
          <Route path='/onboarding/8' element={<EighthScreen />} />

          {/*Sign Up Routes */}

          <Route path='/signup/create-your-account' element={<Step1 />} />
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

          {/*Login Routes */}
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signin/forgot-password' element={<Forgot />} />
          <Route path='/signin/change-password' element={<ChangePassword />} />
          <Route
            path='/signin/password-reset'
            element={
              <PasswordUpdate
                appLoading={appLoading}
                setAppLoading={setAppLoading}
              />
            }
          />
        </Routes>
      </section>
    </div>
  );
}
