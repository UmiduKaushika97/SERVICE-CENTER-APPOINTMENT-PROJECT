import { collection, query, where, getDocs, doc, setDoc, orderBy } from "firebase/firestore";
// addDoc,
import { db } from "../firebaseConfig"; // your firebase config file

const bookingsCollection = collection(db, "BOOKINGS");

export const getBookedSlots = async (date: string): Promise<string[]> => {
  const q = query(bookingsCollection, where("bookingDate", "==", date));
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

// export const bookSlot = async (appointment: AppointmentData) => {
//   return await addDoc(bookingsCollection, {
//     ...appointment,
//     createdAt: new Date(),
//   });
// };


export const bookSlot = async (appointment: AppointmentData) => {
  const newDocRef = doc(collection(db, "BOOKINGS"));

  await setDoc(newDocRef, {
    ...appointment,
    id: newDocRef.id, // 🔥 saved inside the document
    createdAt: new Date(),
  });

  return newDocRef;
};


export type AppointmentWithId = AppointmentData & { id: string };

export const getAllBookings = async (): Promise<AppointmentWithId[]> => {
  const q = query(bookingsCollection, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as AppointmentWithId)
  );
};


