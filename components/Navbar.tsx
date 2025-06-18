export default function Navbar() {
    return (
      <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    );
  }
  