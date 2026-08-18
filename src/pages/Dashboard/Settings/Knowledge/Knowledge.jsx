/** @format */

import { useContext, useState } from "react";
import Container from "./Container";
import CreateBase from "./CreateBase";
import { GetDocumentContext } from "../../../../contexts/Context";

export default function Knowledge() {
  const [onClick, setOnClick] = useState(false);
  function Create() {
    setOnClick(!onClick);
  }

  const { documents } = useContext(GetDocumentContext);
  return (
    <div className='flex flex-col gap-y-5'>
      <div className='flex items-center justify-between'>
        {/*Heading */}
        <div className='flex flex-col gap-y-0.5'>
          <h3 className='text-black font-semibold text-base'>Sources</h3>
          <span className='text-xs font-normal text-grey'>
            {documents.length} items in the knowledge base{" "}
          </span>
        </div>

        {/*Details */}
        <div className='flex relative items-center gap-x-5'>
          {/*Create Knowledge base button */}
          <button
            className='flex items-center gap-x-2 rounded-lg bg-bg border-none text-white text-sm font-semibold py-2.5 px-3 cursor-pointer hover:opacity-50'
            onClick={Create}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 3.33398V16.6673'
                stroke='white'
                strokeWidth='1.67'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3.3335 10H16.6668'
                stroke='white'
                strokeWidth='1.67'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Add Knowledge Base
          </button>
        </div>

        {onClick && <CreateBase onClose={() => setOnClick(false)} />}
      </div>
      <Container />
    </div>
  );
}
