import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import googleLogo from '../../assets/images/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer} from 'react-toastify';
import { loginUser } from '../../services/usersServices';
// import { useState } from 'react';

interface LoginFormValues {
  email: string;
  password: string;
}

const UserSignIn = () => {

 
  const navigate = useNavigate();
  // const [formError, setFormError] = useState("");

  const initialValues: LoginFormValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email")
    .required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters")
    .required("Password is required"),
  });

// const handleSubmit = async (values: LoginFormValues) => {
//     try {
//       const user = await loginUser(values.email, values.password);
//       console.log("Logged in user:", user);

      // // save user in localStorage
      // localStorage.setItem("user", JSON.stringify(user));

      // success toast
      // toast.success(`Welcome ${user.email}`);

      // redirect after short delay
      // setTimeout(() => 
  //       navigate("/Login")
  //     // , 3000);
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       toast.error(error.message); // show error toast
  //     } else {
  //       toast.error("Something went wrong"); // fallback
  //     }
  //   }
  // };

  const handleSubmit = async (values: LoginFormValues) => {

// setFormError(""); // clear old error

//     check if empty
//     if (!values.email && !values.password) {
//       setFormError("Please enter email and password");
//       return;
//     } else if (!values.email) {
//       setFormError("Please enter your email");
//       return;
//     } else if (!values.password) {
//       setFormError("Please enter your password");
//       return;
//     }







  const res = await loginUser(values.email, values.password);

  if (res.success) {
    console.log("User logged in:", res.user);
    toast.success(res.message);
  //  setTimeout(()=> 
    navigate("/")
  //  ,2000);
  } else {
    toast.error(res.message);
  }
};



  return (
    <>
      <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 border border-gray-100">
      <div className="p-6 space-y-6 md:space-y-7 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-backgroundColor md:text-2xl text-center">
          Welcome Back
          <p className="text-sm font-normal text-gray-500 mt-1">
            Sign in to your account
          </p>
        </h1>

        {/* 🔴 Show global form error here
          {formError && (
            <p className="text-center text-red-500 text-sm font-medium">
              {formError}
            </p>
          )} */}

         <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >

 {({ values, handleChange, handleBlur, errors, touched }) => (
     <Form className="space-y-5 md:space-y-6">
       
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
              // id="email"
              className="bg-[#e8edec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full pl-10 p-3 transition-all duration-200 shadow-sm"
              placeholder="Email address"
               value={values.email}
               onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              required
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
              required
            />
          </div>


           <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded bg-gray-50 "
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-gray-500  cursor-pointer"
                >
                  Remember me
                </label>
              </div>
            </div>
            {/* <a
              href="#"
              className="text-sm font-medium text-brightColor hover:underline transition-colors"
            >
              Forgot password?
            </a> */}
            <Link
            to="/ForgotPassword"
            className="text-sm font-medium text-brightColor hover:underline transition-colors"
            > Forgot Password?</Link>

          </div>


        <Button type="submit" className='hover:bg-black hover:text-white' width='full'
            label='Sign in'
          />

     </Form>

      )}
</Formik>
<ToastContainer position="top-right" autoClose={3000} />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
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
          If you don&apos;t have an account, Do Sign Up
          
        </p>
        
        </div>
        </div>
    </>
  )
}

export default UserSignIn
