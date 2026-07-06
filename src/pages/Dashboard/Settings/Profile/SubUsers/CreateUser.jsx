/** @format */

import { useContext, useState } from "react";
import api from "../../../../../api/axios";
import { toast } from "react-toastify";
import { Box, CircularProgress } from "@mui/material";
import { CreateUserContext } from "../../../../../contexts/Context";

export default function CreateUser({ onClose }) {
  const { setGetUsers } = useContext(CreateUserContext);
  const [details, setDetails] = useState({
    email: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  const sendLink = details.email && details.role;

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: details.email,
      role: details.role,
      name: "User",
    };
    setLoading(true);

    api
      .post("/users", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setGetUsers((getUsers) => {
          return [...getUsers, res.data.user];
        });
        setLoading(false);
        toast.success("User created successfully");
        onClose();
      })
      .catch((err) => {
        console.log(err.response?.data);
        const roleError = err.response?.data?.fields?.role?.[0];
        toast.error(roleError);
        setLoading(false);
      });
  }
  return (
    <div className='dropdown'>
      {/*overlay */}

      <div className='overlay' onClick={onClose}></div>

      {/*User Container */}
      <div className='absolute flex flex-col gap-y-4 w-1/2  bg-white rounded-lg p-4  items-end justify-center'>
        <svg
          className='cursor-pointer flex'
          onClick={onClose}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.75 11.236L5.993 5.993L11.236 11.236M11.236 0.75L5.992 5.993L0.75 0.75'
            stroke='#2B2B2B'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <div className='flex flex-col gap-y-6.5'>
          {" "}
          {/*Create Agent text */}
          <div className='flex flex-col gap-y-2 text-center'>
            <span className='text-xl font-semibold text-bg'>
              Create New User
            </span>
            <p className='text-grey text-base font-normal w-auto text-center pl-10'>
              To add new user, input their email address in the space provided
              below, a link would be sent to them to create an account.{" "}
            </p>
          </div>
          {/*form */}
          <form className='flex flex-col gap-y-6 px-20'>
            <div className='flex flex-col gap-y-2'>
              <span className='text'>Work Email</span>
              <input
                type='text'
                placeholder='Enter user work email'
                className='input'
                name='email'
                value={details.email}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col gap-y-2'>
              <span className='text'>Role</span>
              <input
                type='text'
                placeholder='e.g Manager'
                className='input'
                name='role'
                value={details.role}
                onChange={handleChange}
              />
            </div>
            <div className='flex items-center justify-center'>
              <button
                className='button'
                type='submit'
                disabled={!sendLink}
                onClick={handleSubmit}
              >
                {loading ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress
                      size={20}
                      sx={{ color: "white" }}
                      aria-label='loading...'
                    />
                  </Box>
                ) : (
                  "Send Link"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
