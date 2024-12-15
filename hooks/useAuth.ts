import { useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useAuth = () => {
  const [error, setError] = useState("");

  const login = async (email: string, password: string) => {

    console.log(API_BASE_URL);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || "Login failed");
      }

      const { access_token } = await response.json();
      localStorage.setItem("access_token", access_token);


      console.log(access_token);
      return true;
    } catch (err: any) {
      setError(err.message);
      return false;
    }
  };

  return { login, error };
};