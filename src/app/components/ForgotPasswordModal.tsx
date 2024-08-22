import { useState } from "react";
import { validateEmail as validateEmailFunction } from "../common/validateEmail"; // Importe a função de validação

interface ForgotPasswordProps {
  toggleModal: () => void;
}

export default function ForgotPasswordModal({ toggleModal }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSend, setEmailSend] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Valida o e-mail
    const error = validateEmailFunction(email);
    
    if (error.length === 0) {
      
      alert("Instruções enviadas para o e-mail informado.");
      setEmailSend(true);
    } else {
      // Caso o e-mail seja inválido, exibe a mensagem de erro
      setEmailError(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={toggleModal}></div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">Recuperar Senha</h2>
        {emailSend ? (
          <div>
            <p>Enviamos um link de recuperação de para o seu e-mail cadastrado. Por favor, verifique a sua caixa de entrada e a pasta de spam, se necessário.</p>
            <div className="flex justify-center mt-6">
              <button type="button"
                onClick={toggleModal}
                className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Entendido
              </button>
            </div>
          </div>
        ) : (
          <>
            <p className="mb-4">Para recuperar sua senha, digite o e-mail cadastrado.</p>
            <div className="space-y-3">
              <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                type="text"
                id="forgot-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${emailError ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm mb-4`}
                placeholder="Seu e-mail"
              />
              {emailError.length > 0 && <p className="mt-2 text-sm text-red-500">{emailError}</p>}
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Enviar
              </button>
            </div>
          </>
        )}
      
      </form>
    </div>
  );
}
