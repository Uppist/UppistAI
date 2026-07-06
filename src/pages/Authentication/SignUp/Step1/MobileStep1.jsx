/** @format */
import logo from "../../../../assets/signup/uppist.svg";
import img from "../../../../assets/Onboarding/mobilePanel.svg";
import { useNavigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";

export default function MobileStep1({
  onCreateAccount,
  showCreateAccount,
  handleChange,
  details,
  submit,
  Create,
  isClick,
}) {
  const navigate = useNavigate();

  if (showCreateAccount) {
    return (
      <div className='px-6 py-8'>
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

  return (
    <div className='flex flex-col gap-y-6 mt-30 items-center justify-center'>
      {" "}
      {/*Text */}
      <div className='flex flex-col gap-y-6 justify-center items-center'>
        <img src={logo} alt='Uppist Logo' />
        <span className='text-light font-light w-[60%] text-center text-xl'>
          AI omnichannel customer support platform
        </span>
      </div>
      {/*Image  */}
      <img src={img} className='w-78 h-97.25 rounded-2xl' alt='' />
      {/*Buttons */}
      <div className='flex flex-col gap-y-4 w-full px-14'>
        <button
          type='button'
          className='p-3.5 bg-bg rounded-lg text-white font-semibold text-sm cursor-pointer w-full hover:opacity-50'
          onClick={onCreateAccount}
        >
          Create Account
        </button>
        <button
          className='p-3.5 border border-bg text-bg text-sm font-semibold rounded-lg'
          onClick={() => navigate("/signin")}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
