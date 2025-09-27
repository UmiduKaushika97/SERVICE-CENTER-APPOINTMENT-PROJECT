import { useEffect, useState } from "react";
import TextInput from "../../../components/TextInput";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { getUserDetails } from "../../../services/usersServices";
import {
  getUserVehicles,
  type LogUserVehicle,
} from "../../../services/vehicleType";
import DropDown from "../../../components/DropDown";

import { getBookedSlots, bookSlot } from "../../../services/bookingServices";

const timeSlots = [
  "9-10",
  "10-11",
  "11-12",
  "12-1",
  "1-2",
  "2-3",
  "3-4",
  "4-5",
  "5-6",
];

interface AppointmentFormValues {
  email: string;
  fullName: string;
  homeAddress: string;
  mobile: string;
  mobileOP: string;
  vehicleType: string;
  vehicleNumber: string;
  bookingDate: string;
  timeSlot: string;
  mainService: string;
  status: "Active";
}


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  fullName: Yup.string().min(3, "At least 3 characters").required("Full name is required"),
  homeAddress: Yup.string().required("Home address is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile must be 10 digits")
    .required("Mobile is required"),
  mobileOP: Yup.string().nullable(),
  vehicleType: Yup.string().required("Vehicle type is required"),
  vehicleNumber: Yup.string().required("Vehicle number is required"),
  bookingDate: Yup.string().required("Date is required"),
  timeSlot: Yup.string().required("Time slot is required"),
  mainService: Yup.string().required("Main service is required"),
});



