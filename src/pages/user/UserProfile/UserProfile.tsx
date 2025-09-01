import { useEffect, useState } from "react";
// import NavigationBar from "../NavigationBar/NavigationBar";
import { FaSearch } from "react-icons/fa";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUserDetails, updateUserDetails } from "../../../services/usersServices";
import { toast } from "react-toastify";

const UserProfile = () => {

  const [initialValues, setInitialValues] = useState({
    email: "",
    fullName: "",
    homeAddress: "",
    mobile: "",
  });


  const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  fullName: Yup.string().required("Required"),
  homeAddress: Yup.string().required("Required"),
  mobile: Yup.string().required("Required"),
  
});

//   const user = getAuth().currentUser;

//   useEffect(() => {
//     const fetchUser = async () => {
//         if (user?.uid) {
//             const data = await getUserDetails(user.uid);
//             console.log("user", data)

//             setInitialValues({
//           email: data.email || "",
//           fullName : data.fullName || "",
//           homeAddress : data.homeAddress || "",
//           mobile: data.mobile || "",
//         });
//         }
//     };
//     fetchUser();
//   }, [user])


const [userId, setUserId] = useState<string | null>(null);
//  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
         const toastId = toast.loading("Loading profile...");
         try{
        const data = await getUserDetails(user.uid);
        setInitialValues({
          email: data.email || "",
          fullName: data.fullName || "",
          homeAddress: data.homeAddress || "",
          mobile: data.mobile || "",
        });


        toast.update(toastId, {
          render: "Profile loaded successfully!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
        });
      
      } catch (error) {
        console.error("Error loading profile:", error);
        toast.update(toastId, {
          render: "Failed to load profile",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
    //   } finally {
    //     setLoading(false);
    //   }

    //   } else {
    //   setLoading(false);
    //   }
     }
        }
    });

    return () => unsubscribe();
  }, []);


//   const handleSubmit = async (values: any) => {
//   if (user?.uid) {
//     const toastId = toast.loading("Updating profile...");

//     const result = await updateUserDetails(user.uid, values);

//     if (result.success) {
//       toast.update(toastId, {
//         render: "Profile updated successfully!",
//         type: "success",
//         isLoading: false,
//         autoClose: 2000,
//       });
//     } else {
//       toast.update(toastId, {
//         render: "Failed to update profile",
//         type: "error",
//         isLoading: false,
//         autoClose: 2000,
//       });
//     }
//   }
// };

//  const handleSubmit = async (values: typeof initialValues) => {
//     try {
//       await updateUserDetails(userId, values);
//       alert("Profile updated successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update profile.");
//     }
//   };


  const handleSubmit = async (values: typeof initialValues) => {
  if (!userId) return; // <-- safeguard
  try {
    await updateUserDetails(userId, values);
    toast.success("Profile updated successfully!");
  } catch (err) {
    console.error(err);
    toast.error("Failed to update profile.");
  }
};

//   const [smsAlerts, setSmsAlerts] = useState(true);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Card */}
        <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
       
        >
             {({ values, handleChange, handleBlur, errors, touched, }) => (
<Form>
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center">
          {/* <img
            src="https://via.placeholder.com/150"
            alt="profile"
            className="w-32 h-32 rounded-full object-cover mb-4"
          /> */}
          <h2 className="text-lg font-semibold mb-3">My profile</h2>
          {/* <p className="text-gray-400 text-sm mt-5">Last login: 07 Aug 2019 14:54</p> */}

          <div className="flex flex-col md:flex-row md:items-center w-full">
            {/* Label */}
            <label
              // htmlFor="email"
              className="w-full sm:w-40 text-gray-700 font-medium text-sm sm:text-base mb-2"
            >
              Email address :
            </label>
            <div className="w-full">
              <TextInput
                type="email"
                name="email"
                // id="email"
                className=" flex-1 bg-[#e8edec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
                placeholder="Email address"
                   value={values.email}
                   onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                    disabled={true}
                
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center w-full mt-4">
            {/* Label */}
            <label
              // htmlFor="email"
              className="w-full sm:w-40 text-gray-700 font-medium text-sm sm:text-base mb-2"
            >
              Full Name :
            </label>
            <div className="w-full">
              <TextInput
                type="text"
                name="fullName"
                // id="email"
                className=" flex-1 bg-[#e8edec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
                placeholder="Email address"
                   value={values.fullName}
                   onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.fullName}
                    touched={touched.fullName}
                
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center w-full mt-4">
            {/* Label */}
            <label
              // htmlFor="email"
              className="w-full sm:w-40 text-gray-700 font-medium text-sm sm:text-base mb-2"
            >
              Home Address :
            </label>
            <div className="w-full">
              <TextInput
                type="text"
                name="homeAddress"
                // id="email"
                className=" flex-1 bg-[#e8edec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
                placeholder="Email address"
                   value={values.homeAddress}
                   onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.homeAddress}
                    touched={touched.homeAddress}
               
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center w-full mt-4">
            {/* Label */}
            <label
              // htmlFor="email"
              className="w-full sm:w-40 text-gray-700 font-medium text-sm sm:text-base mb-2"
            >
              Mobile :
            </label>
            <div className="w-full">
              <TextInput
                type="number"
                name="mobile"
                // id="email"
                className=" flex-1 bg-[#e8edec] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
                placeholder="Mobile Number"
                   value={values.mobile}
                   onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.mobile}
                    touched={touched.mobile}
                
              />
            </div>
          </div>

          <Button
            type="submit"
            className="hover:bg-black hover:text-white mt-10"
            width="full"
            label="Save Details"
          />

          
        </div>

       </Form>
       )}
          </Formik> 

        {/* Accounts Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">My xPay accounts</h2>
            <FaSearch className="text-gray-500" />
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500">Active account</p>
            <p className="font-medium">8640 569 8801 4255</p>
            <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 text-sm">
              Block Account
            </button>
          </div>

          <div>
            <p className="text-sm text-gray-500">Blocked account</p>
            <p className="font-medium">8640 569 8801 4255</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 text-sm">
              Unblock account
            </button>
          </div>
        </div>

        {/* Bills Card */}
        {/* <div className="bg-white shadow-md rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">My bills</h2>
            <button className="text-sm bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200">
              Filter by
            </button>
          </div>

          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                Phone bill
              </span>
              <span className="text-green-600 font-medium text-sm">Bill paid</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-500 rounded-full" />
                Internet bill
              </span>
              <span className="text-pink-600 font-medium text-sm">Not paid</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                House rent
              </span>
              <span className="text-green-600 font-medium text-sm">Bill paid</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                Income tax
              </span>
              <span className="text-green-600 font-medium text-sm">Bill paid</span>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default UserProfile;
