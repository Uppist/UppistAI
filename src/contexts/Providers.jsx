/** @format */

import { CardProvider } from "./CardProvider";
import { OnboardingProvider } from "./OnboardingProvider";
// later you’ll add UserProvider too

export default function Providers({ children }) {
  return (
    <CardProvider>
      <OnboardingProvider>{children}</OnboardingProvider>
    </CardProvider>
  );
}
