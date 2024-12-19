'use client';

import { title } from "@/components/primitives";
import { Card, Divider, Button, Link } from "@nextui-org/react";
import { LoginForm } from "@/components/forms/loginForm";

const API_BASE_URL = process.env.API_BASE_URL;

export default function Login() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <h2 className={title({ size: 'xsm'})}>Sign in to your account</h2>   
        <p className="mt-1 text-center text-sm text-gray-600">
          to continue to <strong>Proposal Builder</strong>
        </p>

        <LoginForm />

        <Divider className="my-4" />

        <div className="space-y-3">
          <Button variant="bordered" fullWidth>
            Continue with Google
          </Button>
          <Button variant="bordered" fullWidth>
            Continue with Github
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Need to create an account?{' '}
          <Link href="/register" color="primary">
            Sign Up
          </Link>
        </p>
      </Card>
    </div>
  );
}


// import { Card, Button } from "@nextui-org/react";

// const ProposalsDashboard = () => {
//   // Exemplo de dados (pode vir de uma API)
//   const proposals = [
//     {
//       id: 1,
//       clientName: "Empresa Alpha",
//       status: "Em andamento",
//       date: "2024-12-16",
//       total: "R$ 25.000",
//     },
//     {
//       id: 2,
//       clientName: "Empresa Beta",
//       status: "Finalizada",
//       date: "2024-12-15",
//       total: "R$ 10.500",
//     },
//     {
//       id: 3,
//       clientName: "Empresa Gama",
//       status: "Pendente",
//       date: "2024-12-14",
//       total: "R$ 8.700",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {proposals.map((proposal) => (
//         <Card key={proposal.id} isPressable isHoverable className="p-4">
//           <div className="mb-4">
//             <h4 className="text-lg font-semibold">{proposal.clientName}</h4>
//             <p className="text-sm text-gray-500">#{proposal.id}</p>
//           </div>
//           <div className="mb-4">
//             <p>Status: {proposal.status}</p>
//             <p>Data: {proposal.date}</p>
//             <p>Total: {proposal.total}</p>
//           </div>
//           <div className="flex justify-end">
//             <Button size="sm" color="primary">
//               Ver Detalhes
//             </Button>
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default ProposalsDashboard;
