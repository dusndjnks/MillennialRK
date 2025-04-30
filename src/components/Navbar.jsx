import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  
    const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ];


  return (
    <div className="bg-[#252323] text-white z-50">
      <nav className="flex justify-between items-center py-6 px-6 md:px-20">
        <NavLink to="/" className="text-red-600 font-bold text-2xl md:text-3xl tracking-tighter font-[sans-serif]">
          MILLENNIAL
          <span className="bg-red-600 text-[#1c1b1b] px-1 ml-1">RK</span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg md:text-2xl font-thin">
          {navItems.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-red-500 ${
                    isActive ? 'text-red-500 font-medium' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-lg font-thin">
          {navItems.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition duration-300 hover:text-red-500 ${
                    isActive ? 'text-red-500 font-medium' : ''
                  }`
                }
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
