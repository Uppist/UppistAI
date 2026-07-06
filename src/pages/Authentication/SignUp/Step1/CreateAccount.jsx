/** @format */
import google from "../../../../assets/signup/Google.svg";
import Password from "./Form/Password";
import { Box, CircularProgress } from "@mui/material";
import Name from "./Form/Name";
import { useNavigate } from "react-router-dom";

export default function CreateAccount({
  handleChange,
  details,
  submit,
  isClick,
  Create,
}) {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-y-6 sm: mt-20'>
      <div className='flex flex-col gap-y-6'>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-3xl text-black font-bold'>Create your account</h2>
          <span className='text-light font-normal text-base'>
            Get started under 2 minutes
          </span>
        </div>
        <form action='' className='flex flex-col gap-y-4'>
          <Name handleChange={handleChange} details={details} />
          <Password handleChange={handleChange} details={details} />
        </form>
        <p className='text-light font-normal text-sm'>
          By creating your account, you are agreeing to our{" "}
          <span className='text-bg cursor-pointer'>Terms and Conditions</span>
        </p>

        <button
          type='submit'
          disabled={!submit}
          className='bg-bg disabled:bg-disabled disabled:text-black w-full p-3 text-white font-bold text-sm cursor-pointer rounded-lg'
          onClick={Create}
        >
          {isClick ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress
                size={20}
                aria-label='loading...'
                sx={{ color: "white" }}
              />
            </Box>
          ) : (
            "Create Account"
          )}
        </button>
      </div>

      <div className='flex flex-col gap-y-8'>
        <div className='flex items-center gap-x-4'>
          <hr className='w-full border border-border' />
          <span>or</span>
          <hr className='w-full border border-border' />
        </div>

        <button
          type='button'
          className='flex items-center justify-center px-2 py-4 gap-x-4 bg-white border border-border2 text-black font-medium text-base cursor-pointer rounded-lg hover:bg-gray-100'
        >
          <img src={google} alt='Google Logo' />
          Sign up with Google
        </button>

        <span className='text-sm font-medium text-light text-center'>
          Already have an account?{" "}
          <span
            className='text-bg cursor-pointer'
            onClick={() => navigate("/signin")}
          >
            Login
          </span>
        </span>
      </div>
    </div>
  );
}
