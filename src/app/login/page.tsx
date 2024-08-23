// pages/login.tsx

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { validateEmail, validatePassword } from '../common/validateEmail';
import ForgotPasswordModal from '../components/ForgotPasswordModal';

const Login = () => {
  // Definindo os estados para armazenar os valores dos campos e mensagens de erro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função de validação dos campos
  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    newErrors.password = validatePassword(password)
    newErrors.email = validateEmail(email);

    setErrors(newErrors);
    return newErrors.email.length === 0 && newErrors.password.length === 0 ? true : false;
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

  const toggleModal = () => setIsModalOpen(!isModalOpen);


  return (
    <div className="flex flex-col lg:flex-row h-screen text-sm">
      {/* Container da imagem para telas pequenas */}
      <div className="lg:hidden w-full h-full relative">
        <Image
            src="/trajeton-logo-mobile.png" 
            alt="Logo Trajeton Magazine"
            fill
            objectFit="contain"
          />
      </div>

      {/* Container do formulário */}
      <div className="w-full flex items-center justify-center  p-8">
        <div className="w-full max-w-md lg:p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-600">*</span></label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha <span className="text-red-600">*</span></label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
              <a href="#" onClick={toggleModal} className="block text-sm text-blue-500 mt-4 hover:underline">Esqueci minha senha</a>
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
      <div className="hidden lg:block w-full h-full relative"  style={{backgroundColor: " #fcececf8"}} >
        <div className="absolute m-auto inset-0 w-4/6">
          <Image
              src="/trajeton-logo-desktop.png" 
              alt="Logo Trajeton Magazine"
              layout="fill"
              objectFit="contain"
            />
        </div>
      </div>
      {isModalOpen && <ForgotPasswordModal toggleModal={toggleModal}/>}
    </div>

  );
};

export default Login;
