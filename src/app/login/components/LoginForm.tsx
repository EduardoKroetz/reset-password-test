import InputPassword from "@/app/components/InputPassword";
import { validateEmail, validatePassword } from "@/app/utils/validateEmail";
import { useState } from "react";

export default function LoginForm({ toggleModal } : { toggleModal: () => void })
{
    // Definindo os estados para armazenar os valores dos campos e mensagens de erro
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  
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
        if (email === 'test@example.com' && password === 'Password123!') {
          alert('Login bem-sucedido!');
        } else {
          alert('Credenciais inválidas');
        }
      }
    };

  return (
    <div className="w-full flex items-center justify-center  p-8">
        <div className="w-full max-w-md lg:p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail <span className="text-red-600">*</span></label>
              <input
                id="email"
                type="text"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="hs-toggle-password" className="block text-sm font-medium text-gray-700">Senha <span className="text-red-600">*</span></label>
              <InputPassword  password={password} passwordError={errors.password} setPassword={setPassword}/>
              {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
              <a href="#" onClick={toggleModal} className="block text-sm text-blue-500 mt-4 hover:underline" style={{width: "max-content"}}>Esqueci minha senha</a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-600 text-white font-semibold  rounded-2xl shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
  )
}