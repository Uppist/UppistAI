/** @format */

import { useContext, useMemo } from "react";
import { UserContext } from "../../contexts/Context";
import whatsapp from "../../assets/Dashboard/dashboard/notifications/whatsapp.svg";
import api from "../../api/axios";

export default function Notifications({ readIds, setReadIds }) {
  const { notifications, setNotifications } = useContext(UserContext);

  const token = localStorage.getItem("Token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const visibleNotifications = useMemo(() => {
    if (!notifications) return [];
    return notifications.filter((item) => item?.id);
  }, [notifications]);

  function markAsRead(id) {
    setReadIds((prev) => (prev.includes(id) ? prev : [...prev, id]));

    api
      .patch(`/dashboard/notifications/${id}/read`, { headers })
      .then(() => {
        setNotifications((prev) =>
          prev.map((item) => (item.id === id ? { ...item, read: true } : item)),
        );
      })
      .catch((err) => {
        console.log(err.response?.message || err.message);
      });
  }

  function MarkAll() {
    const allIds = visibleNotifications.map((item) => item.id);
    setReadIds((prev) => [...new Set([...prev, ...allIds])]);

    api
      .patch("/dashboard/notifications/read-all", { headers })
      .then(() => {
        setNotifications((prev) =>
          prev.map((item) => ({ ...item, read: true })),
        );
      })
      .catch((err) => {
        console.log(err.response?.message || err.message);
      });
  }

  return (
    <div
      className='absolute flex flex-col top-13 right-9 ml-4 z-9999 w-90 h-82 rounded-2xl bg-white shadow-2xl'
      onClick={(e) => e.stopPropagation()}
    >
      {visibleNotifications?.length === 0 ? (
        <>
          {/*No Notifications yet */}
          <div className='flex items-center justify-center h-full flex-col text-center'>
            <span className='text2'>No Notifications yet.</span>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className='flex items-center justify-between p-5 border-b border-light-grey'>
              <h3 className='text-base font-medium text-black'>
                Notifications
              </h3>
              <span className='text.sm font-medium text-bg' onClick={MarkAll}>
                Mark all as read
              </span>
            </div>
            <div className='h-70 overflow-scroll no-scrollbar'>
              {visibleNotifications?.map((data, index) => {
                const hasUnreadDot =
                  data?.read === false && !readIds.includes(data.id);
                return (
                  <div
                    className='p-5 border-b border-light-grey'
                    key={data.id || index}
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-x-2'>
                        {data.channel === "whatsapp" && (
                          <img src={whatsapp} alt='whatsapp logo' />
                        )}
                        <div
                          className='flex flex-col gap-y-1.5'
                          onClick={() => markAsRead(data.id)}
                        >
                          <h4 className='text-sm font-bold text-black [display:ruby]'>
                            <span>{data.title}</span>{" "}
                            {hasUnreadDot && (
                              <span className='flex w-1.5 h-1.5 rounded-full bg-bg'></span>
                            )}
                          </h4>
                          <span className='text-xs font-normal text-light-black'>
                            {data.transcript}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
