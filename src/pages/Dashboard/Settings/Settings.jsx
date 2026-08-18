/** @format */

import { useContext } from "react";
import { UserContext } from "../../../contexts/Context";
import Agent from "./Agent/Agent";
import Billing from "./Billing/Billing";
import Tags from "./Intent/Tags";
import Profile from "./Profile/Profile";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "./API/API";
import Knowledge from "./Knowledge/Knowledge";

export default function Settings() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const typeParam = searchParams.get("type");
  const active = typeParam === "agents" ? "agents" : typeParam || "profile";
  const { userDetails } = useContext(UserContext);

  const showBanner =
    userDetails?.tenant?.onboardingCompleted === false && active === "agents";
  const role = userDetails?.user?.role;

  return (
    <div className='flex flex-col gap-y-5 p-6'>
      {/*If onboarding is not complete */}

      {showBanner && (
        <div className='flex items-center gap-x-10'>
          <div
            className='flex items-center gap-x-4 cursor-pointer'
            onClick={() => navigate("/integrations")}
          >
            <span className='w-7.5 h-7.5 rounded-full bg-bg flex items-center justify-center text-xs font-semibold text-white'>
              <svg
                width='13'
                height='10'
                viewBox='0 0 13 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 5.74918L1.53094 4.24764L4.33514 6.99692L11.4691 0L13 1.50154L4.33405 10L0 5.74918Z'
                  fill='white'
                />
              </svg>
            </span>
            <span className='text-xs font-semibold text-grey'>
              Connect Channels
            </span>
          </div>
          <div
            className='flex items-center gap-x-4 cursor-pointer '
            onClick={() => navigate("/settings?type=agents")}
          >
            <span className='w-7.5 h-7.5 rounded-full bg-bg flex items-center justify-center text-xs font-semibold text-white'>
              2
            </span>
            <span className='text-xs font-semibold text-grey'>
              Customize AI
            </span>
          </div>
        </div>
      )}

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
        {(role === "owner" || role === "admin") && (
          <span
            className={
              active === "agents"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/settings?type=agents")}
          >
            Agents
          </span>
        )}
        {role === "owner" && (
          <span
            className={
              active === "tags"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/settings?type=tags")}
          >
            Intent Tags
          </span>
        )}{" "}
        {role === "owner" && (
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
        )}
        {role === "owner" && (
          <span
            className={
              active === "knowledge_base"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/settings?type=knowledge_base")}
          >
            Knowledge Base
          </span>
        )}
        {role === "owner" && (
          <span
            className={
              active === "api"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/settings?type=api")}
          >
            API Management
          </span>
        )}
      </div>

      <>
        {active === "profile" && <Profile role={role} />}
        {active === "agents" && <Agent />}
        {active === "tags" && <Tags />}
        {active === "billing" && <Billing />}
        {active === "knowledge_base" && <Knowledge />}
        {active === "api" && <API />}
      </>
    </div>
  );
}
