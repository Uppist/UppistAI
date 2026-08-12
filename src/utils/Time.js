/** @format */

export function formatTime(date) {
  const messageDate = new Date(date);
  const now = new Date();

  const time = messageDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const messageDay = new Date(
    messageDate.getFullYear(),
    messageDate.getMonth(),
    messageDate.getDate(),
  );

  const diffInDays = Math.floor((today - messageDay) / (1000 * 60 * 60 * 24));

  // Today
  if (diffInDays === 0) {
    return time;
  }

  // Yesterday
  if (diffInDays === 1) {
    return `Yesterday, ${time}`;
  }

  // Within the last 7 days
  if (diffInDays <= 7) {
    const weekday = messageDate.toLocaleDateString([], {
      weekday: "long",
    });

    return `${weekday}, ${time}`;
  }

  // Older than 7 days
  const dateString = messageDate.toLocaleDateString([], {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return `${dateString}, ${time}`;
}
