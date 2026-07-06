/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../../api/axios";
import DesktopStep1 from "./DesktopStep1";
import MobileStep1 from "./MobileStep1";

export default function Step1() {
  const [details, setDetails] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [isClick, setIsClick] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const navigate = useNavigate();

  const submit =
    details.full_name &&
    details.email &&
    details.password.length >= 8 &&
    details.confirm_password.length >= 8;
  function handleChange(e) {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const data = {
    email: details.email,
    password: details.password,
    fullName: details.full_name,
  };

  function Create() {
    if (details.password !== details.confirm_password) {
      toast.error("Passwords do not match", {
        autoClose: 3000,
      });
      return;
    } else {
      setIsClick(true);
      api
        .post("auth/register", data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("Token", res.data.accessToken);

          setTimeout(() => {
            setIsClick(false);
            navigate("/email-verification/verify-code", {
              state: { flow: "signup" },
            });
          }, 2000);
        })
        .catch((err) => {
          setIsClick(false);
          console.log(err.response);
          if (err.response?.status === 409) {
            toast.error(err.response.data.error);
          }
        });
    }
  }

  const mobileView = window.innerWidth < 768;
  return (
    <>
      {" "}
      {mobileView ? (
        <MobileStep1
          onCreateAccount={() => setShowCreateAccount(true)}
          showCreateAccount={showCreateAccount}
          handleChange={handleChange}
          details={details}
          submit={submit}
          Create={Create}
          isClick={isClick}
        />
      ) : (
        <DesktopStep1
          Create={Create}
          handleChange={handleChange}
          isClick={isClick}
          submit={submit}
        />
      )}
    </>
  );
}
