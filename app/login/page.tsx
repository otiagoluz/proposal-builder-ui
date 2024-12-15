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