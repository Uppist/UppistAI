/** @format */

import { CardProvider } from "./CardProvider";
import { OnboardingProvider } from "./OnboardingProvider";

export default function Providers({ children }) {
  return (
    <CardProvider>
      <OnboardingProvider>
        {children}
      </OnboardingProvider>
    </CardProvider>
  );
}
