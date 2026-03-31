
export default function Header() {
  return (
    <header className="sticky w-full top-0 bg-slate-800 text-white py-4 z-10">
    <div className="flex justify-between items-center px-6">
        <div className="font-bold">MERN Auth</div>
        <div className="flex items-center gap-4">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>
    </header>
  )
}