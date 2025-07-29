import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const linkClasses =
    "transition-colors duration-500 ease-in-out text-white hover:text-cyan-400";

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80 bg-black/50">
        <div className="container px-4 mx-auto flex items-center justify-between lg:text-sm">
          {/* Logo */}
          <a href="#hero" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight text-white">
              Replayed Media
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex flex-1 justify-center space-x-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClasses}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Contact button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="
                transition-colors duration-300 ease-in-out
                bg-cyan-400 text-white border border-cyan-400
                rounded-md py-2 px-3
                hover:bg-white hover:text-black
              "
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={toggleNavbar} className="lg:hidden text-white p-2">
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileDrawerOpen && (
        <div
          className="
            fixed top-16 left-0 w-full z-40
            bg-neutral-900/80 backdrop-blur-md
            p-8 flex flex-col items-center
            lg:hidden
          "
        >
          <ul className="space-y-6 text-center w-full">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className={`${linkClasses} text-2xl block py-2`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileDrawerOpen(false)}
                className="
                  transition-colors duration-300 ease-in-out
                  bg-cyan-400 text-white border border-cyan-400
                  rounded-md py-2 px-4 inline-block
                  hover:bg-white hover:text-black
                "
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
