/** @format */

import Agent from "./Agent/Agent";
import Billing from "./Billing/Billing";
import Tags from "./Intent/Tags";
import Profile from "./Profile/Profile";
import { useState } from "react";

export default function Settings() {
  const [active, setActive] = useState("profile");

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
          onClick={() => setActive("profile")}
        >
          Profile
        </span>
        <span
          className={
            active === "agents"
              ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
              : "cursor-pointer text-black font-normal px-3 py-1.5"
          }
          onClick={() => setActive("agents")}
        >
          Agents
        </span>{" "}
        <span
          className={
            active === "tags"
              ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
              : "cursor-pointer text-black font-normal px-3 py-1.5"
          }
          onClick={() => setActive("tags")}
        >
          Intent Tags
        </span>{" "}
        <span
          className={
            active === "billing"
              ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
              : "cursor-pointer text-black font-normal px-3 py-1.5"
          }
          onClick={() => setActive("billing")}
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
