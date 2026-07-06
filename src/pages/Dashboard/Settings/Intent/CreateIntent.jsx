/** @format */

import { toast } from "react-toastify";
import api from "../../../../api/axios";
import Channels from "../Agent/Channels";
import { CreateIntentContext } from "../../../../contexts/Context";
import { useContext } from "react";

export default function CreateIntent({ onClose, mode, formData, setFormData }) {
  function handleChange(e) {
    setFormData({ ...formData, title: e.target.value });
  }

  const { setGetIntents } = useContext(CreateIntentContext);
  console.log(formData);

  function handleCreateIntent() {
    const data = {
      name: formData.title,
      channels: formData.channels,
    };

    const headers = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    };

    if (mode === "create") {
      api
        .post(`/dashboard/intents`, data, headers)
        .then((res) => {
          console.log("Intent tag created:", res.data);

          toast.success("Intent tag created successfully!");
          setGetIntents((getIntents) => [
            ...getIntents,
            {
              ...res.data.intent,
              conversationCount: 0,
            },
          ]);
          onClose();
        })
        .catch((err) => {
          console.error("Error creating intent tag:", err);
          toast.error("Unable to create intent tag");
        });
    } else {
      api
        .patch(`/dashboard/intents/${formData.id}`, data, headers)
        .then((res) => {
          console.log("Intent tag updated:", res.data);

          toast.success("Intent tag updated successfully!");
          setGetIntents((getIntents) =>
            getIntents.map((intent) =>
              intent.id === formData.id
                ? {
                    ...intent,
                    tag: res.data.intent?.tag || formData.title,
                    channels: res.data.intent?.channels || formData.channels,
                  }
                : intent,
            ),
          );
          onClose();
        })
        .catch((err) => {
          console.error("Error updating intent tag:", err);
          toast.error("Unable to update intent tag");
        });
    }
  }

  return (
    <div className='dropdown'>
      <div className='overlay' onClick={onClose}></div>

      {/*Intent Container */}
      <div className='absolute flex flex-col gap-y-4 w-1/2 bg-white rounded-lg p-15 items-end justify-center'>
        {/*Close button */}
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
        <div className='flex flex-col gap-y-6.5 w-full'>
          {/*Create Intent text */}
          <div className='flex flex-col gap-y-2 text-center'>
            <span className='text-xl font-semibold text-bg'>
              {mode === "create" ? "Create New" : "Edit"} Intent Tag
            </span>
            <p className='text-grey text-base font-normal'>
              Create a label that helps categorize intents across your
              agent.{" "}
            </p>
          </div>

          <div className='flex flex-col gap-y-1.5'>
            <span className='text'>Intent Tag Name</span>
            <input
              className='input'
              type='text'
              name=''
              id=''
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <Channels
            selectedChannels={formData.channels}
            onChannelChange={(channels) =>
              setFormData({ ...formData, channels })
            }
          />
          <div className='flex justify-end'>
            <button
              className='button'
              type='button'
              onClick={handleCreateIntent}
            >
              {mode === "create" ? "Create " : "Edit "}
              Intent Tag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
