import { useFormik } from "formik";
import React from "react";

function LoginPage() {
  //formik

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    //validation
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h2 className="text-center mt-[30px] text-mainBlue font-bold uppercase text-3xl">
        Login Form
      </h2>

      <form
        onSubmit={formik.handleSubmit}
        className="border border-mainYellow w-[700px] mx-auto p-[20px] rounded-3xl flex flex-col items-center justify-center gap-5 mt-[30px]"
      >
        {/* {username} */}
        <div className="flex flex-col">
          <label htmlFor="" className="grayText">
            Username
          </label>
          <input
            type="text"
            placeholder="Insert username"
            className="border-mainBlue border rounded-md px-[16px] py-[8px]"
          />
        </div>
        {/* {password} */}
        <div className="flex flex-col">
          <label htmlFor="" className="grayText">
            Password
          </label>
          <input
            type="password"
            placeholder="Insert password"
            className="border-mainBlue border rounded-md px-[16px] py-[8px]"
          />
        </div>

        {/* {button} */}
        <button className="bg-mainYellow text-[#fff] px-[16px] py-[8px] rounded-xl">
          Login me
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
