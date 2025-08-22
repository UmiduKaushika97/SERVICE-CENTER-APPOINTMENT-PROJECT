import {auth, db} from "../firebaseConfig";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import type { UserCredential } from "firebase/auth";
import { collection, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  setDoc, 
  updateDoc, 
  deleteDoc  } from "firebase/firestore";

  export interface UserData {
    fullName: string,
    email: string,
    password: string,
    userType: 3,
    status: 1,
    homeAddress: string,
    mobile: string,
    userimage: string,
    Uid: string,
  }


const usersCollection = collection(db, "USERS");

// export const registerUser = async (
//     fullName: string,
//     email: string,
//     password: string
// ) => {
//     const q = query(usersCollection, where("email", "==", email));
//     const snapshot = await getDocs(q);

//     if(!snapshot.empty) {
//         throw new Error("User already exists with this email");
//     }

//     const res = await createUserWithEmailAndPassword(auth, email, password);

//     await setDoc(doc(usersCollection, res.user.uid), {
//         fullName,
//         email,
//         userType: 3,
//         status: 1,
//         createdAt : new Date(),
//         Uid: res.user.uid,
//         homeAddress: " ",
//         mobile: "071 123 9638",
//         userimage: " ",
//     })

//     return res.user;
// }

// login users

export const loginUser = async (email: string, password: string) => {
    try{
        const userDetails = await signInWithEmailAndPassword(auth, email, password);
        const user = userDetails.user;

        const userDoc = await getDoc(doc(usersCollection, user.uid));
        if (!userDoc.exists()) {
            throw new Error("User data not found");
        }

        return {
      uid: user.uid,
      email: user.email,
      ...userDoc.data(),
        };
    }catch (error: unknown) {
    let message = "Email or password is incorrect";

    // Narrow the unknown type
    if (error instanceof Error) {
      // Firebase error has `code` property, but TS doesn't know, so we assert
      const err = error as { code?: string; message: string };
      switch (err.code) {
        case "auth/user-not-found":
         message = "Email or password is incorrect";
          break;

        case "auth/wrong-password":
          message = "Password is wrong";
          break;
        case "auth/invalid-email":
          message = "Invalid email format";
          break;
        default:
          message = err.message;
      }
    }

    throw new Error(message);
  }
};

// Check if user already exists
export const checkUserExists = async (email: string) => {
  const que = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(que);
  return !querySnapshot.empty;
};

// Register user
export const registerUser = async (data: UserData): Promise<UserCredential> => {
  const userExists = await checkUserExists(data.email);
  if (userExists) {
    throw new Error("User already exists");
  }

   const userCredential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

   // Save extra fields to Firestore
  await setDoc(doc(usersCollection, userCredential.user.uid), {
    fullName: data.fullName,
    email: data.email,
    userType: data.userType, // hardcoded
    status: data.status,     // hardcoded
    createdAt: new Date(),
    homeAddress: data.homeAddress,
    mobile: data.mobile,
    userimage: data.userimage,
    password: data.password,
    Uid: userCredential.user.uid,
  });

    console.log("service", userCredential, usersCollection);
  return userCredential;

};


export const resetPassword = async (email: string) => {
    // if(!email) throw new Error("Email is required");

    try {
            const que = query(usersCollection, where("email", "==", email));
            const querySnapshot = await getDocs(que);

            if (querySnapshot.empty) {
            return { success: false, message: "User with this email does not exist."};
            }

            await sendPasswordResetEmail(auth, email);
            return { success: true, message: "Password reset email sent successfully!" };
             } catch (error: unknown) {
           if (error instanceof Error) {
            return { success: false, message: error.message};
            }
            return { error: false, message: "Something went wrong"};
            }
        
    //     await sendPasswordResetEmail(auth, email);
    //     return {sucess: true, message: "Password reset email sent!"};

    // }catch (error:unknown) {
    //    if (error instanceof Error) {
    //   // Firebase errors have a 'code' property, so we can safely typecast
    //   const e = error as { code?: string };
    //   if (e.code === "auth/user-not-found") {
    //     throw new Error("You entered wrong email!");
    //   } else if (e.code === "auth/invalid-email") {
    //     throw new Error("Invalid email format!");
    //   } else {
    //     throw new Error("Something went wrong!");
    //   }
    // } else {
    //   throw new Error("Something went wrong!");
    // }
  
};
