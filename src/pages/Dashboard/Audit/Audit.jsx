/** @format */

import { useContext, useState } from "react";
import AllTime from "../../../components/AllTime";
import UsePagination from "../../../components/Buttons";
import Container from "./Container";
import { AuditContext } from "../../../contexts/Context";
import { CSVLink } from "react-csv";

/** @format */
export default function Audit() {
  const [isTime, setIsTime] = useState(false);
  const [isText, setIsText] = useState("All time");
  const [filteredAuditLog, setFilteredAuditLog] = useState([]);
  const [hasActiveFilter, setHasActiveFilter] = useState(false);
  const { auditLog } = useContext(AuditContext);

  function handleAllTimeClick() {
    setIsTime(!isTime);
  }

  const displayedAuditLog = hasActiveFilter ? filteredAuditLog : auditLog || [];

  const csvData = (displayedAuditLog || []).map((audit) => ({
    id: audit.id || "",
    user: audit.user?.name || "",
    role: audit.user?.role || "",
    action: audit.actionLabel || "",
    module: audit.module || "",
    target: audit.target || "",
    createdAt: audit.createdAt || "",
  }));

  const csvHeaders = [
    { label: "ID", key: "id" },
    { label: "User", key: "user" },
    { label: "Role", key: "role" },
    { label: "Action", key: "action" },
    { label: "Module", key: "module" },
    { label: "Target", key: "target" },
    { label: "Created At", key: "createdAt" },
  ];
  return (
    <>
      <div className='flex flex-col gap-y-5 p-6 pr-6'>
        <div className='flex items-center justify-between'>
          <input
            type='search'
            className='input'
            placeholder='Search'
            name=''
            id=''
          />
          {/*Details */}
          <div className='flex relative items-center gap-x-5'>
            {/*dropdown for all time */}
            <div>
              <div
                className='flex items-center gap-x-2 border border-light-grey py-1.5 px-3 rounded-lg shadow-sm'
                onClick={handleAllTimeClick}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M6.6665 0.833008C7.12674 0.833008 7.49984 1.2061 7.49984 1.66634V2.49967H12.4998V1.66634C12.4998 1.2061 12.8729 0.833008 13.3332 0.833008C13.7934 0.833008 14.1665 1.2061 14.1665 1.66634V2.49967H14.9998C16.8408 2.49967 18.3332 3.99206 18.3332 5.83301V14.9997C18.3332 16.8406 16.8408 18.333 14.9998 18.333H4.99984C3.15889 18.333 1.6665 16.8406 1.6665 14.9997V5.83301C1.6665 3.99206 3.15889 2.49967 4.99984 2.49967H5.83317V1.66634C5.83317 1.2061 6.20627 0.833008 6.6665 0.833008ZM12.4998 4.16634C12.4998 4.62658 12.8729 4.99967 13.3332 4.99967C13.7934 4.99967 14.1665 4.62658 14.1665 4.16634H14.9998C15.9203 4.16634 16.6665 4.91253 16.6665 5.83301V6.24967H3.33317V5.83301C3.33317 4.91253 4.07936 4.16634 4.99984 4.16634H5.83317C5.83317 4.62658 6.20627 4.99967 6.6665 4.99967C7.12674 4.99967 7.49984 4.62658 7.49984 4.16634H12.4998ZM16.6665 7.91634H3.33317V14.9997C3.33317 15.9201 4.07936 16.6663 4.99984 16.6663H14.9998C15.9203 16.6663 16.6665 15.9201 16.6665 14.9997V7.91634Z'
                    fill='#2B2B2B'
                    fillOpacity='0.8'
                  />
                </svg>
                <span className='text-light-black text-sm font-semibold'>
                  {isText}
                </span>
                <svg
                  cursor={"pointer"}
                  width='24'
                  height='24'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g opacity='0.5'>
                    <path
                      d='M4 6L8 10L12 6'
                      stroke='currentColor'
                      strokeWidth='1.33333'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                </svg>
              </div>
              {isTime && (
                <div className=''>
                  <AllTime
                    setIsText={setIsText}
                    onClose={() => setIsTime(false)}
                    data={auditLog || []}
                    setFilteredContacts={setFilteredAuditLog}
                    setHasActiveFilter={setHasActiveFilter}
                  />
                </div>
              )}
            </div>
            {/*Download CSV button */}
            <CSVLink
              data={csvData}
              headers={csvHeaders}
              filename='Audit.csv'
              className='flex items-center gap-x-2 rounded-lg border border-light-grey text-black text-sm font-semibold py-2.5 px-3 cursor-pointer hover:opacity-50'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.3333 14.1667L9.99996 17.5L6.66663 14.1667M9.99996 17.5V10M16.6666 13.9524C17.6845 13.1117 18.3333 11.8399 18.3333 10.4167C18.3333 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3975 5.73833 13.3051 5.58145C12.2183 3.73736 10.212 2.5 7.91663 2.5C4.46485 2.5 1.66663 5.29822 1.66663 8.75C1.66663 10.4718 2.36283 12.0309 3.48908 13.1613'
                  stroke='#2B2B2BCC'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Download CSV
            </CSVLink>
          </div>
        </div>

        <Container auditLog={displayedAuditLog} />

        <UsePagination />
      </div>
    </>
  );
}
