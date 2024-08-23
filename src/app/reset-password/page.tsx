// ResetPasswordPage.tsx
"use client"

import { useState } from "react";
import SuccessfullyReset from "./components/SuccessfullyReset";
import ResetPasswordForm from "./components/ResetPasswordForm";
import TrajetonLogoMobile from "../components/TrajetonLogoMobile";

export default function ResetPasswordPage() {
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-sm md:text-md">
      <div className="w-full h-full sm:h-1/6 sm:w-1/6 mb-3 relative mt-5 mb-1">
        <TrajetonLogoMobile />
      </div>

      <div className="flex flex-col mx-4 mb-5 gap-3">
        {passwordSuccess  ? 
          <SuccessfullyReset /> 
          :  
          <ResetPasswordForm setPasswordSuccess={setPasswordSuccess}/>
        }
      </div>
    </div>
  );
}
