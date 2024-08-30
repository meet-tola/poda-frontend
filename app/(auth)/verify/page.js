"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function VerificationPage() {
  const { error, isLoading, verifyEmail } = useAuthStore();
  const [isVerified, setIsVerified] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 5);
    setCode(value);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await verifyEmail(code);
      router.push("/");
      toast.success("Email verified successfully");
    } catch (error) {
      console.log(error);
    }
    setIsVerified(true);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-4 p-8 bg-white rounded-xl shadow-md">
        <div className="w-full flex justify-center">
          <img
            alt="Poda"
            src="/assets/header-logo.svg"
            className="w-[100px] h-[50px] object-contain"
          />
        </div>
        <h2 className="text-3xl font-bold text-center">Verify Your Email</h2>
        {isVerified ? (
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto text-green-500" size={64} />
            <p className="text-xl">Email verified successfully!</p>
          </div>
        ) : (
          <>
            <p className="text-center text-gray-600">
              We've sent a 5-digit code to your email. Please enter it below to
              verify your account.
            </p>
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="flex justify-between">
                <Input
                  id="code"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={5}
                  value={code}
                  onChange={handleChange}
                  placeholder="Enter 5-digit code"
                  className="text-center text-xl"
                />
              </div>
              <Button type="submit" className="w-full">
                Verify
              </Button>
            </form>
            <p className="text-center text-sm text-gray-500">
              Didn't receive the code?{" "}
              <Button variant="link" className="p-0">
                Resend
              </Button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
