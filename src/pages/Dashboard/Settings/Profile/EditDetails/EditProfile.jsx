/** @format */

export default function EditProfile({
  onClose,
  details,
  handleChange,
  Changes,
  changes,
}) {
  return (
    <div className='dropdown'>
      {/*overlay */}

      <div className='overlay' onClick={onClose}></div>
      {/*User Container */}
      <div className='absolute flex flex-col gap-y-4 w-1/2  bg-white rounded-lg p-4  items-end justify-center'>
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
          {" "}
          <div className='flex flex-col gap-y-2 items-center'>
            <span className='text-xl font-semibold text-bg'>Edit Profile</span>
            {/* <p className='text-grey text-base font-normal w-auto text-center'>
              Don’t worry we can help.
            </p> */}
          </div>
          {/*Edit Profile */}
          <div className='flex flex-col gap-y-6 px-20'>
            {/*First and Last */}
            {/* <div className='flex items-center justify-between gap-x-6'>
              <div className='flex flex-col gap-y-1.5'>
                <span className='text'>First Name</span>
                <input
                  type='text'
                  name='first_name'
                  value={details.first_name}
                  onChange={handleChange}
                  className='input'
                  id=''
                />
              </div>

              <div className='flex flex-col gap-y-1.5'>
                <span className='text'>Last Name</span>
                <input
                  type='text'
                  name='last_name'
                  value={details.last_name}
                  onChange={handleChange}
                  className='input'
                  id=''
                />
              </div>
            </div> */}

            {/*Work Email */}
            <div className='flex flex-col gap-y-1.5'>
              <span className='text'>Work Email</span>
              <input
                type='email'
                name='work_email'
                value={details.work_email}
                onChange={handleChange}
                className='input'
                id=''
              />
            </div>
            {/*Company Name*/}
            <div className='flex flex-col gap-y-1.5'>
              <span className='text'>Company Name</span>
              <input
                type='text'
                name='company_name'
                value={details.company_name}
                onChange={handleChange}
                className='input'
                id=''
              />
            </div>

            {/*Submit Button */}
            <div className='flex justify-end'>
              <button
                className='button'
                onClick={() => {
                  Changes();
                  onClose();
                }}
                disabled={!changes}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
