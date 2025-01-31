import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);

      // Change background color on sticky header
      setIsSticky(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Close dropdown when clicking outside of it
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-menu") && !e.target.closest(".md:hidden")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        isSticky ? "bg-white text-black shadow" : "bg-[#005BC4] text-white"
      }`}
    >
      <div className="navbar max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1">
          {/* <a className="text-2xl font-bold">AnyTech</a> */}
          {
            isSticky ? (
              <img src="https://cdn.sanity.io/images/6jywt20u/production/70e2228631883a893695c64b637b99dc8661871c-171x28.svg?w=171&auto=format" alt="AnyTech Logo" className="h-8" />
            ) : (
              <img src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format" alt="AnyTech Logo" className="h-8" />)
          }
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex gap-4 items-center">
          <a href="#" className="hover:text-gray-300">
            Solutions
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            About Us
          </a>
          <button
            className={`hidden lg:block btn ${
              isSticky ? "btn-warning" : "btn-outline border border-white text-white"
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Drawer Icon */}
        <button
          className={`md:hidden text-2xl ${isSticky ? "text-gray-700": "text-white"} `}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown open/close
        >
          <FiMenu />
        </button>
      </div>

      {/* Dropdown Menu for Mobile/Sticky */}
      {isDropdownOpen && ( // Only render dropdown if it's open
        <div
          className={`dropdown-menu ${isSticky ? "bg-[#005BC4]" : "bg-[#005BC4]"} fixed top-16 left-0 w-full shadow-lg z-40`}
        >
          <nav className="flex flex-col p-4">
            <a href="#" className="text-white py-2 hover:font-bold">
              Solutions
            </a>
            <a href="#" className="text-white py-2 hover:font-bold">
              Services
            </a>
            <a href="#" className="text-white py-2 hover:font-bold">
              About Us
            </a>
            <button
              className={`btn mt-4 ${
                isSticky ? "btn-warning" : "btn-outline border text-[#005BC4]"
              }`}
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
