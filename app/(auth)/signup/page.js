"use client";
import { useState } from "react";
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
import { CheckCircle2, Mail, Eye, EyeOff, User } from "lucide-react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

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

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate signup process
    setShowVerification(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Simulate password reset process
    setShowResetPassword(true);
  };

  if (showVerification) {
    return <VerificationPage />;
  }

  if (showResetPassword) {
    return <ResetPasswordPage email={resetEmail} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-gray-600 to-black text-white p-4 text-center lg:hidden">
        <h2 className="text-xl font-bold">Welcome to Our PodA</h2>
      </div>
      <div className="flex flex-grow">
        <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-md space-y-2">
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
                  className="w-full h-[10px]"
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
              </div>
              <div className="flex justify-between items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="p-0">
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
                        <Button type="submit">Send Reset Link</Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button type="submit">Sign Up</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 p-10 bg-[#eeeeee]">
          <img
            src="/assets/Design - Dashboard 1.png"
            loading="lazy"
            alt="Image"
            className="object-cover w-full h-full  object-left"
          />
        </div>
      </div>
    </div>
  );
}

function VerificationPage() {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  const [isVerified, setIsVerified] = useState(false);

  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      if (value && index < 4) {
        document.getElementById(`digit-${index + 1}`)?.focus();
      }
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    // Simulate verification process
    setIsVerified(true);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center">Verify Your Email</h2>
        {isVerified ? (
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto text-green-500" size={64} />
            <p className="text-xl">Email verified successfully!</p>
          </div>
        ) : (
          <>
            <p className="text-center text-gray-600">
              We&apos;ve sent a 5-digit code to your email. Please enter it
              below to verify your account.
            </p>
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="flex justify-between">
                {verificationCode.map((digit, index) => (
                  <Input
                    key={index}
                    id={`digit-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="w-12 h-12 text-center text-2xl"
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                ))}
              </div>
              <Button type="submit" className="w-full">
                Verify
              </Button>
            </form>
            <p className="text-center text-sm text-gray-500">
              Didn&apos;t receive the code?{" "}
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

function ResetPasswordPage({ email }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Simulate password reset process
      setIsReset(true);
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center">Reset Password</h2>
        {isReset ? (
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto text-green-500" size={64} />
            <p className="text-xl">Password reset successfully!</p>
            <Button onClick={() => window.location.reload()}>
              Back to Sign In
            </Button>
          </div>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