const Appointments = () => {
  const [vehicles, setVehicles] = useState<LogUserVehicle[]>([]);
  const [vehicleTypes, setVehicleTypes] = useState<
    { label: string; value: string }[]
  >([]);
  const [vehicleNumbers, setVehicleNumbers] = useState<
    { label: string; value: string }[]
  >([]);

  const [initialValues, setInitialValues] = useState<AppointmentFormValues>({
    email: "",
    fullName: "",
    homeAddress: "",
    mobile: "",
    mobileOP: "",
    vehicleType: "",
    vehicleNumber: "",
    bookingDate: "",
    timeSlot: "",
    mainService: "",
    status: "Active",
  });


  

  const [userId, setUserId] = useState<string | null>(null);
  console.log("adawdw",userId);

  

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        console.log("current user id from appointment page...", userId);
        const toastId = toast.loading("Loading profile...");
        try {
          const data = await getUserDetails(user.uid);
          setInitialValues({
            email: data.email || "",
            fullName: data.fullName || "",
            homeAddress: data.homeAddress || "",
            mobile: data.mobile || "",
            mobileOP: "",
            vehicleType: "", // add default value
            vehicleNumber: "",
            bookingDate: "",
            timeSlot: "",
            mainService: "",
            status: "Active",
            //
          });

          // load vehicles
          const userVehicles = await getUserVehicles(user.uid);
          setVehicles(userVehicles);

          // unique vehicle types
          const types = Array.from(
            new Set(userVehicles.map((v) => v.vehicleType))
          ).map((type) => ({
            label: type,
            value: type,
          }));
          setVehicleTypes(types);

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
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    // resetForm,
  } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      console.log("form values", values);
      handleBooking();
    },
  });

  useEffect(() => {
    if (userId) {
      const fetchUserVehicles = () => {
        try {
          const filteredVehicles = vehicles?.filter(
            (item) => item.vehicleType == values?.vehicleType
          );
          const vehicleNumbersArry = filteredVehicles?.map((item) => ({
            label: item.vehicleNumber,
            value: item.vehicleNumber,
          }));

          setVehicleNumbers(vehicleNumbersArry);
        } catch (error) {
          console.error("Failed to fetch user vehicles", error);
        }
      };

      fetchUserVehicles();
    }
  }, [userId, values?.vehicleType]);

  const [selectedDate, setSelectedDate] = useState("");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState("");

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split("T")[0];

  // Calculate max date (today + 21 days)
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 21);
  const maxDateString = maxDate.toISOString().split("T")[0];

  useEffect(() => {
    if (selectedDate) {
      fetchBookedSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchBookedSlots = async (date: string) => {
    const slots = await getBookedSlots(date);
    setBookedSlots(slots);
    setSelectedSlot(""); // reset selected slot on date change
  };

  const getBookableSlots = (slots: string[], selectedDate: string) => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const currentHour = now.getHours(); // 0-23

    return slots.map((slot) => {
      // Only extract the start hour
      const startRaw = parseInt(slot.split("-")[0]);

      // Convert 12-hour afternoon slots if needed
      const start = startRaw < 8 ? startRaw + 12 : startRaw;

      // Disable if selected date is today and slot start < current hour
      const disabled = selectedDate === today && start < currentHour;
      return { slot, disabled };
    });
  };

  const handleBooking = async () => {
    if (!selectedSlot || !selectedDate) return alert("Select date & time slot");
    if (!userId) return alert("User not logged in");
    // await bookSlot(selectedDate, selectedSlot);
    // alert(`Booked ${selectedSlot} on ${selectedDate}`);
    // fetchBookedSlots(selectedDate); // refresh slots

    try {
    const appointmentData = {
      userId,
      email: values.email,
      fullName: values.fullName,
      homeAddress: values.homeAddress,
      mobile: values.mobile,
      mobileOP: values.mobileOP,
      vehicleType: values.vehicleType,
      vehicleNumber: values.vehicleNumber,
      bookingDate: selectedDate,
      timeSlot: selectedSlot,
      mainService: values.mainService,
      status: "Active",
    };

    await bookSlot(appointmentData);

    toast.success(`Booked ${selectedSlot} on ${selectedDate}`);
    fetchBookedSlots(selectedDate); // refresh slots

    } catch (err) {
    console.error("Booking failed:", err);
    toast.error("Failed to book appointment");
  }
  };

  return (
    <>
      <NavigationBar />

      <div className="min-h-screen flex flex-col items-center">
        {/* Header */}
        <div className="w-full bg-gray-50 h-30 flex items-center justify-center">
          <h1 className="text-3xl">Appointment Reservation</h1>
        </div>

        {/* Form */}
        <div className="bg-white  rounded-xl p-8 w-full max-w-6xl">
          <form className="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Email block */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <TextInput
                  type="email"
                  name="email"
                  // id="email"
                  className="bg-[white] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
                  placeholder="Email address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email}
                  touched={touched.email}
                  // required
                  disabled={true}
                />
              </div>

              {/* Full Name block */}
              <div className="flex-1">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <TextInput
                  type="email"
                  name="fullName"
                  // id="email"
                  className="bg-[white] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
                  placeholder="Full Name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.fullName}
                  touched={touched.fullName}
                  // required
                  disabled={true}
                />
              </div>

              {/* Email block */}
              <div className="flex-1">
                <label
                  htmlFor="Phone Number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <TextInput
                  type="email"
                  name="Mobile"
                  // id="email"
                  className="bg-[white] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
                  placeholder="Email address"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.mobile}
                  touched={touched.mobile}
                  disabled={true}
                  // required
                />
              </div>

              {/* Full Name block */}
              <div className="flex-1">
                <label
                  htmlFor="Phone Number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number (optional)
                </label>
                <TextInput
                  type="text"
                  name="mobileOptional"
                  // id="email"
                  className="bg-[white] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
                  placeholder="Mobile"
                   value={values.mobileOP}
                  //  onChange={handleChange}
                  //   onBlur={handleBlur}
                  //   error={errors.email}
                  //   touched={touched.email}
                  // required
                />
              </div>
              {/* Email block */}
              <div className="flex-1">
                <label
                  htmlFor="Phone Number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Vehicle Type <span className="text-red-500">*</span>
                </label>
                <DropDown
                  // type="dropdown"
                  // name="vehicleType"
                  options={vehicleTypes}
                  value={values.vehicleType}
                  // id="email"
                  className="bg-[white] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
                  placeholder="Email address"
                  //  value={values.email}
                  //  onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={errors.vehicleType}
                    // touched={touched.vehicleType}
                  // required
                  onChange={(value: string) =>
                    setFieldValue("vehicleType", value)
                  }
                  onBlur={handleBlur}
                  error={errors.vehicleType}
                  touched={touched.vehicleType}
                />
              </div>
              {/* Full Name block */}
              <div className="flex-1">
                <label
                  htmlFor="Phone Number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Vehicle Number
                </label>
                <DropDown
                  //  name="vehicleNumber"
                  options={vehicleNumbers || []}
                  value={values.vehicleNumber}
                  onChange={(value: string) =>
                    setFieldValue("vehicleNumber", value)
                  }
                  onBlur={handleBlur}
                  error={errors.vehicleNumber}
                  touched={touched.vehicleNumber}
                />
              </div>
            </div>

            <hr className="col-span-4 border border-gray-100 my-5" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="">
                <label
                  htmlFor="Phone Number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date <span className="text-red-500">*</span>
                </label>
                <TextInput
                  type="date"
                  name="Mobile"
                  // id="email"
                  className="bg-[white] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-brightColor focus:border-brightColor block w-full transition-all duration-200 shadow-sm"
                  placeholder="Email address"
                  //  value={values.email}
                  //  onChange={handleChange}
                    onBlur={handleBlur}
                    // error={errors.selectedDate}
                    // touched={touched.email}
                  // required

                  min={today}
                  max={maxDateString}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
              <div className=" md:col-span-3 md:mt-5">
                <div className="flex flex-wrap gap-3">
                  {selectedDate && (
                    getBookableSlots(timeSlots, selectedDate).map(
                      ({ slot, disabled }) => (
                        <button
                          type="button"
                          key={slot}
                          disabled={disabled || bookedSlots.includes(slot)}
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-2 border rounded w-18 h-10 ${
                            disabled || bookedSlots.includes(slot)
                              ? "bg-red-600 cursor-not-allowed"
                              : selectedSlot === slot
                              ? "bg-green-600 text-white"
                              : "bg-white"
                          }`}
                        >
                          {slot}
                        </button>
                      )
                    )
                  )
                  //  : (
                  //   <p className="text-gray-500 col-span-3 text-center">
                  //     Please select a date to see available time slots
                  //   </p>
                  // )
                  }
                </div>
              </div>
            </div>
            <hr className="col-span-4 border border-gray-100 my-5" />
  
            {/* Services */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4 md:col-span-4">
              {/* Column 1 */}
              <div>
                <h3 className="font-semibold mb-2">Main Service <span className="text-red-500">*</span></h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox"
                    value={values.mainService}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // error={errors.mainService}
                    /> Oil Change / Car Wash
                  </label>
                  {/* <label className="flex items-center gap-2">
                    <input type="checkbox" /> Lube Services
                  </label> */}
                  {(errors.mainService && touched.mainService) && errors.mainService}
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="font-semibold mb-2">Select services</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Wash and Grooming 
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Lube Services
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Exterior & Interior Detailing
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Engine Tune ups
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Wash and Grooming
                  </label>
                </div>
              </div>

              {/* Column 3 */}
              <div>
                <h3 className="font-semibold mb-2">Select services</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Windscreean Treatments
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Inspection Reports
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Part Replacements
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Wheel Alignment
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Nano Treatments
                  </label>
                </div>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="font-semibold mb-2">Select services</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Mechanical
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Detailing
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Full Paints
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Body Shop
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Other
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-4 flex justify-end mt-6">
              <button
                type="submit"
                // className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
                disabled={!selectedSlot || !selectedDate} // disable if nothing selected
                className={`p-2 rounded w-full ${
                  !selectedSlot || !selectedDate
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 text-white"
                }`}
              >
                Reserve Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Appointments;
