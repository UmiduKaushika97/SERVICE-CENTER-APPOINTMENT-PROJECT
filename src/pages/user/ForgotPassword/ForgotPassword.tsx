import { Link } from 'react-router-dom';
import Frogot from '../../../assets/images/Frogot.png';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
// import { useState } from 'react';
import { resetPassword } from '../../../services/usersServices';
import { toast, ToastContainer } from 'react-toastify';
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ForgotPassword = () => {
    // const [email, setEmail] = useState("");

    const initialValues = {
    email: "",
    
  }

    const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

    const handleSubmit = async (values: typeof initialValues,{resetForm}:{ resetForm: () => void}) => {
        try {
            const res = await resetPassword(values.email);
            toast.success(res.message);
            // setEmail("");
            console.log("password reset", res);
            resetForm();
        }catch (error: unknown) {
            if (error instanceof Error) {
            toast.error(error.message);
        } else {
            toast.error("Something went wrong!");
            }
        }
    };

  return (
    <>
      <div className="container mx-auto px-4 pt-10 mt-15">
    <div className="flex flex-col lg:flex-row items-center">
      
      {/* <!-- Left Image --> */}
      <div className="w-full lg:w-1/2 text-center">
        <img src={Frogot} alt="Main IMG" className="w-full max-w-md mx-auto"/>
      </div>

      {/* <!-- Right Section --> */}
      <div className="w-full lg:w-1/2 lg:mt-0 px-4">
        <h2 className="text-2xl lg:text-4xl font-bold">Forgot <br/> Your Password</h2>
        <p className='mt-4 text-gray-600'>Don't worry! It happens. Please enter your email address 
        <br/>Associated with your account</p>

        {/* <input type="email" placeholder="Enter Your E-mail" className="main-input mt-8"/> */}
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
{({values, errors, touched, handleChange, handleBlur }) => (
    <Form>
        <div className="relative mt-4">
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
            //   id="email"
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

        <div className='flex justify-end mt-4'>
            {/* <a href="#" className="ml-6 back-to-login">Back To Login</a> */}
            <Link
            to="/UserLogin"
            className="text-sm font-medium text-brightColor hover:underline transition-colors"
            > Back To Login?</Link>
        </div>
        <div className="flex items-center mt-8">
          {/* <button className="btn-sz-primary">Reset</button> */}
          <Button type="submit" className='hover:bg-black hover:text-white' width='full'
           
            label='Send Email'
          />
          
        </div>
        </Form>
        )}
        </Formik>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  </div>
    </>
  )
}

export default ForgotPassword
