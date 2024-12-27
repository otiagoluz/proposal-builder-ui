import { Proposal } from "@/types";
import { useState, useEffect } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useProposal = (id: string) => {
  const [proposal, setProposal] = useState<Proposal>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProposal = async () => {
      const token = localStorage.getItem("access_token");

      try {
        const response = await fetch(`${API_BASE_URL}/proposals/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const { message } = await response.json();
          throw new Error(message || "Failed to fetch proposals");
        }

        const data: Proposal = await response.json();
        setProposal(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProposal();
  }, []);

  return { proposal, loading, error };
};
