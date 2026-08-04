/** @format */

import { useContext, useState } from "react";
import api from "../../../../../api/axios";
import { toast } from "react-toastify";
import { Box, CircularProgress } from "@mui/material";
import { CreateUserContext } from "../../../../../contexts/Context";

export default function CreateUser({ onClose }) {
  const { setGetUsers } = useContext(CreateUserContext);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    role: "",
  });

  // const [role, setRole] = useState("Select");
  const [dropdown, setDropdown] = useState(false);

  function clickRole() {
    setDropdown(!dropdown);
  }

  function handleSelectRole(selectRole) {
    setDetails((prev) => ({
      ...prev,
      role: selectRole,
    }));
    setDropdown(false);
  }

  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const roleMap = {
      Manager: "admin",
      "Live Agent": "agent",
    };

    const data = {
      email: details.email,
      role: roleMap[details.role],
      name: details.name,
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
  const sendLink = details.name && details.email && details.role;

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
            {/*Name */}
            <div className='flex flex-col gap-y-2'>
              <span className='text'>Name</span>
              <input
                type='text'
                placeholder='Enter user full name'
                className='input'
                name='name'
                value={details.name}
                onChange={handleChange}
              />
            </div>
            {/*Email */}
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
              {/*Select a role */}
              <div
                className='w-full flex items-center justify-between border border-light-grey p-2 rounded-lg'
                onClick={clickRole}
              >
                <span className='text-xm font-normal text-black'>
                  {details.role || "Select"}
                </span>
                <svg
                  width='16'
                  className='cursor-pointer'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g opacity='0.5'>
                    <path
                      d='M4 6L8 10L12 6'
                      stroke='#2B2B2B'
                      strokeWidth='1.33333'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                </svg>
              </div>

              {dropdown && (
                <div className='bg-white p-2 rounded-lg shadow-2xl flex flex-col gap-y-4'>
                  <span onClick={() => handleSelectRole("Manager")}>
                    Manager
                  </span>
                  <span onClick={() => handleSelectRole("Live Agent")}>
                    Live Agent
                  </span>
                </div>
              )}
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
