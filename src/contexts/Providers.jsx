/** @format */

import AuditProvider from "./AuditProvider";
import { CardProvider } from "./CardProvider";
import ChannelProvider from "./ChannelProvider";
import ContactProvider from "./ContactProvider";
import DashboardProvider from "./DashboardProvider";
import { OnboardingProvider } from "./OnboardingProvider";
import ReportProvider from "./ReportProvider";
// import CreateAgentProvider from "./Settings/CreateAgentProvider";
// import CreateIntentProvider from "./Settings/CreateIntentProvider";
import CreateUserProvider from "./Settings/CreateUserProvider";
import GetDocumentsProvider from "./Settings/GetDocumentsProvider";

export default function Providers({ children }) {
  return (
    <CardProvider>
      <OnboardingProvider>
        <ChannelProvider>
          <CreateUserProvider>
            {/* <CreateAgentProvider> */}
            {/* <CreateIntentProvider> */}
            {/* <DashboardProvider> */}
            <AuditProvider>
              <ContactProvider>
                <ReportProvider>
                  <GetDocumentsProvider>{children}</GetDocumentsProvider>
                </ReportProvider>
              </ContactProvider>
            </AuditProvider>
            {/* </DashboardProvider> */}
            {/* </CreateIntentProvider> */}
            {/* </CreateAgentProvider> */}
          </CreateUserProvider>
        </ChannelProvider>
      </OnboardingProvider>
    </CardProvider>
  );
}
