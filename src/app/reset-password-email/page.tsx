// ResetPasswordPage.tsx
"use client"

import Header from "./components/Header";

export default function ResetPasswordPage() {


  return (
    <div className="flex flex-col text-gray-600">
      <Header />
      <div className="flex-1 m-auto">
        <div className="flex flex-col gap-7 border rounded-lg border-black p-4 mx-4 my-10 break-words">
          <div>Olá,</div>
          <div>Redefina sua senha de acesso clicando no link abaixo.</div>
          <div className="overflow-x-auto">
            <div className="text-sm text-blue-600 hover:cursor-pointer break-words" style={{overflowWrap: "break-word", wordBreak: "break-all"}} onClick={() => window.location.href = "/reset-password"}>https/trajetonbdchabvuyhbvayrbvyubrvyhv.senha</div>
            <div className="text-red-600 mt-3">O link expira em 24 horas</div>
          </div>
        </div>
      </div>
    </div>

  );
}
