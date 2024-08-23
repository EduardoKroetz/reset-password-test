import { Dispatch, SetStateAction, useState } from "react";

export default function InputPassword({
  setPassword,
  password,
  passwordError = undefined,
  placeholder = "Digite sua senha",
}: {
  setPassword: Dispatch<SetStateAction<string>>;
  password: string;
  passwordError?: string;
  placeholder?: string;
}) 
{
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordIsVisible(p => !p)

  return (
    <div className="max-w-sm"> 
      <div className="relative"> 
      <input 
        id="hs-toggle-password" 
        type={passwordIsVisible ? "text" : "password"} 
        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm ${passwordError ? 'border-red-500' : 'border-gray-300'}`}
        placeholder={placeholder} 
        value={password}
        onChange={(e) => setPassword(e.target.value)} /> 

      <button 
        type="button" 
        data-hs-toggle-password='{ "target": "#hs-toggle-password" }' 
        className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none"
        onClick={togglePasswordVisibility}> 
        {passwordIsVisible ? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
        }
      </button> 
      </div> 
    </div>
  )
}