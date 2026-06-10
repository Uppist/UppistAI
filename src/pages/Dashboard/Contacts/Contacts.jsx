/** @format */

import Buttons from "./Buttons";
import ContactContainer from "./ContactContainer";
import SearchDownload from "./SearchDownload";
import { useSearchParams } from "react-router-dom";
import ContactHistory from "./History/ContactHistory";

export default function Contacts() {
  // const [active, setActive] = useState(false);

  const [searchParams] = useSearchParams();

  const active = searchParams.has("history");

  return (
    <div className='flex flex-col gap-y-5 p-6 pr-8'>
      {active ? (
        <ContactHistory />
      ) : (
        <>
          <SearchDownload />
          <ContactContainer />
          <Buttons />
        </>
      )}
    </div>
  );
}
