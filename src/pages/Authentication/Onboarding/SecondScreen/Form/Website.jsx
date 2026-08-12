/** @format */

export default function Website({ details, handleChange }) {
  return (
    <div className='flex flex-col gap-y-3'>
      {" "}
      <h3 className='text-base text-black font-bold'>Website</h3>
      <input
        className='border border-light-grey p-3 rounded-lg outline-none'
        type='text'
        name='website'
        value={details.website}
        onChange={handleChange}
        id=''
        placeholder='Enter your website URL example: www.google.com'
      />
    </div>
  );
}
