// pages/login.tsx

"use client";

import React, { useState } from 'react';
import ForgotPasswordModal from './components/ForgotPasswordModal';
import TrajetonLogo from '../components/TrajetonLogo';
import LoginForm from './components/LoginForm';
import TrajetonLogoMobile from '../components/TrajetonLogoMobile';

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex flex-col lg:flex-row h-screen text-sm">
      {/* Container da imagem para telas pequenas */}
      <div className="lg:hidden w-full h-full relative">
        <TrajetonLogoMobile />
      </div>

      <LoginForm toggleModal={toggleModal}/>

      {/* Container da imagem para telas grandes */}
      <div className="hidden lg:block w-full h-full relative"  style={{backgroundColor: " #fcececf8"}} >
        <div className="absolute m-auto inset-0 w-4/6">
          <TrajetonLogo />
        </div>
      </div>

      {isModalOpen && <ForgotPasswordModal toggleModal={toggleModal}/>}
    </div>

  );
};

export default Login;
