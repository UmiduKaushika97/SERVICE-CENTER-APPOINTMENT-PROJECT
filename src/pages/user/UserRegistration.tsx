// import React, { useState } from 'react'
// import def from '../../assets/images/tshirt.jpg'
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import googleLogo from '../../assets/images/google.png';
// import {registerUser} from "../../services/usersServices";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { registerUser } from '../../services/usersServices';
import { toast } from "react-toastify";

const UserRegistration = () => {

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    status: "",
    homeAddress: "",
    mobile: "",
    userimage: "",
    Uid: "",
  }

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Your confirm password is wrong")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (values: typeof initialValues, {resetForm}: { resetForm: () => void}

  ) => {

    try {
      await registerUser({
    fullName: values.fullName,
    email: values.email,
    password: values.password,
    userType: "User",
    status: "Active",
    homeAddress: "",
    mobile: " ",
    userimage: " ",
    Uid: " ",


      });
      console.log("From design file", registerUser);
      toast.success("User registered successfully!");
            resetForm();
    }catch (error: unknown){
      // toast.error(error.message || "Failed to register");
      if (error instanceof Error) {
      toast.error(error.message);
    } else if (typeof error === "string") {
      toast.error(error);
    } else {
      toast.error("An unexpected error occurred");
    }

    }
  }
    
  return (
    <>
    <div className='w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 border-gray-100'>
      <div className='p-6 space-y-6 md:space-y-7 sm:p-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-backgroundColor md:text-2xl text-center'>
          Create Account 
          <p className='text-sm font-normal text-gray-500 mt-1'>
            Sign up to get started
          </p>
        </h1>

        <Formik
        // initialValues={{
        //     fullName: "",
        //     email: "",
        //     password: "",
        //     confirmPassword: "",
        // }}  

    //     validationSchema={validationSchema}
    //     onSubmit={async (values, {resetForm}) => {
    //       try {
    //         await registerUser(
    //         fullName: values.fullName,
    //         values.email,
    //         values.password,
    //       );
    //         toast.success("User registered successfully!");
    //         resetForm();
    //     } catch (error:unknown) {

    //         if (error instanceof Error) {
    //   toast.error(error.message);
    // } else if (typeof error === "string") {
    //   toast.error(error);
    // } else {
    //   toast.error("An unexpected error occurred");
    // }
    //     }
           
    //     }}

    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
        >

        
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form className='space-y-5 md:space-y-6'>
          <div className='grid grid-cols-2 lg:grid-cols-1 gap-5 md:gap-6'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                {/* remove after the desing this svg tag */}
                <svg
                className='w-5 h-5 text-gray-500'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>

                  <path
                  fillRule='evenodd'
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd">
                    
                  </path>
                </svg>
                {/* remove after the desing this svg tag */}
              </div>

              <TextInput
              type='text'
              name='fullName'
              id='fullName'
              className="bg-[#e8edec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
              placeholder='Full Name'
              value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.fullName}
                touched={touched.fullName}
              // required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <TextInput
                type="email"
                name="email"
                id="email"
                className="bg-[#e8edec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
                placeholder="Email Address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
                // required
              />
            </div>



            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <TextInput
                type="password"
                name="password"
                id="password"
                className="bg-[#e8edec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
                // required
              />
            </div>



            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <TextInput
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="bg-[#e8edec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
                // required
              />
            </div>
          </div>


           <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4  rounded bg-gray-50 "
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-brightColor hover:text-brightColor font-medium"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-brightColor hover:text-brightColor font-medium"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>


          <Button type="submit" className='hover:bg-black hover:text-white' width='full'
           label='Create Account' 
          />

        </Form>
        )}
        </Formik>

<div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or sign up with</span>
          </div>
        </div>


<div className="grid gap-3">
          {/* Google */}
          <Button type="button" className='hover:bg-black hover:text-white' width='full'
           
            label='Sign in with Google'
            icon={googleLogo} 
          />
      </div>

        <p className="text-sm text-center text-gray-600 mt-4 border-t border-gray-100 pt-4">
          Already have an account? Sign in
        </p>

      </div>
    </div>
    </>
  )
}

export default UserRegistration
