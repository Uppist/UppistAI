/** @format */

import ContactContainer from "./ContactContainer";
import SearchDownload from "./SearchDownload";
import { useSearchParams } from "react-router-dom";
import ContactHistory from "./History/ContactHistory";
import UsePagination from "../../../components/Buttons";
import { useContext, useState } from "react";
import { ContactContext } from "../../../contexts/Context";

export default function Contacts() {
  const { contacts, getContactDetail } = useContext(ContactContext);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [hasActiveFilter, setHasActiveFilter] = useState(false);

  const [searchParams] = useSearchParams();

  const active = searchParams.has("history");
  const visibleContacts = hasActiveFilter ? filteredContacts : contacts || [];

  return (
    <>
      <div className='flex flex-col gap-y-5 p-6 pr-8'>
        {active ? (
          <ContactHistory />
        ) : (
          <>
            <SearchDownload
              contacts={contacts || []}
              setFilteredContacts={setFilteredContacts}
              setHasActiveFilter={setHasActiveFilter}
            />
            <div className='h-90 overflow-scroll no-scrollbar'>
              {filteredContacts.length === 0 && hasActiveFilter && (
                <div className='flex flex-col gap-y-2 items-center justify-center h-full'>
                  <span className='text-light-black text-sm font-semibold'>
                    No contacts found.
                  </span>
                </div>
              )}
              <ContactContainer
                contacts={visibleContacts}
                getContactDetail={getContactDetail}
              />
            </div>
            <UsePagination />
          </>
        )}
      </div>
    </>
  );
}
