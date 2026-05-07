/** @format */

export default function Tone({
  tone,
  selectTone,
  handleTone,
  setTone,
  handleChange,
}) {
  const toneList = [
    "Professional",
    "Friendly",
    "Empathetic",
    "Casual",
    "Premium",
  ];
  return (
    <div className='flex flex-col gap-y-3 relative'>
      <h3 className='text-base text-black font-bold'>Tone</h3>

      <div
        className='flex items-center justify-between cursor-pointer w-full p-3 border border-light-grey rounded-lg'
        onClick={handleTone}
      >
        <span className='text-black text-base font-normal'>
          {tone || "Select a tone"}
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

      {selectTone && (
        <div className='absolute top-full mt-2 flex flex-col gap-y-4 z-50 bg-white w-full shadow-md rounded-lg p-4'>
          {toneList.map((item) => (
            <span
              key={item}
              className='cursor-pointer text-black text-sm font-normal hover:opacity-60'
              onClick={() => {
                setTone(item);
                handleTone();
                handleChange({ target: { name: "tone", value: item } });
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
