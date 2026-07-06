/** @format */

import { CardProvider } from "./CardProvider";
import ChannelProvider from "./ChannelProvider";
import { OnboardingProvider } from "./OnboardingProvider";
import CreateAgentProvider from "./Settings/CreateAgentProvider";
import CreateIntentProvider from "./Settings/CreateIntentProvider";
import CreateUserProvider from "./Settings/CreateUserProvider";

export default function Providers({ children }) {
  return (
    <CardProvider>
      <OnboardingProvider>
        <ChannelProvider>
          <CreateUserProvider>
            <CreateAgentProvider>
              <CreateIntentProvider>{children}</CreateIntentProvider>
            </CreateAgentProvider>
          </CreateUserProvider>
        </ChannelProvider>
      </OnboardingProvider>
    </CardProvider>
  );
}
