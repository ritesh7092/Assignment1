"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaUserAlt,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (section) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 130"
          fill="currentColor"
          className="your-logo-class"
          width="75"
          height="75"
        >
          <path
            d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z"
            fill="currentColor"
          ></path>
        </svg>

        {/* Main Menu for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Desktop Links */}
          <Link
            href="/buy"
            className="hover:text-gray-500 transition flex items-center"
          >
            Buy <FaChevronDown className="ml-1" />
          </Link>

          <div className="relative group">
            <button className="hover:text-black hover:bg-white hover:rounded-full transition flex items-center ">
              Refinance <FaChevronDown className="ml-1" />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 py-2 w-48 rounded-md">
              <Link
                href="/apply-now"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Apply Now
              </Link>
              <Link
                href="/refinance-rates"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Refinance rates
              </Link>
              <Link
                href="/cashout-calculator"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Cash-out refinance calculator
              </Link>
              <Link
                href="/learning-center"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Learning Center
              </Link>
            </div>
          </div>

          {/* Other Links */}
          <Link
            href="/heloc"
            className="hover:text-gray-500 transition flex items-center"
          >
            HELOC <FaChevronDown className="ml-1" />
          </Link>
          <Link
            href="/rates"
            className="hover:text-gray-500 transition flex items-center"
          >
            Rates <FaChevronDown className="ml-1" />
          </Link>
          <Link
            href="/better-plus"
            className="hover:text-gray-500 transition flex "
          >
            Better+ <FaChevronDown className="ml-1" />
          </Link>

          {/* Call and Sign In */}
          <a
            href="tel:415-523-8837"
            className="flex items-center border border-white rounded-full p-2 hover:bg-white hover:text-black transition"
          >
            <FaPhoneAlt className="mr-2" />
            Call us anytime
          </a>
          {/* <Link
            href="/signin"
            className="flex items-center text-white bg-transparent rounded-full hover:border-green-500 border-2 px-4 py-2 rounded transition"
          >
            <FaUserAlt className="mr-2" />
            Sign In
          </Link> */}

          {/* Get Started */}
          <Link
            href="/get-started"
            className="text-black bg-green-500 hover:bg-green-900 rounded-full hover:text-white px-4 py-2 transition"
          >
            Continue
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black p-4 space-y-4">
          <Link
            href="/buy"
            className="block hover:bg-gray-100 py-2 px-4 rounded flex items-center"
            onClick={closeMenu}
          >
            Buy <FaChevronDown className="ml-auto" />
          </Link>

          <div className="block">
            <button
              className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100 flex items-center"
              onClick={() => toggleDropdown("buy")}
            >
              Buy <FaChevronDown className="ml-auto" />
            </button>
            {isDropdownOpen["buy"] && (
              <div className="ml-4 space-y-2">
                <Link
                  href="/apply-now"
                  className="block hover:bg-gray-100 py-2 px-4 rounded"
                  onClick={closeMenu}
                >
                  Apply Now
                </Link>
                <Link
                  href="/purchase-rates"
                  className="block hover:bg-gray-100 py-2 px-4 rounded"
                  onClick={closeMenu}
                >
                  Purchase Rates
                </Link>
                <Link
                  href="/cashout-calculator"
                  className="block hover:bg-gray-100 py-2 px-4 rounded"
                  onClick={closeMenu}
                >
                  Cash-out Calculator
                </Link>
                <Link
                  href="/learning-center"
                  className="block hover:bg-gray-100 py-2 px-4 rounded"
                  onClick={closeMenu}
                >
                  Learning Center
                </Link>
              </div>
            )}
          </div>

          <div className="block">
            <button
              className="block w-full text-left py-2 px-4 rounded hover:bg-gray-100 flex items-center"
              onClick={() => toggleDropdown("refinance")}
            >
              Refinance <FaChevronDown className="ml-auto" />
            </button>
            {isDropdownOpen["refinance"] && (
              <div className="ml-4 space-y-2">
                <Link
                  href="/apply-now"
                  className="block hover:bg-gray-100 py-2 px-4 rounded"
                  onClick={closeMenu}
                >
                  Apply Now
                </Link>
                <Link
                  href="/refinance-rates"
                  className="block hover:bg-gray-100 py-2 px-4 rounded"
                  onClick={closeMenu}
                >
                  Refinance Rates
                </Link>
                <Link
                  href="/cashout-calculator"
                  className="block hover:bg-gray-100 py-2 px-4 rounded"
                  onClick={closeMenu}
                >
                  Cash-out Calculator
                </Link>
                <Link
                  href="/learning-center"
                  className="block hover:bg-gray-100 py-2 px-4 rounded"
                  onClick={closeMenu}
                >
                  Learning Center
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/heloc"
            className="block hover:bg-gray-100 py-2 px-4 rounded flex items-center"
            onClick={closeMenu}
          >
            HELOC <FaChevronDown className="ml-auto" />
          </Link>
          <Link
            href="/rates"
            className="block hover:bg-gray-100 py-2 px-4 rounded flex items-center"
            onClick={closeMenu}
          >
            Rates <FaChevronDown className="ml-auto" />
          </Link>
          <Link
            href="/better-plus"
            className="block hover:bg-gray-100 py-2 px-4 rounded flex items-center"
            onClick={closeMenu}
          >
            Better+ <FaChevronDown className="ml-auto" />
          </Link>

          {/* Call and Sign In */}
          <a
            href="tel:415-523-8837"
            className="block hover:bg-gray-100 py-2 px-4 rounded flex items-center"
          >
            <FaPhoneAlt className="mr-2" />
            Call us anytime
          </a>
          <Link
            href="/signin"
            className="block hover:bg-gray-100 py-2 px-4 rounded flex items-center"
            onClick={closeMenu}
          >
            <FaUserAlt className="mr-2" />
            Sign In
          </Link>

          {/* Get Started */}
          <Link
            href="/get-started"
            className="block text-center rounded-full text-white bg-green-500 hover:bg-green-900 hover:text-white py-2  transition"
            onClick={closeMenu}
          >
            Continue
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Phone, ChevronDown, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState({});

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleDropdown = (section) => {
//     setIsDropdownOpen((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
//       isScrolled ? "bg-white" : "bg-[#004535]"
//     }`}>
//       <div className="max-w-[1440px] mx-auto px-6 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-8">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 500 130"
//           fill="currentColor"
//           className="your-logo-class"
//           width="100"
//           height="100"
//         >
//           <path
//             d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z"
//             fill="currentColor"
//           ></path>
//         </svg>

//           {/* Desktop Navigation Links */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <button className={`group relative flex items-center ${isScrolled ? 'text-black' : 'text-white'}`}>
//               Buy
//               <ChevronDown className="ml-1 w-4 h-4" />
//               <div className="hidden group-hover:block absolute top-full left-0 bg-white text-black shadow-lg mt-2 py-2 w-48 rounded-md">
//                 <a href="/apply-now" className="block px-4 py-2 hover:bg-gray-100">Apply Now</a>
//                 <a href="/purchase-rates" className="block px-4 py-2 hover:bg-gray-100">Purchase Rates</a>
//                 <a href="/cash-out" className="block px-4 py-2 hover:bg-gray-100">Cash-out Calculator</a>
//                 <a href="/learning" className="block px-4 py-2 hover:bg-gray-100">Learning Center</a>
//               </div>
//             </button>

//             <button className={`group relative flex items-center ${isScrolled ? 'text-black' : 'text-white'}`}>
//               Refinance
//               <ChevronDown className="ml-1 w-4 h-4" />
//               <div className="hidden group-hover:block absolute top-full left-0 bg-white text-black shadow-lg mt-2 py-2 w-48 rounded-md">
//                 <a href="/refinance/apply" className="block px-4 py-2 hover:bg-gray-100">Apply Now</a>
//                 <a href="/refinance/rates" className="block px-4 py-2 hover:bg-gray-100">Refinance Rates</a>
//                 <a href="/refinance/calculator" className="block px-4 py-2 hover:bg-gray-100">Cash-out Calculator</a>
//                 <a href="/refinance/learning" className="block px-4 py-2 hover:bg-gray-100">Learning Center</a>
//               </div>
//             </button>

//             <button className={`flex items-center ${isScrolled ? 'text-black' : 'text-white'}`}>
//               HELOC
//               <ChevronDown className="ml-1 w-4 h-4" />
//             </button>

//             <button className={`flex items-center ${isScrolled ? 'text-black' : 'text-white'}`}>
//               Rates
//               <ChevronDown className="ml-1 w-4 h-4" />
//             </button>

//             <button className={`flex items-center ${isScrolled ? 'text-black' : 'text-white'}`}>
//               Better+
//               <ChevronDown className="ml-1 w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Right Side Menu */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <button className={`flex items-center border rounded-full px-4 py-2
//             ${isScrolled
//               ? 'border-[#004535] text-[#004535] hover:bg-[#004535] hover:text-white'
//               : 'border-white text-white hover:bg-white hover:text-[#004535]'
//             } transition-colors duration-200`}>
//             <Phone className="w-4 h-4 mr-2" />
//             Call us anytime
//           </button>

//           <button className={`${isScrolled ? 'text-black' : 'text-white'}`}>
//             Sign in
//           </button>

//           <button className="bg-[#00CE7C] text-black hover:bg-[#00b36e] hover:text-white rounded-full px-6 py-2 transition-colors duration-200">
//             Continue
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className={`lg:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
//           onClick={toggleMenu}
//         >
//           {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-white p-4">
//           <div className="space-y-4">
//             <div>
//               <button
//                 className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-100 rounded"
//                 onClick={() => toggleDropdown('buy')}
//               >
//                 Buy
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {isDropdownOpen.buy && (
//                 <div className="pl-8 mt-2 space-y-2">
//                   <a href="/apply-now" className="block px-4 py-2 hover:bg-gray-100">Apply Now</a>
//                   <a href="/purchase-rates" className="block px-4 py-2 hover:bg-gray-100">Purchase Rates</a>
//                   <a href="/cash-out" className="block px-4 py-2 hover:bg-gray-100">Cash-out Calculator</a>
//                   <a href="/learning" className="block px-4 py-2 hover:bg-gray-100">Learning Center</a>
//                 </div>
//               )}
//             </div>

//             <div>
//               <button
//                 className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-100 rounded"
//                 onClick={() => toggleDropdown('refinance')}
//               >
//                 Refinance
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {isDropdownOpen.refinance && (
//                 <div className="pl-8 mt-2 space-y-2">
//                   <a href="/refinance/apply" className="block px-4 py-2 hover:bg-gray-100">Apply Now</a>
//                   <a href="/refinance/rates" className="block px-4 py-2 hover:bg-gray-100">Refinance Rates</a>
//                   <a href="/refinance/calculator" className="block px-4 py-2 hover:bg-gray-100">Cash-out Calculator</a>
//                   <a href="/refinance/learning" className="block px-4 py-2 hover:bg-gray-100">Learning Center</a>
//                 </div>
//               )}
//             </div>

//             <button className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-100 rounded">
//               HELOC
//               <ChevronDown className="w-4 h-4" />
//             </button>

//             <button className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-100 rounded">
//               Rates
//               <ChevronDown className="w-4 h-4" />
//             </button>

//             <button className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-gray-100 rounded">
//               Better+
//               <ChevronDown className="w-4 h-4" />
//             </button>

//             <button className="w-full text-left px-4 py-2 flex items-center hover:bg-gray-100 rounded">
//               <Phone className="w-4 h-4 mr-2" />
//               Call us anytime
//             </button>

//             <button className="w-full text-left px-4 py-2 flex items-center hover:bg-gray-100 rounded">
//               Sign in
//             </button>

//             <button className="w-full bg-[#00CE7C] text-black hover:bg-[#00b36e] hover:text-white rounded-full py-2 transition-colors duration-200">
//               Continue
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
