/** @format */

import AgentDashboardProvider from "../../contexts/AgentDashboardProvider";
import DashboardProvider from "../../contexts/DashboardProvider";
import UserProvider from "../../contexts/UserProvider";
import Dashboard from "./Dashboard";

export default function DashboardLayout({ showRoute }) {
  return (
    <UserProvider>
      <DashboardProvider>
        <AgentDashboardProvider>
          <Dashboard showRoute={showRoute} />
        </AgentDashboardProvider>
      </DashboardProvider>
    </UserProvider>
  );
}
