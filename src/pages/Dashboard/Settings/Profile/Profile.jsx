/** @format */

import Information from "./EditDetails/Information";
import Sub from "./SubUsers/Sub";

export default function Profile() {
  return (
    <div className='flex flex-col gap-y-6  pr-40 overflow-scroll no-scrollbar h-110 pb-10'>
      <Information />
      <hr className='border border-light-grey' />
      <Sub />
    </div>
  );
}
