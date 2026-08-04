/** @format */
export default function AllTime({
  setIsText,
  onClose,
  data,
  setFilteredContacts,
  setHasActiveFilter,
}) {
  const list = [
    "Today",
    "Yesterday",
    "Last 7 Days",
    "This month",
    "Last 30 Days",
    "All time",
  ];

  function filterData(option) {
    const now = new Date();
    const sourceData = Array.isArray(data) ? data : [];

    const filtered = sourceData.filter((item) => {
      const date = new Date(item.createdAt);

      switch (option) {
        case "Today":
          return date.toDateString() === now.toDateString();

        case "Yesterday": {
          const yesterday = new Date();
          yesterday.setDate(now.getDate() - 1);
          return date.toDateString() === yesterday.toDateString();
        }

        case "Last 7 Days": {
          const last7 = new Date();
          last7.setDate(now.getDate() - 7);
          return date >= last7;
        }

        case "This month":
          return (
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear()
          );

        case "Last 30 Days": {
          const last30 = new Date();
          last30.setDate(now.getDate() - 30);
          return date >= last30;
        }

        case "All time":
        default:
          return true;
      }
    });

    setFilteredContacts(filtered);
    setHasActiveFilter?.(true);
    setIsText(option);
    onClose();
  }

  return (
    <div className='flex absolute flex-col bg-white rounded-lg shadow-2xl p-4 gap-y-8 w-50'>
      {list.map((item, index) => (
        <div
          key={index}
          className='text-sm font-medium text-light-black cursor-pointer'
          onClick={() => {
            filterData(item);
            onClose();
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
