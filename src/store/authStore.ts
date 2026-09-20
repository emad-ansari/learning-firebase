import { loginUser, logoutUser, registerUser } from "@/services/firebase/auth";
import { createUser } from "@/services/firebase/user";
import { User } from "firebase/auth";
import { create } from "zustand";

interface AuthState {
  loading: boolean;
  error: string | null;
  user: User | null;

  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  loading: true,
  error: null,
  user: null,

  setUser: (user) => {
    set({ user });
  },

  setLoading: (loading) => {
    set({ loading });
  },

  register: async (username, email, password) => {
    set({ loading: true, error: null });

    try {
      const userCredential = await registerUser(email, password);
      if (userCredential.user) {
        // save the user in database/firestore
        const user = userCredential.user;
        console.log("user: ", user);
        await createUser(user.uid, username, email);
        console.log("user saved successfully");
      }
    } catch (error: any) {
      console.error("User Registration failed!", error);
      set({ error });
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const userCredential = await loginUser(email, password);
      console.log(
        "login user creddentials: ",
        JSON.stringify(userCredential, null, 2),
      );
    } catch (error: any) {
      console.error("user login failed: ", JSON.stringify(error));
      set({ error });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await logoutUser();
    } catch (error: any) {
      console.error("Logout failed!!", error);
      set({ error: error });
    } finally {
      set({ loading: false });
    }
  },
}));
