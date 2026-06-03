/** @format */

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    console.log(onBoardingDetails);
  });
  return (
    <div className='flex flex-col h-screen justify-center gap-y-10 p-20 animate-fade-up overflow-scroll no-scrollbar'>
      <div className='mt-50 flex items-center justify-between'>
        <span className='text-bg text-sm font-normal'>Skip</span>
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
