/** @format */

export default function Company({ details, handleChange }) {
  return (
    <div className='flex flex-col gap-y-3 '>
      <h3 className='text-base text-black font-bold'>Company name</h3>
      <input
        className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
        placeholder='Enter your company name'
        type='text'
        name='company'
        value={details.company}
        onChange={handleChange}
        id=''
      />
    </div>
  );
}
