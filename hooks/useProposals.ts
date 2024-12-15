import { useState, useEffect } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useProposals = () => {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProposals = async () => {
      const token = localStorage.getItem("access_token");

      try {
        const response = await fetch(`${API_BASE_URL}/proposals`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const { message } = await response.json();
          throw new Error(message || "Failed to fetch proposals");
        }

        const data = await response.json();
        setProposals(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, []);

  return { proposals, loading, error };
};
