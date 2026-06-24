/** @format */

import { useParams } from "react-router-dom";
import FirstGrid from "./FirstGrid/FirstGrid";
import SecondGrid from "./SecondGrid/SecondGrid";
import ThirdGrid from "./ThirdGrid";

export default function Channels() {
  const { type } = useParams();

  let title = "";
  if (type === "whatsapp") {
    title = "Whatsapp";
  } else if (type === "website") {
    title = "Website";
  } else if (type === "email") {
    title = "Email";
  } else {
    title = "Social Media";
  }
  return (
    <div className='grid grid-cols-[25%_50%_25%] h-full'>
      <FirstGrid title={title} />
      <SecondGrid />
      <ThirdGrid />
    </div>
  );
}
