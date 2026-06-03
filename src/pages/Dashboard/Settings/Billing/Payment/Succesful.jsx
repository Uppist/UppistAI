/** @format */

export default function Succesful({ onClose, openCard }) {
  let message = "";
  let card = "";
  if (openCard === "payment") {
    card = "Payment";
    message =
      "Your funds have been added to your available balance successfully.";
  } else if (openCard === "new" || openCard === "edit") {
    card = openCard === "new" ? "Card added" : "Card updated";
    message =
      "You can now use this card to add funds and complete future payments faster.";
  }
  return (
    <div className='absolute flex flex-col gap-y-4   bg-white rounded-lg p-10  items-end justify-center'>
      {/*Close button */}
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

      <div className='flex flex-col items-center gap-y-3 w-full'>
        {/*Success Icon */}
        <svg
          width='80'
          height='80'
          viewBox='0 0 80 80'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M39.9997 3.33398C19.753 3.33398 3.33301 19.754 3.33301 40.0006C3.33301 60.2473 19.753 76.6673 39.9997 76.6673C60.2463 76.6673 76.6663 60.2473 76.6663 40.0006C76.6663 19.754 60.2463 3.33398 39.9997 3.33398ZM34.9997 55.0006L19.9997 40.0006L24.9997 35.0006L34.9997 45.0006L54.853 25.1473L59.853 29.8573L34.9997 55.0006Z'
            fill='#21CA97'
          />
        </svg>

        <span className='text-xl font-semibold text-bg'>
          {card} successfully🎉
        </span>
        <p className='w-120 text-center text-base font-normal text-grey'>
          {message}
        </p>

        <button className='button' onClick={onClose}>
          Okay
        </button>
      </div>
    </div>
  );
}
