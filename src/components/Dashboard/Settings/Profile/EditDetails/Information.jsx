/** @format */

import Form from "./Form";
import Upload from "./Upload";

export default function Information() {
  return (
    <div className='flex gap-x-7.5'>
      <Upload />
      <Form />
    </div>
  );
}
