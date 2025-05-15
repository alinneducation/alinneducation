import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../db/firebaseConfig";
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const logout = async () => {
  return await signOut(auth);
};
