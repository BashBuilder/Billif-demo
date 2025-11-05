"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginPageProps {
  onLogin: (email: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      setIsLoading(false);
      return;
    }

    // Simulate auth check
    setTimeout(() => {
      onLogin(email);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-secondary/10 p-4">
      <div className="w-full max-w-md">
        <Card className="border-border/50 shadow-2xl">
          <CardHeader className="space-y-2 pb-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  A
                </span>
              </div>
              <div>
                <CardTitle className="text-2xl">Admin Panel</CardTitle>
                <CardDescription>Content Management System</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:bg-secondary"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:bg-secondary"
                  disabled={isLoading}
                />
              </div>

              {error && (
                <div className="rounded bg-destructive/10 p-2 text-sm text-destructive">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* <div className="mt-6 border-t border-border/50 pt-6">
              <p className="text-center text-xs text-muted-foreground">
                Bill-if
              </p>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
