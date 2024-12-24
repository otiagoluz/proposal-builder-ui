'use client';

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Input, Button, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);

    if (success) {
      router.push("/proposals");
    }
  };

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <Input
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isRequired
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isRequired
      />
      <div className="flex items-center justify-between text-sm text-gray-600">
        <Link href="/forgot-password">Forgot password?</Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit" fullWidth color="primary">
        Sign In
      </Button>
    </form>
  );
};
