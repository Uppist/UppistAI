/** @format */

import { toast } from "react-toastify";
import { formatDateTime } from "../../../../utils/DateTime";
import ReactMarkdown from "react-markdown";

export default function Prompt({ messages }) {
  function Copy(role, message) {
    const content = {
      ...(role === "user" && {
        "Prompt Query": message,
      }),
      ...(role === "assistant" && {
        "AI Response": message,
      }),
      ...(role === "agent" && {
        "Live Agent Response": message,
      }),
    };

    navigator.clipboard.writeText(JSON.stringify(content, null, 2));
    alert("hello");
    toast.success("copied!");
  }

  console.log(messages);

  return (
    <div className=' h-110 overflow-scroll no-scrollbar'>
      <div className='border-t border-t-light-grey pt-10 flex flex-col gap-y-5'>
        <div className='flex flex-col gap-y-2.5'>
          {messages?.map((data) => (
            <>
              {/*Client side */}
              {data.role === "user" && (
                <>
                  <h3 className='text-base font-semibold text-black'>
                    Prompt Query
                  </h3>
                  <p className='text-sm font-normal text-grey leading-6'>
                    {data.content}
                  </p>
                </>
              )}
              {/*Bot side */}
              <>
                <p className='text-sm font-normal text-grey leading-6'>
                  {data.role === "assistant" && (
                    <>
                      <div className='flex flex-col gap-y-2.5'>
                        <h3 className='text-base font-semibold text-black'>
                          AI Response
                        </h3>
                        <p className='text-sm font-normal text-grey leading-6'>
                          <ReactMarkdown>{data.content}</ReactMarkdown>
                        </p>
                      </div>

                      <div className='text-sm font-normal text-light-black flex items-center gap-x-4.5'>
                        <span>{formatDateTime(data.createdAt)}</span>
                        <span
                          className=' flex items-center gap-x-1.5 cursor-pointer'
                          onClick={() => Copy(data.role, data.content)}
                        >
                          <svg
                            width='23'
                            height='23'
                            viewBox='0 0 23 23'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M18.7166 7.66667L13.417 2.36708C13.2823 2.23226 13.0996 2.15642 12.9091 2.15625H10.542C9.84308 2.15625 9.17271 2.43391 8.67847 2.92815C8.18423 3.42238 7.90658 4.09271 7.90658 4.79167V5.98958H6.70866C6.0097 5.98958 5.33937 6.26724 4.84514 6.76148C4.3509 7.25571 4.07324 7.92604 4.07324 8.625V18.2083C4.07324 18.9072 4.3509 19.5776 4.84514 20.0718C5.33937 20.5661 6.0097 20.8438 6.70866 20.8438H13.417C14.1159 20.8438 14.7863 20.5661 15.2805 20.0718C15.7748 19.5776 16.0524 18.9072 16.0524 18.2083V17.0104H16.292C16.9909 17.0104 17.6613 16.7328 18.1555 16.2385C18.6498 15.7443 18.9274 15.0739 18.9274 14.375V8.14583C18.9198 7.96528 18.8446 7.79421 18.7166 7.66667ZM13.6566 4.60958L16.4741 7.42708H13.6566V4.60958ZM14.6149 18.2083C14.6149 18.526 14.4887 18.8308 14.2641 19.0554C14.0394 19.28 13.7347 19.4062 13.417 19.4062H6.70866C6.39095 19.4062 6.08626 19.28 5.86161 19.0554C5.63695 18.8308 5.51074 18.526 5.51074 18.2083V8.625C5.51074 8.30729 5.63695 8.0026 5.86161 7.77795C6.08626 7.5533 6.39095 7.42708 6.70866 7.42708H7.90658V14.375C7.90658 15.0739 8.18423 15.7443 8.67847 16.2385C9.17271 16.7328 9.84308 17.0104 10.542 17.0104H14.6149V18.2083ZM16.292 15.5729H10.542C10.2243 15.5729 9.91955 15.4467 9.69492 15.2221C9.47029 14.9974 9.34408 14.6927 9.34408 14.375V4.79167C9.34408 4.47396 9.47029 4.16927 9.69492 3.94461C9.91955 3.71996 10.2243 3.59375 10.542 3.59375H12.2191V8.14583C12.2216 8.33569 12.298 8.51706 12.4323 8.65132C12.5666 8.78558 12.748 8.8621 12.9378 8.86458H17.4899V14.375C17.4899 14.6927 17.3637 14.9974 17.1391 15.2221C16.9144 15.4467 16.6097 15.5729 16.292 15.5729Z'
                              fill='currentColor'
                            />
                          </svg>
                          Copy
                        </span>
                      </div>
                      <hr className='mt-12.5 mb-7.5 border border-light-grey' />
                    </>
                  )}
                  {/* <hr /> */}
                </p>
              </>
              {/*agent side */}
              <p className='text-sm font-normal text-grey leading-6'>
                {data.role === "agent" && (
                  <>
                    <div className='flex flex-col gap-y-2.5'>
                      <h3 className='text-base font-semibold text-black'>
                        Live Agent Response
                      </h3>
                      <p className='text-sm font-normal text-grey leading-6'>
                        <ReactMarkdown>{data.content}</ReactMarkdown>
                      </p>
                    </div>

                    <div className='text-sm font-normal text-light-black flex items-center mt-2 gap-x-4.5'>
                      <span>{formatDateTime(data.createdAt)}</span>
                      <span
                        className=' flex items-center gap-x-1.5 cursor-pointer'
                        onClick={() => Copy(data.role, data.content)}
                      >
                        <svg
                          width='23'
                          height='23'
                          viewBox='0 0 23 23'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M18.7166 7.66667L13.417 2.36708C13.2823 2.23226 13.0996 2.15642 12.9091 2.15625H10.542C9.84308 2.15625 9.17271 2.43391 8.67847 2.92815C8.18423 3.42238 7.90658 4.09271 7.90658 4.79167V5.98958H6.70866C6.0097 5.98958 5.33937 6.26724 4.84514 6.76148C4.3509 7.25571 4.07324 7.92604 4.07324 8.625V18.2083C4.07324 18.9072 4.3509 19.5776 4.84514 20.0718C5.33937 20.5661 6.0097 20.8438 6.70866 20.8438H13.417C14.1159 20.8438 14.7863 20.5661 15.2805 20.0718C15.7748 19.5776 16.0524 18.9072 16.0524 18.2083V17.0104H16.292C16.9909 17.0104 17.6613 16.7328 18.1555 16.2385C18.6498 15.7443 18.9274 15.0739 18.9274 14.375V8.14583C18.9198 7.96528 18.8446 7.79421 18.7166 7.66667ZM13.6566 4.60958L16.4741 7.42708H13.6566V4.60958ZM14.6149 18.2083C14.6149 18.526 14.4887 18.8308 14.2641 19.0554C14.0394 19.28 13.7347 19.4062 13.417 19.4062H6.70866C6.39095 19.4062 6.08626 19.28 5.86161 19.0554C5.63695 18.8308 5.51074 18.526 5.51074 18.2083V8.625C5.51074 8.30729 5.63695 8.0026 5.86161 7.77795C6.08626 7.5533 6.39095 7.42708 6.70866 7.42708H7.90658V14.375C7.90658 15.0739 8.18423 15.7443 8.67847 16.2385C9.17271 16.7328 9.84308 17.0104 10.542 17.0104H14.6149V18.2083ZM16.292 15.5729H10.542C10.2243 15.5729 9.91955 15.4467 9.69492 15.2221C9.47029 14.9974 9.34408 14.6927 9.34408 14.375V4.79167C9.34408 4.47396 9.47029 4.16927 9.69492 3.94461C9.91955 3.71996 10.2243 3.59375 10.542 3.59375H12.2191V8.14583C12.2216 8.33569 12.298 8.51706 12.4323 8.65132C12.5666 8.78558 12.748 8.8621 12.9378 8.86458H17.4899V14.375C17.4899 14.6927 17.3637 14.9974 17.1391 15.2221C16.9144 15.4467 16.6097 15.5729 16.292 15.5729Z'
                            fill='currentColor'
                          />
                        </svg>
                        Copy
                      </span>
                    </div>
                    <hr className='mt-12.5 mb-7.5 border border-light-grey' />
                  </>
                )}
              </p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
