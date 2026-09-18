import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/services/firebase/config";
import { useAuth } from "@/store/authStore";

export const subscribeToAuthChanges = () => {
  const { setUser, setLoading } = useAuth.getState();

  return onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
  });
};
