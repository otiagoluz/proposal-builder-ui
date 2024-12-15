'use client';

import { useProposals } from "@/hooks/useProposals";
import { Card, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { proposals, loading, error } = useProposals();
  const router = useRouter();

  if (loading) return <p>Loading proposals...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Proposals</h1>
      {proposals.length === 0 ? (
        <p>No proposals found.</p>
      ) : (
        <div className="space-y-4">
          {proposals.map((proposal: any) => (
            <Card key={proposal.id} className="p-4">
              <h2 className="text-lg font-semibold">{proposal.projectName}</h2>
              
              <Button
                onPress={() => router.push(`/dashboard/proposals/${proposal.id}`)}
                color="primary"
              >
                View Proposal
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
