"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useProposal } from "@/hooks/useProposal";
import { Button, ButtonGroup, Card, Link } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import parse from 'html-react-parser';

export default function ProposalDetails({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = React.use(params);
  const { proposal, loading, error } = useProposal(id);

  if (loading) return <p>Loading proposal details...</p>;
  if (error) return <p>Error: {error}</p>;


  const proposalHTML = proposal?.generatedText as string;

  const cleanHtml = proposalHTML.replace(/<\/?(html|head|body)[^>]*>/gi, "");

  const current_date = "AAAAA"


  return (
    <div className="p-6">
      <Link
        className={buttonStyles({
          color: "default",
          variant: "light"
        })}
        href="#"

        onPress={() => router.back()}
      >
      &#60; Back to Proposals
      </Link>

      <h1 className="text-xl font-bold mb-4">Proposal Viewer</h1>

      

      <div className="p-6 flex flex-col gap-4">

        <div className="flex justify-end gap-2">
          <Button color="primary" variant="ghost">
            Delete
          </Button>
          <Button color="primary" variant="ghost" >
            Edit
          </Button>
          <Button color="primary">
            Send Proposal
          </Button>
        </div> 
        

        <Card className="w-full mx-auto p-4 shadow-md">
          <div className="relative overflow-hidden">
            <div className="content">{parse(cleanHtml)}</div>
          </div>
        </Card>

      </div>

      
    </div>



  );
}
