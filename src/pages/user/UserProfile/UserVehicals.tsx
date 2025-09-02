import { useEffect, useState } from 'react'
// import { FaSearch } from 'react-icons/fa'
import Button from '../../../components/Button'
import TextInput from '../../../components/TextInput'
import DropDown from '../../../components/DropDown'
import { addUserVehicle, getVehicles, type UserVehiclePayload, type Vehicle } from '../../../services/vehicleType'
import { getAuth } from 'firebase/auth'
import * as Yup from "yup";
import { Form, Formik, type FormikHelpers } from 'formik'
import { toast, ToastContainer } from 'react-toastify'

// interface Vehicle {
//   vihicalType: string;
// }

interface UserVehical {
vehicleType: string;
vehicleNumber: string;
status: string;
}

const UserVehicals = () => {
//     const [vehicles, setVehicles] = useState<Vehicle[]>([]);
//   const [selectedVehicle, setSelectedVehicle] = useState("");


//   useEffect(() => {
//     const fetchVehicles = async () => {
//       try {
//         const data = await getVehicles();
//         setVehicles(data);
//       } catch (error) {
//         console.error("Error fetching vehicles:", error);
//       }
//     };
//     fetchVehicles();
//   }, []);

//   const vehicleOptions = vehicles.map((v) => ({
//     label: v.vehicleType, // Display vehicleType in dropdown
//     value: v.id,
//   }));

const [vehicles, setVehicles] = useState<Vehicle[]>([]);
const [selectedVehicle, setSelectedVehicle] = useState("");

 const auth = getAuth();
  const loggedUserId = auth.currentUser?.uid;

useEffect(() => {
  const fetchVehicles = async () => {
    try {
      const data = await getVehicles();
      setVehicles(data);
      console.log("Normaly UserVehicals", selectedVehicle);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };
  fetchVehicles();
}, []);

const vehicleOptions = vehicles.map((v) => ({
  label: v.vehicleType, // what user sees

  value: v.vehicleType,
}));

 const initialValues = {
    vehicleType: "",
    vehicleNumber: "",
    status: "Active"
  };

  const validationSchema = Yup.object({
    vehicleType: Yup.string().required("Vehicle type is required"),
    vehicleNumber: Yup.string().required("Vehicle number is required"),
  });


   const handleSubmit = async (values: typeof initialValues, { resetForm }: FormikHelpers<UserVehical>) => {
    if (!loggedUserId) {
      alert("User not logged in");
      return;
    }

    const payload: UserVehiclePayload = {
      ...values,
      userId: loggedUserId, // attach logged-in user ID
    };

    try {
      await addUserVehicle(payload);
      toast.success("Vehicle added successfully!");
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add vehicle. Try again.");
    }
  };
  return (
    <>
   
      {/* Accounts Card */}
              <div className="bg-white shadow-md rounded-2xl p-6 relative">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Your Vechicle add</h2>
                  {/* <FaSearch className="text-gray-500" /> */}
                </div>
      
                {/* <div className="mb-6">
                  <p className="text-sm text-gray-500">Active account</p>
                  <p className="font-medium">8640 569 8801 4255</p>
                  <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 text-sm">
                    Block Account
                  </button>
                </div> */}
      
                {/* <div>
                  <p className="text-sm text-gray-500">Blocked account</p>
                  <p className="font-medium">8640 569 8801 4255</p>
                  <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 text-sm">
                    Unblock account
                  </button>
                </div> */}
 <ToastContainer position="top-right" autoClose={3000} />
                <Formik
                initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
                >
                     {({ values, handleChange, handleBlur, errors, touched,}) =>(
                        <Form>
                <div className='w-full'>
            <label className="block font-medium mb-2">Vehicle Type</label>
             <DropDown
              value={values.vehicleType}
  onChange={(val) => {
    setSelectedVehicle(val);  // optional, if you need it elsewhere
    handleChange({ target: { name: 'vehicleType', value: val } });
  }}
        placeholder="Choose a vehicle"
        options={vehicleOptions}
            //   type="text"
            //   name="vehicleType"
              // id="email"
            //   className="bg-[#e8edec] uppercase border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
            //   placeholder="Enter Vehicle Type"
            //    value={values.vehicleType}
            //    onChange={handleChange}
            //     onBlur={handleBlur}
            //     error={errors.vehicleType}
            //     touched={touched.vehicleType}
              // required
            />

             
           {/* <p className="mt-2">Selected Vehicle ID: {selectedVehicle}</p> */}
          </div>


           <div className='w-full mt-5'>
            <label className="block font-medium mb-2">Vehicle Number</label>
             <TextInput
              type="text"
              name="vehicleNumber"
              // id="email"
              className="bg-[#e8edec] uppercase border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
              placeholder="Enter Vehicle Type"
               value={values.vehicleNumber}
               onChange={handleChange}
                onBlur={handleBlur}
                error={errors.vehicleType}
                touched={touched.vehicleType}
              // required
            />

             
           
          </div>
        <Button
            type="submit"
            className="hover:bg-black hover:text-white mt-18"
            width="full"
            label="Add Your Vehicle"
          />
          </Form>
          )}
          </Formik>
              </div>
    </>
  )
}

export default UserVehicals
