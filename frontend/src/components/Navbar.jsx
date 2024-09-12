import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { textlogo, treelogo } from "../assets";
import { useAuth0 } from "@auth0/auth0-react";
import './drop.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  
  // Use refs for handling timeouts
  const dropdownTimeout = useRef(null);
  const dropdownDelay = 2000; // Delay before hiding dropdown

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts or location changes
  }, [location.pathname]);

  // Function to close mobile menu and dropdown
  const closeMobileMenu = () => {
    setToggle(false);
    setDropdown(false);
  };

  // Handle dropdown display with timeout
  const handleDropdownToggle = (show) => {
    clearTimeout(dropdownTimeout.current);
    if (show) {
      setDropdown(true);
    } else {
      dropdownTimeout.current = setTimeout(() => {
        setDropdown(false);
      }, dropdownDelay); // Delay before hiding the dropdown
    }
  };

  // Handle mouse enter and leave for dropdown
  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      clearTimeout(dropdownTimeout.current);
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      dropdownTimeout.current = setTimeout(() => {
        setDropdown(false);
      }, 300); // Short delay before hiding
    }
  };

  useEffect(() => {
    // Clean up timeouts on component unmount
    return () => {
      clearTimeout(dropdownTimeout.current);
    };
  }, []);

  const isLinkActive = (path) => {
    return path === "/"
      ? location.pathname === path
      : location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`flex flex-auto top-0 justify-between items-center px-5 py-2 z-10 shadow-xl md:w-full w-screen bg-white`}>
        <div className='text-[30px] flex md:justify-start justify-between'>
          <Link to='/'>
            <div className='text-[30px] flex items-center'>
              <img src={treelogo} alt='treelogo' className='h-[60px] mx-4 flex-1 ' />
              <img src={textlogo} alt='textlogo' className='md:block h-[40px] flex-1' />
            </div>
          </Link>
        </div>
        <div className="bg-white opacity-80">
          <div
            onClick={() => setToggle(!toggle)}
            className="text-5xl right-8 cursor-pointer md:hidden"
          >
            {toggle ? <IoClose /> : <IoMenu />}
          </div>
          <ul className={`md:flex md:flex-1 md:justify-end md:items-center text-[16px] left-0 md:w-auto w-full md:z-auto absolute md:static z-[10] md:pl-0 font-semibold ${toggle ? 'top-50 text-white bg-black text-center text-[22px] pb-9 h-screen pt-5 ' : 'top-[-490px] '} `}>
            <li className={`mx-4 hover:text-[#65B741] hover:text-[17px] transition-all duration-300 ${isLinkActive('/') ? 'text-[#65B741]' : ''}`}>
              <Link to='/' className='' onClick={closeMobileMenu}>HOME</Link>
            </li>
            <li
              className={`mx-4 hover:text-[#65B741] hover:text-[17px] transition-all duration-300 ${
                isLinkActive("/about") ? "text-[#65B741]" : ""
              }`}
            >
              <Link to="/about" className="" onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
            <li
              className={`mx-4 hover:text-[#65B741] hover:text-[17px] transition-all duration-500 ${
                isLinkActive("/offerings") ? "text-[#65B741]" : ""
              }`}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="/offerings" onClick={closeMobileMenu}>OFFERINGS</Link>
            </li>
            <li
              className={`mx-4 hover:text-[#65B741] hover:text-[17px] transition-all duration-300 ${
                isLinkActive("/events") ? "text-[#65B741]" : ""
              }`}
            >
              <Link to="/events" className="" onClick={closeMobileMenu}>EVENTS</Link>
            </li>
            <li className="relative mx-4">
              <span
                className="cursor-pointer flex items-center"
                onMouseEnter={() => handleDropdownToggle(true)}
                onMouseLeave={() => handleDropdownToggle(false)}
              >
                PRAISE & ACCOLADES 
                {dropdown ? <IoMdArrowDropup className="inline-block ml-2" /> : <IoMdArrowDropdown className="inline-block ml-2" />}
              </span>
              {dropdown && (
                <ul className="absolute bg-white border border-gray-200 shadow-lg mt-2 rounded-lg w-48 z-20">
                  <li className="hover:bg-gray-100">
                    <Link to="/rewards-recognition" className="block px-4 py-2 text-gray-700" onClick={closeMobileMenu}>Rewards & Recognitions</Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link to="/testimaonials" className="block px-4 py-2 text-gray-700" onClick={closeMobileMenu}>Testimonials</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`mx-4 hover:text-[#65B741] hover:text-[17px] transition-all duration-300 ${
                isLinkActive("/contact") ? "text-[#65B741]" : ""
              }`}
            >
              <Link to="/contact" className="" onClick={closeMobileMenu}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:flex hidden">
          <ul className="sm:flex hidden list-none justify-end items-center text-[23px] mx-4">
            {isAuthenticated && (
              <li className="text-[12px] mr-3 font-thin">
                <p>
                  Welcome <br /> {user.name} !
                </p>
              </li>
            )}
            {isAuthenticated ? (
              <li>
                <button
                  className="bg-[#65B741] text-white font-semibold py-2 px-4 border border-transparent rounded mr-5 text-[15px] transition-transform transform hover:translate-y-1"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="bg-[#65B741] text-white font-semibold py-2 px-4 border border-transparent rounded mr-5 text-[15px] transition-transform transform hover:translate-y-1"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
