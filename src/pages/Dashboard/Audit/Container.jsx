/** @format */

import { formatDateTime } from "../../../utils/DateTime";

export default function Container({ auditLog = [] }) {
  return (
    <div className='flex flex-col gap-y-7.5 '>
      {/*Heading */}
      <div className='flex flex-col gap-y-0.5'>
        <h3 className='text-black font-semibold text-base'>Events breakdown</h3>
        <span className='text-xs font-normal text-grey'>
          Every user action is recorded for accountability.{" "}
        </span>
      </div>
      <div className='flex flex-col gap-y-5 h-80 overflow-scroll no-scrollbar'>
        <div className='grid grid-cols-6 border-b border-b-light-grey pb-7'>
          <span className='text-sm font-semibold text-black'>User</span>
          <span className='text-sm font-semibold text-black'>Role</span>
          <span className='text-sm font-semibold text-black'>Action</span>
          <span className='text-sm font-semibold text-black'>Module</span>
          <span className='text-sm font-semibold text-black'>Target</span>
          <span className='text-sm font-semibold text-black'>Date/Time</span>
        </div>

        {/*List*/}

        {auditLog.length === 0 && (
          <div className='flex flex-col gap-y-2 items-center justify-center h-full'>
            <span className='text-light-black text-sm font-semibold'>
              No audit logs found.
            </span>
          </div>
        )}

        {(auditLog || []).map((data, index) => (
          <div
            className='grid grid-cols-6 border-b border-b-light-grey pb-7 '
            key={index}
          >
            <span className='text-sm font-medium text-grey'>
              {data.user.name}
            </span>
            <span className='text-sm font-medium text-grey border capitalize border-light-grey w-fit p-2 rounded-sm'>
              {data.user.role}
            </span>
            <span className='text-sm font-medium text-grey'>
              {data.actionLabel}
            </span>
            <span className='text-sm font-medium text-grey capitalize'>
              {data.module}
            </span>
            <span className='text-sm font-medium text-grey'>{data.target}</span>
            <span className='text-sm font-medium text-grey'>
              {formatDateTime(data.createdAt)}
            </span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
