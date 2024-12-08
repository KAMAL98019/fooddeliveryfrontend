//apiservices.js
import { apifetch } from "./apihelper";

export const registerUser = async (userData) => {
  console.log(userData)
    try {
      const response = await apifetch('register', userData);  // 'register' is the API endpoint
      return response;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };


  export const loginUser = async (userData) => {
    try {
      const response = await apifetch('login', userData);  // 'login' is the API endpoint
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };
