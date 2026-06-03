/** @format */

export default function AgentName({ details, handleChange }) {
  return (
    <div className='flex flex-col gap-y-3 '>
      <h3 className='text-base text-black font-bold'>AI Agent Name</h3>
      <input
        className=' border border-light-grey text-black text-base p-3 rounded-lg outline-none'
        placeholder='Enter your agent name'
        type='text'
        name='agent_name'
        value={details.agent_name}
        onChange={handleChange}
        id=''
      />
    </div>
  );
}
