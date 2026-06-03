/** @format */

import Channels from "../Agent/Channels";

export default function CreateIntent({ onClose, mode, formData, setFormData }) {
  function handleChange(e) {
    setFormData({ ...formData, title: e.target.value });
  }

  console.log(formData);

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
            <button className='button' onClick={onClose}>
              Create Intent Tag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
