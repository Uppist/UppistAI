/** @format */

import { useContext, useState } from "react";
import Company from "./Form/Company";
import Industry from "./Form/Industry";
import Team from "./Form/Team";
import Website from "./Form/Website";
import { useNavigate } from "react-router-dom";
import { Onboarding } from "../../../../contexts/Context";

export default function SecondScreen() {
  const [industry, setIndustry] = useState("");
  const [selectIndustry, setSelectIndustry] = useState(false);
  const [teamSize, setTeamSize] = useState("");
  const [selectTeamSize, setSelectTeamSize] = useState(false);
  const [details, setDetails] = useState({
    company: "",
    industry: "",
    teamSize: "",
    website: "",
  });
  const submit =
    details.company &&
    details.industry !== "" &&
    details.teamSize !== "" &&
    details.website;

  const navigate = useNavigate();
  const { setOnBoardingDetails } = useContext(Onboarding);

  function handleIndustry() {
    setSelectIndustry(!selectIndustry);
  }

  function handleTeam() {
    setSelectTeamSize(!selectTeamSize);
  }

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function Next() {
    setOnBoardingDetails({
      companyName: details.company,
      industry: details.industry,
      teamSize: details.teamSize,
      website: details.website,
    });

    navigate("/onboarding/3");
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
            About your business
          </h2>
          <span className='text-light text-base font-normal'>
            Helps us tailor the AI to your needs
          </span>
        </div>

        <form className='flex flex-col gap-y-4'>
          <Company details={details} handleChange={handleChange} />
          <Industry
            industry={industry}
            handleIndustry={handleIndustry}
            selectIndustry={selectIndustry}
            setIndustry={setIndustry}
            handleChange={handleChange}
          />
          <Team
            handleTeam={handleTeam}
            teamSize={teamSize}
            setTeamSize={setTeamSize}
            selectTeamSize={selectTeamSize}
            handleChange={handleChange}
          />
          <Website details={details} handleChange={handleChange} />
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
