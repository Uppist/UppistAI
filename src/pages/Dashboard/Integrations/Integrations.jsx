/** @format */

import { useNavigate, useSearchParams } from "react-router-dom";
import Container from "./Container";
import { useContext } from "react";
import { UserContext } from "../../../contexts/Context";
// import { useState } from "react";

export default function Integrations() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const typeParam = searchParams.get("type");
  const active = typeParam === "channel" ? "channel" : typeParam || "all";

  const { userDetails } = useContext(UserContext);

  // const [isActive, setIsActive] = useState(false);
  return (
    <div className='flex flex-col gap-y-5 p-6 pr-6'>
      {/*If onboarding is not complete */}
      {userDetails?.tenant?.onboardingCompleted === false && (
        <div className='flex items-center gap-x-10'>
          <div className='flex items-center gap-x-4'>
            <span className='w-7.5 h-7.5 rounded-full bg-bg flex items-center justify-center text-xs font-semibold text-white'>
              1
            </span>
            <span className='text-xs font-semibold text-grey'>
              Connect Channels
            </span>
          </div>
          <div
            className='flex items-center gap-x-4 cursor-pointer '
            onClick={() => navigate("/settings?type=agents")}
          >
            <span className='w-7.5 h-7.5 rounded-full border border-grey flex items-center justify-center text-xs font-semibold text-grey'>
              2
            </span>
            <span className='text-xs font-semibold text-grey'>
              Customize AI
            </span>
          </div>
        </div>
      )}

      <div className='flex items-center justify-between'>
        {/*All, Channel, CRM */}
        <div className='p-1 border border-light-grey rounded-xl w-fit flex items-center gap-x-3 pr-5'>
          {" "}
          <span
            className={
              active === "all"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/integrations")}
          >
            All
          </span>
          <span
            className={
              active === "whatsapp"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/integrations?type=whatsapp")}
          >
            WhatsApp
          </span>{" "}
          <span
            className={
              active === "website"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/integrations?type=website")}
          >
            Website Chat
          </span>{" "}
          <span
            className={
              active === "social_media"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/integrations?type=social_media")}
          >
            Social Media
          </span>{" "}
          <span
            className={
              active === "email"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/integrations?type=email")}
          >
            Email
          </span>{" "}
        </div>

        {/*Search bar */}
        <div>
          <input
            className='input'
            placeholder='Search'
            type='search'
            name=''
            id=''
          />
        </div>
      </div>

      <Container active={active} />
    </div>
  );
}
