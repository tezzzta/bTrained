import { useState } from "react";
import { Menu, Home, Search, BookOpen, Mic, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <button 
        className="p-2 m-2 lg:hidden" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-4 
        transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-4">Foro</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
                <Home size={20} /> Inicio
              </Link>
            </li>
            <li>
              <Link to="/search" className="flex items-center gap-2 hover:text-gray-300">
                <Search size={20} /> Buscar
              </Link>
            </li>
            <li>
              <Link to="/tags" className="flex items-center gap-2 hover:text-gray-300">
                <BookOpen size={20} /> Tags
              </Link>
            </li>
            <li>
              <Link to="/podcasts" className="flex items-center gap-2 hover:text-gray-300">
                <Mic size={20} /> Podcasts
              </Link>
            </li>
            <li>
              <Link to="/videos" className="flex items-center gap-2 hover:text-gray-300">
                <Video size={20} /> Videos
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;