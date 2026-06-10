/** @format */

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AgentName from "./Form/AgentName";
import Tone from "./Form/Tone";
import { Onboarding } from "../../../../contexts/Context";
import api from "../../../../api/axios";
import { toast } from "react-toastify";

export default function FourthScreen() {
  const [details, setDetails] = useState({
    agent_name: "",
    tone: "",
  });
  const [tone, setTone] = useState("");
  const [selectTone, setSelectTone] = useState(false);
  const navigate = useNavigate();
  const submit = details.agent_name && details.tone;

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleTone() {
    setSelectTone(!selectTone);
  }

  const { onBoardingDetails } = useContext(Onboarding);

  console.log(onBoardingDetails);
  const token = localStorage.getItem("Token");

  function Next() {
    const data = {
      companyName: onBoardingDetails.companyName,
      industry: onBoardingDetails.industry,
      teamSize: onBoardingDetails.teamSize,
      website: `https://${onBoardingDetails.website}`,
      aiAgentName: details.agent_name,
      aiTone: details.tone,
    };

    console.log(data);

    api
      .post("tenant/onboarding", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        localStorage.removeItem("onBoardingDetails");
        toast.error(err.response.data);
      });

    navigate("/onboarding/5");
  }

  return (
    <div className='flex flex-col h-screen justify-center gap-y-10 p-20 animate-fade-up overflow-scroll no-scrollbar'>
      <div className='mt-50 flex items-center justify-between'>
        <Link to={-1}>
          {" "}
          <span className='text-black text-sm font-normal flex items-center gap-x-2'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.6041 17.5837L5.58331 10.5837C5.49997 10.5003 5.44081 10.41 5.40581 10.3128C5.37081 10.2156 5.35358 10.1114 5.35414 10.0003C5.35414 9.88921 5.37164 9.78505 5.40664 9.68783C5.44164 9.5906 5.50053 9.50033 5.58331 9.41699L12.6041 2.39616C12.7986 2.20171 13.0416 2.10449 13.3333 2.10449C13.625 2.10449 13.875 2.20866 14.0833 2.41699C14.2916 2.62533 14.3958 2.86838 14.3958 3.14616C14.3958 3.42394 14.2916 3.66699 14.0833 3.87533L7.95831 10.0003L14.0833 16.1253C14.2778 16.3198 14.375 16.5595 14.375 16.8445C14.375 17.1295 14.2708 17.3759 14.0625 17.5837C13.8541 17.792 13.6111 17.8962 13.3333 17.8962C13.0555 17.8962 12.8125 17.792 12.6041 17.5837Z'
                fill='#2B2B2B'
                fillOpacity='0.8'
              />
            </svg>
            Back
          </span>
        </Link>{" "}
      </div>
      {/* */}
      <div className='flex flex-col gap-y-6'>
        <div className='flex flex-col gap-y-2'>
          <h2 className='m-0px text-black text-3xl font-bold'>
            Customize your AI{" "}
          </h2>
          <span className='text-light text-base font-normal'>
            Shape how your AI responds to match your business voice{" "}
          </span>
        </div>

        <form className='flex flex-col gap-y-4'>
          <AgentName details={details} handleChange={handleChange} />
          <Tone
            tone={tone}
            selectTone={selectTone}
            handleTone={handleTone}
            handleChange={handleChange}
            setTone={setTone}
          />
        </form>

        <div>
          <button
            disabled={!submit}
            onClick={Next}
            className='bg-bg disabled:bg-disabled disabled:text-black w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg hover:opacity-50'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
