/** @format */

export function getInitials(name) {
  if (!name) return "";

  return name
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase())
    .join("");
}
