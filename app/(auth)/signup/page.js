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
import { Mail, Eye, EyeOff, User } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signup, forgotPassword, error, isLoading } = useAuthStore();

  const calculatePasswordStrength = (pass) => {
    let strength = 0;
    if (pass.length > 6) strength += 20;
    if (pass.match(/[a-z]+/)) strength += 20;
    if (pass.match(/[A-Z]+/)) strength += 20;
    if (pass.match(/[0-9]+/)) strength += 20;
    if (pass.match(/[$@#&!]+/)) strength += 20;
    return strength;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(calculatePasswordStrength(newPassword));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(email, password, username);
      toast.success("Sign up successful!");
      router.push("/verify-email");
    } catch (error) {
      toast.error("Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-gray-600 to-black text-white p-4 text-center lg:hidden">
        <h2 className="text-xl font-bold">Welcome to Our PodA</h2>
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
              <h1 className="text-3xl font-black">Join PodA today!</h1>
              <p className=" text-gray-800 text-[15px]">
                Create an account to start your journey with the best Nigerian
                podcasts and audiobooks.
              </p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-4">
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
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <Input
                    id="username"
                    type="text"
                    placeholder="Choose a username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <User
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
                    onChange={handlePasswordChange}
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
                <Progress
                  value={passwordStrength}
                  className="w-full h-[8px]"
                />
                <div className="flex justify-between text-sm">
                  <span>Password strength:</span>
                  <span>
                    {passwordStrength <= 20
                      ? "Weak"
                      : passwordStrength <= 60
                      ? "Medium"
                      : "Strong"}
                  </span>
                </div>
                {error && (
                  <p className="text-red-500 font-semibold mt-2">{error}</p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?
                <Link href="/signin">
                  <Button variant="link">Log in</Button>
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
