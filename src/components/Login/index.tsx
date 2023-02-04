import { InputSubVariant } from "../InputSubVariant"

export const Login = () => {
  return (
    <div className='w-screen h-full'>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900">Login</h1>
              <p className="mt-2 text-gray-500">Faça Login para entrar no sistema</p>
            </div>
            <div className="mt-5">
              <form>
                <InputSubVariant indexAcessible={0} className="caret-green-500" text="Email" type="email" id="email" aria-describedby="Insirar seu email" />
                <input type="password" id="password" className="hidden" />
                <InputSubVariant indexAcessible={1} className="caret-green-500" text="Senha" type="password" id="password" aria-describedby="Insirar sua senha" />
                <div className="my-6">
                  <button
                  type="submit"
                  className="w-full rounded-md bg-green-500 px-3 py-4 text-white text-base transition-all hover:scale-105 hover:bg-green-700 duration-200 focus:bg-green-600 focus:outline-none focus:scale-95">
                    Entrar
                  </button>
                </div>
                <p className="text-center text-sm text-gray-500">Você não tem uma conta ainda? <a href="#!" className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Registrar</a>.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
