import { create } from "zustand";

interface ApiConfigState {
  baseUrl: string;
  setBaseUrl: (url: string) => void;
  initializeBaseUrl: () => void;
}

/**
 * Store for managing API configuration
 * Automatically determines the base URL based on the current environment
 */
export const useApiConfigStore = create<ApiConfigState>((set) => ({
  baseUrl: "",

  setBaseUrl: (url: string) => set({ baseUrl: url }),

  initializeBaseUrl: () => {
    const isLocalhost =
      typeof window !== "undefined" &&
      window.location.href.includes("localhost");
    const baseUrl = isLocalhost
      ? "http://localhost:8000"
      : "https://immah2abvh.us-east-1.awsapprunner.com";
    set({ baseUrl });
  },
}));
