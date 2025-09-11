import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // your firebase config file

const bookingsCollection = collection(db, "BOOKINGS");

export const getBookedSlots = async (date: string): Promise<string[]> => {
  const q = query(bookingsCollection, where("date", "==", date));
  const querySnapshot = await getDocs(q);

  const bookedSlots: string[] = [];
  querySnapshot.forEach((doc) => {
    bookedSlots.push(doc.data().timeSlot);
  });

  return bookedSlots;
};


interface AppointmentData {
  userId: string;
  email: string;
  fullName: string;
  homeAddress: string;
  mobile: string;
  mobileOP?: string;
  vehicleType: string;
  vehicleNumber: string;
  bookingDate: string;
  timeSlot: string;
  status: string;
}

export const bookSlot = async (appointment: AppointmentData) => {
  return await addDoc(bookingsCollection, {
    ...appointment,
    createdAt: new Date(),
  });
};
