/** @format */
{
  /*This function identifies the type of credit card based on the number pattern. It checks for Visa, Mastercard, and Verve card patterns and returns the corresponding card type. If the card number does not match any known patterns, it returns "unknown".*/
}
export function getCardType(number) {
  const cleaned = number.replace(/\s+/g, "");

  if (/^4/.test(cleaned)) return "visa";
  if (/^(5[1-5]|2[2-7])/.test(cleaned)) return "mastercard";
  if (/^(506|507|650|651|652|653|654)/.test(cleaned)) return "verve";

  return "unknown";
}

{
  /*separator */
}
export function formatCardNumber(value) {
  return (
    value
      .replace(/\D/g, "")
      .slice(0, 19)
      .match(/.{1,4}/g)
      ?.join(" ") || ""
  );
}

{
  /*expiry date formatter */
}
export function formatExpiry(value) {
  const cleaned = value.replace(/\D/g, "").slice(0, 4);

  if (cleaned.length < 3) return cleaned;

  return cleaned.slice(0, 2) + "/" + cleaned.slice(2);
}
