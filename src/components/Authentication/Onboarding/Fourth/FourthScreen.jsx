/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgentName from "./Form/AgentName";
import Tone from "./Form/Tone";

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

  function Next() {
    navigate("/onboarding/5");
  }
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
            className='bg-bg disabled:bg-disabled disabled:text-black w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
