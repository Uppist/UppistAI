/** @format */

export default function Delete({ onClose, handleDeleteTag }) {
  return (
    <div className='dropdown'>
      <div className='overlay' onClick={onClose}></div>

      <div className='relative z-10 flex flex-col gap-y-4 bg-white rounded-lg p-4 items-end justify-center max-w-md w-full'>
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
              Delete Intent Tag
            </span>
            <p className='text-grey text-base font-normal'>
              This will permanently remove the intent tag and its configuration.
              This action cannot be undone.
            </p>
          </div>
        </div>

        <div className='flex items-center gap-x-10'>
          <button
            className='p-3.5 px-10 rounded-lg cursor-pointer border border-light-grey text-light-black text-sm font-semibold hover:bg-slate-100'
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type='button'
            className='text-sm font-semibold text-white cursor-pointer bg-red p-3.5 px-10 rounded-lg hover:bg-red-800'
            onClick={handleDeleteTag}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
