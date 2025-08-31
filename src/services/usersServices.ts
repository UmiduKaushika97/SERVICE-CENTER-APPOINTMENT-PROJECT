import { auth, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import type { UserCredential } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  setDoc,
  // updateDoc,
  // deleteDoc,
} from "firebase/firestore";
// import jwt_decode from "jwt-decode";

export interface UserData {
  fullName: string;
  email: string;
  password: string;
  userType: "User";
  status: "Active";
  homeAddress: string;
  mobile: string;
  userimage: string;
  Uid: string;
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
  try {
    const userDetails = await signInWithEmailAndPassword(auth, email, password);
    const user = userDetails.user;

    //  // Refresh token to include claims
    // const token = await user.getIdToken(true);
    // console.log("Claims.....:", token);

    // // Store in localStorage for protected routes
    // localStorage.setItem("authToken", token);

    // // You can also decode claims if needed
    // const idTokenResult = await user.getIdTokenResult();
    // console.log("Claims:", idTokenResult.claims);


    // // Refresh ID token to include custom claims
    // const idToken = await user.getIdToken(true);

    // // Decode token to get userType
    // const decodedToken = jwt_decode(idToken);
    // const userType = decodedToken.userType || "userr";

    // // Store token and userType in localStorage
    // localStorage.setItem("token", idToken);
    // localStorage.setItem("userType", userType);
    // localStorage.setItem("uid", user.uid);





    // const userDoc = await getDoc(doc(usersCollection, user.uid));
    // if (!userDoc.exists()) {
    //     throw new Error("User data not found");
    const userDocRef = doc(usersCollection, user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      return { success: false, message: "User profile not found" };
    }

    // }
// ✅ Get Firebase token and custom claims
    const idTokenResult = await user.getIdTokenResult(true); // refresh token
    console.log("Claimsnormal:", idTokenResult.claims); // userTypeShows

    const userType = (idTokenResult.claims.userType as string)|| "User"; // default to "user"
    console.log("Claimsnormal12:", userType);

    const idTokenResults = await user.getIdTokenResult();
    console.log("Claims:", idTokenResults.claims); // userTypeShows
    // Store token and userType in localStorage
    // localStorage.setItem("token", idTokenResult.token);
    // localStorage.setItem("userType", userType);
    // localStorage.setItem("uid", user.uid);

    

    return {
      // uid: user.uid,
      // email: user.email,
      // ...userDoc.data(),
      success: true,
      message: "Login successful!",
      user: {
        uid: user.uid,
        email: user.email,
        ...userDoc.data(),
      },
    };
  } catch (error: unknown) {
    let message = "Email or password is incorrect";

    if (error instanceof Error) {
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
          message = err.message || message;
      }
    }

    return { success: false, message };
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
    status: data.status, // hardcoded
    createdAt: new Date(),
    homeAddress: data.homeAddress,
    mobile: data.mobile,
    userimage: data.userimage,
    password: data.password,
    Uid: userCredential.user.uid,
  });

  await fetch('http://localhost:5000/api/users/setRole', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid:userCredential.user.uid, userType: 'User' }) // default role
    });

  // Call backend to set custom claims
  // await fetch("http://localhost:5000/users/setRole", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ uid: userCredential.user.uid, role: "usersq" }),
  // });

  // console.log("Registered user:", userCredential.user.uid);

  console.log("service", userCredential, usersCollection);
  return userCredential;
};

export const resetPassword = async (email: string) => {
  // if(!email) throw new Error("Email is required");

  try {
    const que = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(que);

    if (querySnapshot.empty) {
      return {
        success: false,
        message: "User with this email does not exist.",
      };
    }

    await sendPasswordResetEmail(auth, email);
    return {
      success: true,
      message: "Password reset email sent successfully!",
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { error: false, message: "Something went wrong" };
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
