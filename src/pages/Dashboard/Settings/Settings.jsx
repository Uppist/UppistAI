/** @format */

import Agent from "./Agent/Agent";
import Billing from "./Billing/Billing";
import Tags from "./Intent/Tags";
import Profile from "./Profile/Profile";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const typeParam = searchParams.get("type");
  const active = typeParam === "agents" ? "agents" : typeParam || "profile";

  return (
    <div className='flex flex-col gap-y-5 p-6'>
      <div className='p-1 border border-light-grey rounded-xl w-fit flex items-center gap-x-5 pr-5'>
        {" "}
        <span
          className={
            active === "profile"
              ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
              : "cursor-pointer text-black font-normal px-3 py-1.5"
          }
          onClick={() => navigate("/settings")}
        >
          Profile
        </span>
        <span
          className={
            active === "agents"
              ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
              : "cursor-pointer text-black font-normal px-3 py-1.5"
          }
          onClick={() => navigate("/settings?type=agents")}
        >
          Agents
        </span>{" "}
        <span
          className={
            active === "tags"
              ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
              : "cursor-pointer text-black font-normal px-3 py-1.5"
          }
          onClick={() => navigate("/settings?type=tags")}
        >
          Intent Tags
        </span>{" "}
        <span
          className={
            active === "billing"
              ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
              : "cursor-pointer text-black font-normal px-3 py-1.5"
          }
          onClick={() => navigate("/settings?type=billing")}
        >
          Billing
        </span>
      </div>

      <>
        {active === "profile" && <Profile />}
        {active === "agents" && <Agent />}
        {active === "tags" && <Tags />}
        {active === "billing" && <Billing />}
      </>
    </div>
  );
}
