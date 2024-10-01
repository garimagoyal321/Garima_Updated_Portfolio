import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGithub, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed inset-x-0 bg-[#21263d] z-40 shadow-lg -top-1">
      <div className="container flex mx-auto justify-between lg:justify-around items-center text-white px-4 lg:px-8">
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <img src="/assets/img/garima_123.png" width={110} height={5} alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-8">
          <Link to={"https://storage.rxresu.me/clrabrig904wegsy36auu5siu/resumes/Web developer.pdf"} target="_blank" className="p-2 m-2 cursor-pointer font-medium hover:text-blue-500 rounded-md">
            Resume
          </Link>
         
          <Link to={"https://github.com/garimagoyal321"} target="_blank" className="p-2 m-2 cursor-pointer font-medium flex items-center justify-center rounded-md hover:text-blue-500">
            <FaGithub /> <span className="mx-2">GitHub</span>
          </Link>
        </div>
        <div className="lg:hidden flex items-center sm:mr-8">
          <div className="p-2 cursor-pointer">
            <Link to={"https://github.com/garimagoyal321"} target="_blank">
              <FaGithub />
            </Link>
          </div>
          <div className="p-2 cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-[#21263d] text-white shadow-lg">
          <ul className="flex flex-col items-center">
            <li className="p-2 m-2 cursor-pointer font-medium hover:text-blue-500 rounded-md">
              <Link to={"https://storage.rxresu.me/clrabrig904wegsy36auu5siu/resumes/Web developer.pdf"} onClick={toggleMenu}>
                Resume
              </Link>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
