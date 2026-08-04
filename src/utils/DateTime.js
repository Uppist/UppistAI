/** @format */

import dayjs from "dayjs";

export function formatDateTime(date) {
  if (!date) return "";

  return dayjs(date).format("MMM D, YYYY / h:mm A");
}
