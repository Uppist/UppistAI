/** @format */

import { useState } from "react";
import Website from "./Website";

export default function Buttons({ onClose, Success }) {
  const [isNext, setIsNext] = useState(false);

  function Next() {
    setIsNext(true);
  }
  return (
    <div className='flex items-center gap-x-4 mt-10'>
      {isNext ? (
        <Website onClose={onClose} Success={Success} />
      ) : (
        <>
          <button
            type='button'
            className='border border-light-grey p-3 px-10 rounded-lg text-sm font-semibold text-light-black cursor-pointer hover:bg-light-grey'
            onClick={onClose}
          >
            Cancel
          </button>
          <button type='button' className='button px-10' onClick={Next}>
            Next
          </button>
        </>
      )}
    </div>
  );
}
