
export default function Header() {
  return (
    <header className="sticky w-full top-0 bg-slate-700 text-white p-4 z-10">
      <div className="container flex justify-between items-center mx-auto">
        <div className="left font-bold">MERN Auth</div>
        <div className=" flex items-center">
          <a href="/login" className="mr-4">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </header>
  )
}