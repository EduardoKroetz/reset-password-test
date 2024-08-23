
export default function SuccessfullyReset()
{
  return (
    <div className="bg-gray-200 p-4 md:p-8 text-xs sm:text-base rounded-2xl shadow-lg max-w-lg ">
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
  )
}