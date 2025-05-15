import { useEffect, useState } from "react";

import { onAuthStateChanged, User } from "firebase/auth";
("firebase/auth");
import { auth } from "../db/firebaseConfig";
import firebase from "firebase/compat/app";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return;
  }, []);
  return { user, loading };
}
