// ResetPasswordPage.tsx
"use client"

import Image from "next/image";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("As senhas não correspondem.");
      return;
    }

    setPasswordError("");
    setPasswordSuccess(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full h-full sm:h-1/6 sm:w-1/6 mb-3 relative mt-5 mb-1">
        <Image 
          src={"/trajeton-logo-mobile.png"}
          alt="trajeton-logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="p-4 md:p-8 text-xs sm:text-base rounded-2xl shadow-lg max-w-lg mx-4 mb-5 bg-gray-200">
        {passwordSuccess ? (
          <div>
            <p className="text-green-600 mb-4">Senha redefinida com sucesso!</p>
            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                onClick={() => window.location.href = "/login"} // Redirecionar para a página de login
              >
                Voltar ao Login
              </button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">Redefinir Senha</h2>
            <p className="mb-4 text-center">Redefina sua senha com no mínimo 6 caracteres</p>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha <span className="text-red-600">*</span></label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm mb-4`}
                    placeholder="Digite uma senha"
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirme sua senha <span className="text-red-600">*</span></label>
                  <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${passwordError ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm mb-4`}
                    placeholder="Repita sua senha"
                  />
                </div>
                {passwordError && <p className="mt-2 text-sm text-red-500">{passwordError}</p>}
                <div className="mb-4">
                  <p className="text-sm">Crie uma senha segura</p>
                  <ul className="list-disc list-inside mt-3">
                    <li>Use letras maiúsculas e minúsculas, símbolos e números</li>
                    <li>Não use informações pessoais como datas de aniversário</li>
                    <li>Não use uma senha igual a anterior</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Redefinir Senha
                  </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
