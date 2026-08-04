/** @format */

import DashboardProvider from "../../contexts/DashboardProvider";
import UserProvider from "../../contexts/UserProvider";
import Dashboard from "./Dashboard";

export default function DashboardLayout() {
  return (
    <UserProvider>
      <DashboardProvider>
        <Dashboard />
      </DashboardProvider>
    </UserProvider>
  );
}
