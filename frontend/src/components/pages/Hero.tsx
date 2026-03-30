export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center -mt-15">
      <div className="container mx-auto flex flex-col items-center rounded-xl bg-white drop-shadow-2xl w-3/4 max-w-md justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <p className="text-lg mb-4">Please login or register</p>
        <div className="flex flex-col gap-2 *:w-full w-full justify-center">
          <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Login</a>
          <a href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</a>
        </div>
      </div>
    </div>
  )
}