import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // your firebase config file

const bookingsCollection = collection(db, "bookings");

export const getBookedSlots = async (date: string): Promise<string[]> => {
  const q = query(bookingsCollection, where("date", "==", date));
  const querySnapshot = await getDocs(q);

  const bookedSlots: string[] = [];
  querySnapshot.forEach((doc) => {
    bookedSlots.push(doc.data().timeSlot);
  });

  return bookedSlots;
};

export const bookSlot = async (date: string, timeSlot: string) => {
  return await addDoc(bookingsCollection, {
    date,
    timeSlot,
    createdAt: new Date(),
  });
};
