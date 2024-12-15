
'use client';

import React from "react";
import { useState, useEffect } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

export default function ProposalViewer({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = React.use(paramsPromise);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHtml = async () => {
      const token = localStorage.getItem("access_token");

      try {
        const response = await fetch(`${API_BASE_URL}/proposals/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage || "Failed to load proposal");
        }

        const html = await response.text(); // Recebe o HTML diretamente
        setHtmlContent(html);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchHtml();
  }, [params.id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!htmlContent) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Proposal Viewer</h1>
      <div className="border rounded overflow-hidden">
        <iframe
          srcDoc={htmlContent}
          className="w-full h-screen border-none"
          sandbox="allow-same-origin allow-scripts"
        />
      </div>
    </div>
  );
}