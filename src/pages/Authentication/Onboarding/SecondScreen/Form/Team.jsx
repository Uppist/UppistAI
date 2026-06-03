/** @format */

export default function Team({
  handleTeam,
  teamSize,
  setTeamSize,
  selectTeamSize,
  handleChange,
}) {
  const teamList = ["1-10", "11-50", "51-200", "201-1000"];
  return (
    <div className='flex flex-col gap-y-3 relative'>
      {" "}
      <h3 className='text-base text-black font-bold'>Team size</h3>
      <div
        className='flex items-center justify-between relative cursor-pointer w-full p-3 border border-light-grey rounded-lg'
        onClick={handleTeam}
      >
        <span className='text-black text-base font-normal'>
          {teamSize || "Select size"}
        </span>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.5'>
            <path
              d='M4 6L8 10L12 6'
              stroke='#2B2B2B'
              strokeWidth='1.33333'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
        </svg>

        {selectTeamSize && (
          <div className='flex flex-col gap-y-6 absolute top-12 bg-white w-full shadow-md rounded-lg p-6'>
            {teamList.map((item) => (
              <span
                className='cursor-pointer text-black text-sm font-normal hover:opacity-60'
                onClick={() => {
                  setTeamSize(item);
                  handleTeam();
                  handleChange({ target: { name: "teamSize", value: item } });
                }}
              >
                {item}
              </span>
            ))}{" "}
          </div>
        )}
      </div>{" "}
    </div>
  );
}
