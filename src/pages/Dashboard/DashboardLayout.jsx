/** @format */

import UserProvider from "../../contexts/UserProvider";
import Dashboard from "./Dashboard";

export default function DashboardLayout() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}
