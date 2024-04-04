import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import UserService from "../services/userService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loggedUser } from "../store/userSlice";

function LoginPage() {
  //formik
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("You must provide a username.."),
      password: Yup.string().required("You must provide a password.."),
    }),
    //validation
    onSubmit: (values) => {
      // console.log(values);
      UserService.loggdIn(values)
        .then((res) => {
          if (res.status === 200) {
            // console.log(res.data);
            toast.success("User has successfully logged in");
            dispatch(loggedUser(res.data));
          }
        })
        .catch((err) => console.log(err));
      // username: 'kminchelle',
      // password: '0lelplR',
      formik.resetForm();
    },
  });

  const error = (name) =>
    formik.errors[name] && formik.touched[name] && formik.errors[name];

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
            <span className="ml-2 text-[13px] text-error">
              {error("username")}
            </span>
          </label>
          <input
            type="text"
            placeholder="Insert username"
            className="border-mainBlue border rounded-md px-[16px] py-[8px]"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        {/* {password} */}
        <div className="flex flex-col">
          <label htmlFor="" className="grayText">
            Password
            <span className="ml-2 text-[13px] text-error">
              {error("password")}
            </span>
          </label>
          <input
            type="password"
            placeholder="Insert password"
            className="border-mainBlue border rounded-md px-[16px] py-[8px]"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>

        {/* {button} */}
        <button
          type="submit"
          className="bg-mainYellow text-[#fff] px-[16px] py-[8px] rounded-xl"
        >
          Login me
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
