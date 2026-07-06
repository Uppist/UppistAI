/** @format */

import reply from "../../../../assets/Dashboard/settings/agent/reply.svg";
import { Switch } from "@mui/material";
import UploadKnowledge from "./UploadKnowledge";
import { useContext, useState } from "react";
import Channels from "./Channels";
import api from "../../../../api/axios";
import { CreateAgentContext } from "../../../../contexts/Context";
import { toast } from "react-toastify";

export default function CreateAgent({ onClose, agent = null }) {
  const isEditing = Boolean(agent);
  const [toneList, setToneList] = useState(agent?.tone || "Professional");
  const [selectTone, setSelectTone] = useState(false);
  const [name, setName] = useState(agent?.name || "");
  const tone = ["Professional", "Friendly", "Empathetic", "Casual", "Premium"];

  function handleTone() {
    setSelectTone(!selectTone);
  }

  //url and knowlodge base upload
  const [details, setDetails] = useState({
    file: "",
    website: "",
  });

  const { setGetAgents } = useContext(CreateAgentContext);
  const [selectedChannels, setSelectedChannels] = useState(
    agent?.channels || [],
  );

  //function to create agent
  async function handleCreateAgent() {
    const data = {
      name: name,
      tone: toneList || "Professional",
      channels: selectedChannels,
      isDefault: agent?.isDefault ?? false,
    };
    const formData = new FormData();
    formData.append("file", details.file);

    console.log(details.file, details.website);

    console.log(data);

    const token = localStorage.getItem("Token");

    try {
      let res;

      // If editing, use PATCH; otherwise, use POST
      if (isEditing && agent?.id) {
        res = await api.patch(`/agents/${agent.id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        res = await api.post("/agents", data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      const savedAgent = res.data.agent || res.data;
      const agentId = savedAgent?.id || agent?.id;

      // Upload knowledge base if file or website is provided
      if (details.file && agentId) {
        const uploadRes = await api.post(
          `/agents/${agentId}/kb/upload`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        console.log(uploadRes.data);
      }

      if (details.website && agentId) {
        const urlRes = await api.post(
          `/agents/${agentId}/kb/url`,
          { url: `https://${details.website}` },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        console.log(urlRes.data);
      }

      if (isEditing && agent?.id) {
        setGetAgents((getAgents) =>
          getAgents.map((item) =>
            item.id === agent.id ? { ...item, ...savedAgent } : item,
          ),
        );
        toast.success("Agent updated successfully!", { autoClose: 2000 });
      } else {
        setGetAgents((getAgents) => {
          return [...getAgents, savedAgent];
        });
        toast.success("Agent created successfully!", { autoClose: 2000 });
      }
      onClose();
    } catch (err) {
      console.error(err.response?.data || err);

      toast.error(
        isEditing ? "Failed to update agent." : "Failed to create agent.",
        {
          autoClose: 2000,
        },
      );
    }
  }
  return (
    <div className='dropdown'>
      <div className='overlay' onClick={onClose}></div>

      {/*Agent Container */}
      <div className='absolute flex flex-col gap-y-4  bg-white rounded-lg p-4 items-end justify-center'>
        <svg
          className='cursor-pointer flex'
          onClick={onClose}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.75 11.236L5.993 5.993L11.236 11.236M11.236 0.75L5.992 5.993L0.75 0.75'
            stroke='#2B2B2B'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <div className='flex flex-col gap-y-6.5'>
          {" "}
          {/*Create Agent text */}
          <div className='flex flex-col gap-y-2 text-center'>
            <span className='text-xl font-semibold text-bg'>
              {isEditing ? "Edit Agent" : "Create New Agent"}
            </span>
            <p className='text-grey text-base font-normal'>
              {isEditing
                ? "Update your AI agent's personality, knowledge and channels."
                : "Configure your AI agent's personality, knowledge and channels."}
            </p>
          </div>
          {/*Assign to channel */}
          <div className='flex flex-col gap-y-6 h-80 overflow-scroll no-scrollbar'>
            {/*Agent information */}
            <div className='flex items-center gap-x-4'>
              {/*Agent Name */}
              <div className='flex flex-col gap-y-1.5'>
                <label htmlFor='' className='text-sm font-bold text-black'>
                  Agent Name
                </label>
                <input
                  type='text'
                  className='p-2 border border-light-grey rounded-lg w-80 outline-none'
                  name='name'
                  id=''
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/*Tone */}
              <div className='relative flex flex-col gap-y-1.5'>
                <label htmlFor='' className='text-sm font-bold text-black'>
                  Tone
                </label>
                <div
                  className='p-2 border  text-sm font-normal text-black cursor-pointer border-light-grey w-80 rounded-lg flex items-center gap-x-1 justify-between'
                  onClick={handleTone}
                >
                  {toneList || "Professional"}{" "}
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g opacity='0.5'>
                      <path
                        d='M4 6L8 10L12 6'
                        stroke='#2B2B2B'
                        strokeWidth='1.33333'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </g>
                  </svg>
                </div>{" "}
                {selectTone && (
                  <div className='absolute top-17 flex flex-col gap-y-4 z-50 bg-white w-full shadow-md rounded-lg p-4'>
                    {tone.map((item) => (
                      <span
                        key={item}
                        className='cursor-pointer text-black text-sm font-normal hover:opacity-60'
                        onClick={() => {
                          setToneList(item);
                          handleTone();
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/*Channels */}
            <div className='flex flex-col gap-y-6'>
              <Channels
                selectedChannels={selectedChannels}
                onChannelChange={setSelectedChannels}
              />

              {/*Automation rules */}
              <div className='flex flex-col gap-y-2'>
                <label htmlFor='' className='text-sm font-bold text-black'>
                  Automation rules
                </label>
                <div className='border border-light-grey flex justify-between p-4 rounded-xl'>
                  <div className='flex items-center gap-x-2'>
                    <div className='p-3.5 w-fit rounded-lg bg-light-grey'>
                      <img src={reply} alt='' />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <h3 className='text-xs font-medium text-black'>
                        Auto Reply
                      </h3>
                      <span className='text-[10px] font-normal text-grey'>
                        AI responds instantly to common queries
                      </span>
                    </div>
                  </div>
                  <Switch color='warning' />
                </div>
              </div>

              {/*Knowledge base */}
              <div className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-0.5'>
                  <h3 className='text-sm font-bold text-black'>
                    Knowledge base
                  </h3>
                  <span className='text-[10px] font-normal text-grey'>
                    This agent will only answer questions based on the sources
                    you add here.
                  </span>
                </div>
                {/*Upload pdf */}
                <div className='grid grid-cols-2 gap-x-4'>
                  <UploadKnowledge details={details} setDetails={setDetails} />
                  <input
                    type='text'
                    className='p-4 border border-light-grey rounded-lg w-full h-fit outline-none'
                    placeholder='Website URL'
                    value={details.website}
                    onChange={(e) =>
                      setDetails({ ...details, website: e.target.value })
                    }
                    name='website'
                    id=''
                  />
                </div>
              </div>
              <div className='flex justify-end w-full'>
                <button
                  className='bg-bg py-3 px-6 rounded-xl text-white font-semibold text-sm cursor-pointer hover:opacity-50'
                  onClick={handleCreateAgent}
                >
                  {isEditing ? "Save Changes" : "Create Agent"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
