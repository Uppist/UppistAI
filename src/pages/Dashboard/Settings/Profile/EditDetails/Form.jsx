/** @format */

import { useContext, useState } from "react";
import ChangePassword from "./ChangePassword";
import { toast } from "react-toastify";
import api from "../../../../../api/axios";
import { UserContext } from "../../../../../contexts/Context";
import EditProfile from "./EditProfile";

export default function Form() {
  const [openPassword, setOpenPassword] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const { userDetails, setUserDetails } = useContext(UserContext);
  // const { setGetUsers } = useContext(CreateUserContext);
  // const presenceStatus = userDetails?.user?.presenceStatus || "away";
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    work_email: "",
  });

  const changes =
    details.company_name ||
    details.first_name ||
    details.last_name ||
    details.work_email;

  function handleChange(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleOpenPassword() {
    setOpenPassword(true);
  }

  function handleEdit() {
    setEditProfile(true);
  }

  function Changes() {
    api
      .patch("/users/me", details, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Updated Succesfully");
        // setUserDetails((userDetails) => {
        //   return [...userDetails, details];
        // });

        setUserDetails(res.data);
        setDetails({
          first_name: "",
          last_name: "",
          company_name: "",
          work_email: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // console.log(userDetails);

  //set user status
  // function handleRadioChange(e) {
  //   const status = e.target.value;
  //   console.log("Selected status:", status);
  //   api
  //     .patch(
  //       "users/me/presence",
  //       { status },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("Token")}`,
  //         },
  //       },
  //     )
  //     .then((res) => {
  //       console.log("Status updated:", res.data);
  //       toast.success(`Status updated to ${status}`);
  //       setUserDetails((prev) => ({
  //         ...prev,
  //         user: {
  //           ...prev.user,
  //           presenceStatus: status,
  //         },
  //       }));
  //       setGetUsers((getUsers) => {
  //         return [...getUsers, res.data.user.presenceStatus];
  //       });
  //     })
  //     .catch((err) => {
  //       console.error("Error updating status:", err.response);
  //       toast.error("Failed to update status");
  //     });
  // }

  return (
    <div className='w-screen flex flex-col gap-y-8'>
      <form action='' className='flex flex-col gap-y-4'>
        {/* <div className='grid grid-cols-2 gap-x-9 justify-between'> */}
        {/*First Name */}
        {/* <div className='flex flex-col gap-y-1'>
            <span className='text-sm font-bold text-black'>First Name</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='text'
              name='first_name'
              value={userDetails?.user?.firstName}
              onChange={handleChange}
              id=''
            />
          </div> */}

        {/*Last Name */}
        {/* <div className='flex flex-col gap-y-1'>
            {" "}
            <span className='text-sm font-bold text-black'>Last Name</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='text'
              name='last_name'
              value={userDetails?.user?.lastName}
              onChange={handleChange}
              id=''
            />
          </div>
        </div> */}

        <div className='grid grid-cols-2 gap-x-9 justify-between'>
          {" "}
          {/*Email */}
          <div className='flex flex-col gap-y-1'>
            <span className='text-sm font-bold text-black'>Work Email</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='email'
              name='work_email'
              value={userDetails?.user?.workEmail || userDetails?.user?.email}
              onChange={handleChange}
              id=''
            />
          </div>
          {/*Company Name */}
          <div className='flex flex-col gap-y-1'>
            {" "}
            <span className='text-sm font-bold text-black'>Company Name</span>
            <input
              className='p-2.5 rounded-lg border border-light-grey outline-none'
              type='text'
              name='company_name'
              value={userDetails?.tenant?.companyName}
              onChange={handleChange}
              id=''
            />
          </div>
        </div>
      </form>

      <div className='flex items-center justify-end gap-x-5'>
        {/*set user status*/}
        {/* <div className='flex items-center gap-x-4'>

          <div className='flex items-center gap-x-2'>
            <input
              type='radio'
              name='presence'
              className='cursor-pointer'
              value='online'
              checked={presenceStatus === "online"}
              onChange={handleRadioChange}
              id='presence-online'
            />
            <label htmlFor='presence-online'>Online</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type='radio'
              name='presence'
              className='cursor-pointer'
              value='away'
              checked={presenceStatus === "away"}
              onChange={handleRadioChange}
              id='presence-away'
            />
            <label htmlFor='presence-away'>Offline</label>
          </div>
        </div> */}
        <button
          type='button'
          onClick={handleOpenPassword}
          className='py-3 px-3 border border-light-grey rounded-lg text-sm font-bold text-black cursor-pointer hover:bg-light-grey'
        >
          Change Password
        </button>
        <button
          type='button'
          // disabled={!changes}
          className='button'
          onClick={handleEdit}
        >
          Edit Profile
        </button>
        {openPassword && (
          <ChangePassword onClose={() => setOpenPassword(false)} />
        )}

        {editProfile && (
          <EditProfile
            onClose={() => {
              setEditProfile(false);
              setDetails({
                first_name: "",
                last_name: "",
                work_email: "",
                company_name: "",
              });
            }}
            details={details}
            handleChange={handleChange}
            Changes={Changes}
            changes={changes}
          />
        )}
      </div>
    </div>
  );
}
