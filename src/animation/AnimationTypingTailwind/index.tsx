export const AnimationTypingTailwind = () => {
  return (
  <div className="min-w-full min-h-screen">
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative w-full  sm:mx-auto sm:max-w-lg sm:rounded-lg text-start sm:px-10">
        <div className="text-gray-900 text-xl font-mono font-semibold border-r-2 border-black w-[31ch] whitespace-nowrap overflow-hidden animate-typing">
          <p>Estou digitando nesse momento!</p>
        </div>
      </div>
    </div>
  </div>
  )
}
