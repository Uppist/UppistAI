/** @format */

export default function Form({ details, handleChange }) {
  return (
    <div>
      <div className='flex flex-col gap-y-3 '>
        <h3 className='text-base text-black font-bold'>Work Email </h3>
        <input
          className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
          placeholder='Enter your work email'
          type='email'
          name='email'
          value={details.email}
          onChange={handleChange}
          id=''
        />
      </div>

      <div className='flex flex-col gap-y-3 '>
        <h3 className='text-base text-black font-bold'>Password</h3>
        <input
          className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
          placeholder='Enter your password'
          type='password'
          name='password'
          value={details.password}
          onChange={handleChange}
          id=''
        />
      </div>
    </div>
  );
}
