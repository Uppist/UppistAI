/** @format */

import { useEffect, useState } from "react";
import { Onboarding } from "./Context";

export function OnboardingProvider({ children }) {
  {
    /* */
  }
  const getInitialOnboarding = () => {
    try {
      const stored = localStorage.getItem("onBoardingDetails");
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.warn(
        "Failed to read onboarding details from localStorage",
        error,
      );
      return {};
    }
  };

  const [onBoardingDetails, setOnBoardingDetails] =
    useState(getInitialOnboarding);

  useEffect(() => {
    try {
      localStorage.setItem(
        "onBoardingDetails",
        JSON.stringify(onBoardingDetails),
      );
    } catch (error) {
      console.warn("Unable to persist onboarding details", error);
    }
  }, [onBoardingDetails]);
  return (
    <Onboarding.Provider value={{ onBoardingDetails, setOnBoardingDetails }}>
      {children}
    </Onboarding.Provider>
  );
}
