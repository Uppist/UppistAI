/** @format */

import DashboardProvider from "../../contexts/DashboardProvider";
import UserProvider from "../../contexts/UserProvider";
import Dashboard from "./Dashboard";

export default function DashboardLayout({ showRoute }) {
  return (
    <UserProvider>
      <DashboardProvider>
        <Dashboard showRoute={showRoute} />
      </DashboardProvider>
    </UserProvider>
  );
}
