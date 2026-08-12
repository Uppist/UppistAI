/** @format */

export default function Industry({
  industry,
  handleIndustry,
  selectIndustry,
  setIndustry,
  handleChange,
  showInput,
  details,
}) {
  const industryList = [
    "Banking & Finance",
    "Healthcare",
    "Logistics",
    "E-commerce",
    "Technology",
    "Hospitality",
    "Others",
  ];

  return (
    <div className='flex flex-col gap-y-3 relative'>
      <h3 className='text-base text-black font-bold'>Industry</h3>

      <div
        className='flex items-center justify-between cursor-pointer w-full p-3 border border-light-grey rounded-lg'
        onClick={handleIndustry}
      >
        <span className='text-black text-base font-normal'>
          {industry || "Select an industry"}
        </span>

        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M4 6L8 10L12 6'
            stroke='#2B2B2B'
            strokeWidth='1.33333'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      {selectIndustry && (
        <div className='absolute top-full mt-2 flex flex-col gap-y-4 z-50 bg-white w-full shadow-md rounded-lg p-4'>
          {industryList.map((item) => (
            <span
              key={item}
              className='cursor-pointer text-black text-sm font-normal hover:opacity-60'
              onClick={() => {
                setIndustry(item);
                handleIndustry();
                handleChange({ target: { name: "industry", value: item } });
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
      {showInput && (
        <div>
          <input
            className='border border-light-grey p-3 rounded-lg outline-none w-full'
            type='text'
            name=''
            value={details?.other_industry}
            onChange={handleChange}
            id=''
            placeholder='Please enter your industry'
          />
        </div>
      )}
    </div>
  );
}
