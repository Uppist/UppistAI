/** @format */

import Form from "./Form";
import Upload from "./Upload";

export default function Information({ role }) {
  return (
    <div className='flex gap-x-7.5'>
      <Upload />
      <Form role={role} />
    </div>
  );
}
