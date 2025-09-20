import { collection, query, where, getDocs, doc, setDoc, orderBy, Timestamp } from "firebase/firestore";
// addDoc, 9/20/2025 added for timestap
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
  createdAt?: Timestamp; // Firestore timestamp 9/20/2025 added for toDate
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

export type getTodayWithId = AppointmentData & { id: string , createdAt: string };

export const getTodayBookings = async (): Promise<getTodayWithId[]> => {
  const todayStr = new Date().toISOString().split("T")[0]; // e.g. "2025-09-20"

  const q = query(
    bookingsCollection,
    where("bookingDate", "==", todayStr),
    where("status", "==", "Active") // optional filter only active bookings
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(
    (doc) => ({id: doc.id, ...doc.data() }as getTodayWithId),
  );
};


