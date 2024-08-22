// pages/login.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Login = () => {
  // Definindo os estados para armazenar os valores dos campos e mensagens de erro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // Função de validação dos campos
  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    // Validação do e-mail
    if (!email) {
      newErrors.email = 'O e-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Formato de e-mail inválido';
    }

    // Validação da senha
    if (!password) {
      newErrors.password = 'A senha é obrigatória';
    } else if (password.length < 8 || password.length > 32) {
      newErrors.password = 'A senha deve ter entre 8 e 32 caracteres';
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = 'A senha deve conter pelo menos uma letra maiúscula';
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = 'A senha deve conter pelo menos uma letra minúscula';
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = 'A senha deve conter pelo menos um número';
    } else if (!/[!@#$%^&*]/.test(password)) {
      newErrors.password = 'A senha deve conter pelo menos um caractere especial';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função de envio do formulário
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      // Lógica de autenticação aqui
      console.log({ email, password });
      if (email === 'test@example.com' && password === 'Password123!') {
        alert('Login bem-sucedido!');
      } else {
        alert('Credenciais inválidas');
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Container da imagem para telas pequenas */}
      <div className="lg:hidden w-full h-full relative">
        <div className="absolute inset-0">
          <Image
              src="/trajeton-logo-mobile.png" 
              alt="Logo Trajeton Magazine"
              layout="fill"
              objectFit="contain"
            />
        </div>
      </div>

      {/* Container do formulário */}
      <div className="w-full lg:w-1/2 flex items-center justify-center  p-8">
        <div className="w-full max-w-md lg:p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
              <a href="#" className="block text-sm text-blue-500 mt-4 hover:underline">Esqueci minha senha</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>

      {/* Container da imagem para telas grandes */}
      <div className="hidden lg:block w-1/2 w-full h-full relative" style={{backgroundColor: "rgb(240, 240, 230)"}}>
        <div className="absolute inset-0">
          <Image
              src="/trajeton-logo-desktop.png" 
              alt="Logo Trajeton Magazine"
              layout="fill"
              objectFit="contain"
            />
        </div>
      </div>
    </div>
  );
};

export default Login;
