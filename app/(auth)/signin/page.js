"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Eye, EyeOff } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(null);

  const { login, forgotPassword, error, isLoading } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Logged in successfully!");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.log(error);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(resetEmail);
      setResetSuccess(
        "If there is an account with this email, please check your inbox to reset your password."
      );
    } catch (error) {
      setResetSuccess(
        "There was an error processing your request. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-gray-600 to-black text-white p-4 text-center lg:hidden">
        <h2 className="text-xl font-bold">Welcome back to PodA</h2>
      </div>
      <div className="flex flex-grow">
        <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-md space-y-4">
            <div className="w-full">
              <img
                alt="Poda"
                src="/assets/header-logo.svg"
                className="w-[100px] h-[50px] object-contain"
              />
              <h1 className="text-3xl font-black">Log in to PodA</h1>
              <p className=" text-gray-800 text-[15px]">
                Access the best Nigerian podcasts and audiobooks.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Mail
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 font-semibold mt-2">{error}</p>
                )}
              </div>

              <div className="flex justify-between">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="p-0 text-left text-primary">
                      Forgot password?
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Reset Password</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleResetPassword}>
                      <div className="space-y-4">
                        <p>Please enter your email to reset your password.</p>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                          required
                        />
                        <Button type="submit">Send reset link</Button>
                        {resetSuccess && (
                          <p className="text-green-600 mt-2">{resetSuccess}</p>
                        )}
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?
                <Link href="/signup">
                  <Button variant="link">Sign up</Button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 p-10 bg-[#eeeeee]">
          <img
            src="/assets/Design - Dashboard 1.png"
            loading="lazy"
            alt="Image"
            className="object-cover w-full h-full object-left"
          />
        </div>
      </div>
    </div>
  );
}
