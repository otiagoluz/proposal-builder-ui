'use client'

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  ChipProps,
} from "@nextui-org/react";
import { DeleteIcon, EditIcon, EyeIcon } from "@/components/icons";
import { useProposals } from "@/hooks/useProposals";
import Avatar from "@/components/avatar";

export const columns = [
  { name: "Client Name", uid: "clientName" },
  { name: "Project Name", uid: "projectName" },
  { name: "Status", uid: "status" },
  { name: "Actions", uid: "actions" },
];

// Mapeamento de cores de status
const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "warning",
  declined: "danger",
};


export default function ProposalsTable() {
  const { proposals, loading, error } = useProposals();

  const renderCell = React.useCallback(
    (proposal: any, columnKey: React.Key) => {
      const cellValue = proposal[columnKey as keyof typeof proposal];
      switch (columnKey) {
        case "clientName":
          return (
            <Avatar 
              id={proposal.id} 
              name={cellValue}
              description={cellValue}
            />
          );
        case "projectName":
          return <p className="text-sm capitalize">{cellValue}</p>;
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[proposal.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center justify-center gap-2">
              <Tooltip content="View Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Edit Proposal">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete Proposal">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  if (loading) return <p>Loading proposals...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Table aria-label="Proposals table">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={proposals}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
