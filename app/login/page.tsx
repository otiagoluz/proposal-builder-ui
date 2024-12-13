'use client';

// pages/login.tsx
import { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Adicione aqui a lógica de autenticação
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="max-w-md p-5">
        <h3 className="text-center text-lg font-semibold mb-4">
          Login
        </h3>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            label="Email"
            description="Enter your email address"
            isClearable
            value={email}
            onValueChange={(value) => setEmail(value)}
            className="mb-4"
          />
          <Input
            type="password"
            label="Password"
            description="Enter your password"
            value={password}
            onValueChange={(value) => setPassword(value)}
            className="mb-5"
          />
          <Button type="submit" color="primary" radius="sm" fullWidth>
            Log In
          </Button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don&apos;t have an account? <a href="/register" className="text-blue-500">Sign up</a>
        </p>
      </Card>
    </div>
  );
}
