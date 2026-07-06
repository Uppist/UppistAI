/** @format */

import logo from "../../../../assets/signup/uppist.svg";
import CreateAccount from "./CreateAccount";

export default function DesktopStep1({
  handleChange,
  details,
  submit,
  Create,
  isClick,
}) {
  return (
    <div className='flex flex-col gap-y-18 p-20 pb-140 animate-fade-up overflow-scroll no-scrollbar'>
      <div className='flex flex-col gap-y-6 justify-center items-center'>
        <img src={logo} alt='Uppist Logo' />
        <span className='text-light font-normal text-xl'>
          AI omnichannel customer support platform
        </span>
      </div>

      <CreateAccount
        handleChange={handleChange}
        details={details}
        submit={submit}
        Create={Create}
        isClick={isClick}
      />
    </div>
  );
}
