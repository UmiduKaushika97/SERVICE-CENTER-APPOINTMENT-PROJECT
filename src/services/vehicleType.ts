// services/vehicleService.ts
import { db } from "../firebaseConfig"; // your firebase config file
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

export interface Vehicle {
    // id: string;
    vehicleType: string;
    status: string;
}

const vehiclesCollection = collection(db, "VEHICLES");

// Add vehicle
export const addVehicle = async (vehicleData: Vehicle) => {
  return await addDoc(vehiclesCollection, vehicleData);
};

// Get all vehicles
export const getVehicles = async () => {
  const snapshot = await getDocs(vehiclesCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() as Vehicle }));
};

// Update vehicle
export const updateVehicle = async (id: string, vehicleData:Partial<Vehicle>) => {
  const vehicleDoc = doc(db, "vehicles", id);
  return await updateDoc(vehicleDoc, vehicleData);
};

// Delete vehicle
export const deleteVehicle = async (id: string) => {
  const vehicleDoc = doc(db, "vehicles", id);
  return await deleteDoc(vehicleDoc);
};






export interface UserVehiclePayload {
  vehicleType: string;
  vehicleNumber: string;
  userId: string;
  status: string;
}

const usersVehicleCollection = collection(db, "UsersVehicle");

export const addUserVehicle = async (payload: UserVehiclePayload) => {
  try {
    const docRef = await addDoc(usersVehicleCollection, payload);
    return docRef.id;
  } catch (error) {
    console.error("Error adding user vehicle:", error);
    throw error;
  }
};



export interface LogUserVehicle {
  id: string;
  userId: string;
  vehicleType: string;
  vehicleNumber: string;
  status: string ;
}

export const getUserVehicles = async (userId: string): Promise<LogUserVehicle[]> => {
  const q = query(
    collection(db, "UsersVehicle"),
    where("userId", "==", userId),
    // where("vehicleType", "==", vehicleType),
    where("status", "==", "Active")
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as LogUserVehicle[];
};

