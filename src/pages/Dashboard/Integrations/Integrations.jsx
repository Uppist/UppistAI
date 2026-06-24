/** @format */

import { useNavigate, useSearchParams } from "react-router-dom";
import Container from "./Container";

export default function Integrations() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const typeParam = searchParams.get("type");
  const active = typeParam === "channel" ? "channel" : typeParam || "all";

  return (
    <div className='flex flex-col gap-y-5 p-6 pr-6'>
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
              active === "channel"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/integrations?type=channel")}
          >
            Channels
          </span>{" "}
          <span
            className={
              active === "CRM"
                ? "cursor-pointer bg-pink border text-bg border-pink px-3 py-1.5 rounded-lg"
                : "cursor-pointer text-black font-normal px-3 py-1.5"
            }
            onClick={() => navigate("/integrations?type=CRM")}
          >
            CRM
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

      <Container />
    </div>
  );
}
