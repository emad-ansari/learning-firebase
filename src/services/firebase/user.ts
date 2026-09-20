import { db } from "@/services/firebase/config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export const createUser = async (
  uid: string,
  username: string,
  email: string,
) => {
  await setDoc(doc(db, "users", uid), {
    username,
    email,
    createdAt: serverTimestamp(),
  });
};

