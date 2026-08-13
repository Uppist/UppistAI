/** @format */

export default function Name({ details, handleChange }) {
  return (
    <div className='flex flex-col gap-y-4 '>
      <div className='flex flex-col gap-y-3 '>
        <h3 className='text-base text-black font-bold'>Company Name</h3>
        <input
          className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
          placeholder='Enter your full name'
          type='text'
          name='full_name'
          id=''
          value={details?.full_name}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-y-3 '>
        <h3 className='text-base text-black font-bold'>Work Email </h3>
        <input
          className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
          placeholder='Enter your work email'
          type='email'
          name='email'
          value={details?.email}
          onChange={handleChange}
          id=''
        />
      </div>
    </div>
  );
}
