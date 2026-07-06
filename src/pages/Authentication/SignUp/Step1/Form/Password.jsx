/** @format */

export default function Password({ details, handleChange }) {
  return (
    <div className='flex flex-col gap-y-4 '>
      <div className='flex flex-col gap-y-3 '>
        <h3 className='text-base text-black font-bold'>Password</h3>
        <input
          className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
          placeholder='Enter your password'
          type='password'
          name='password'
          id=''
          value={details?.password}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-y-3 '>
        <h3 className='text-base text-black font-bold'>Confirm Password</h3>
        <input
          className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
          placeholder='Confirm your password'
          type='password'
          name='confirm_password'
          id=''
          value={details?.confirm_password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
