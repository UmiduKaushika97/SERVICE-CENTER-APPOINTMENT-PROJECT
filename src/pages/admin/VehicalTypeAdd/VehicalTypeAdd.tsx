import React from 'react'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import * as Yup from "yup";
import { addVehicle } from '../../../services/vehicleType';
import { toast, ToastContainer } from 'react-toastify';
import { Form, Formik, type FormikHelpers } from 'formik';


const vehicleSchema = Yup.object().shape({
  vehicleType: Yup.string().required("VehicleType is required"),
  // model: Yup.string().required("Model is required"),
  // ownerName: Yup.string().required("Owner name is required"),
  // contactNumber: Yup.string()
  //   .matches(/^[0-9]{10}$/, "Contact must be 10 digits")
  //   .required("Contact number is required"),
});

interface Vehical {
vehicleType: string,
status: string,
}

const VehicalTypeAdd = () => {

  const initialValues: Vehical = { vehicleType: "", status: "Active"};

  const handleSubmit = async (values: Vehical, { resetForm }: FormikHelpers<Vehical>) => {
    try {
      await addVehicle(values);
      toast.success("Vehicle type added successfully!");
      resetForm();
    } catch (error) {
      console.error("Error adding vehicle type:", error);
      toast.error("Failed to add vehicle type.");
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">

      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <Formik
        initialValues={initialValues}
        validationSchema={vehicleSchema}
        onSubmit={handleSubmit}>
          {({ values, handleChange, handleBlur, errors, touched,}) =>(
     <Form>
              <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center">
          <div className='w-full'>
            <label className="block font-medium mb-2">Vehicle Type</label>
             <TextInput
              type="text"
              name="vehicleType"
              // id="email"
              className="bg-[#e8edec] uppercase border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
              placeholder="Enter Vehicle Type"
               value={values.vehicleType}
               onChange={handleChange}
                onBlur={handleBlur}
                error={errors.vehicleType}
                touched={touched.vehicleType}
              // required
            />

             
           
          </div>
        <Button
            type="submit"
            className="hover:bg-black hover:text-white mt-6"
            width="full"
            label="Save Details"
          />
         
          </div>
        </Form>
        )}
        </Formik>
    </div>
    </div>
  )
}

export default VehicalTypeAdd
