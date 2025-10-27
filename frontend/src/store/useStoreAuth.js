import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useStoreAuth = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isCheckingAuth: true,
  isLoggingIn: false,
}));
