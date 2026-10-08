import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Close({ onClose, CloseChat, isClick }) {
  return (
    <div className="dropdown">
      <div className="overlay" onClick={onClose}></div>
      <div className="absolute flex flex-col gap-y-10 w-100  bg-white rounded-lg p-4  items-end justify-center">
        <svg
          className="cursor-pointer flex"
          onClick={onClose}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 11.236L5.993 5.993L11.236 11.236M11.236 0.75L5.992 5.993L0.75 0.75"
            stroke="#2B2B2B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex flex-col gap-y-6.5 w-full">
          <div className="flex flex-col gap-y-2 text-center">
            <span className="text-xl font-semibold text-bg">
              Close this conversation
            </span>
          </div>
        </div>

        <div className="flex items-center gap-x-10 justify-center w-full">
          <button
            className="p-3.5 px-10 rounded-lg cursor-pointer border border-light-grey text-light-black text-sm font-semibold hover:bg-slate-100"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className="text-sm font-semibold text-white cursor-pointer bg-bg p-3.5 px-10 rounded-lg hover:opacity-50"
            onClick={CloseChat}
          >
            {isClick ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress
                  size={20}
                  sx={{ color: "white" }}
                  aria-label="loading..."
                />
              </Box>
            ) : (
              "Close"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
