import { useState } from "react";
import usericon from "../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <nav className="fixed w-full bg-[#fc8019] py-4 px-4">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <svg
            className="logo-abbr"
            width="39"
            height="31"
            viewBox="0 0 39 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.125 21.125L26.9952 23.2623C27.6771 24.0417 28.8616 24.1206 29.6409 23.4387C29.7036 23.3839 29.7625 23.325 29.8173 23.2623L31.6875 21.125H36.375C35.2848 26.5762 30.4985 30.5 24.9393 30.5H14.0607C8.5015 30.5 3.71523 26.5762 2.625 21.125H25.125Z"
              fill="#FFFFFF"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.375 9.875H2.625C3.71523 4.4238 8.5015 0.5 14.0607 0.5H24.9393C30.4985 0.5 35.2848 4.4238 36.375 9.875Z"
              fill="#FFFFFF"
            ></path>
            <path
              opacity="0.3"
              d="M36.375 13.625H2.625C1.58947 13.625 0.75 14.4645 0.75 15.5C0.75 16.5355 1.58947 17.375 2.625 17.375H36.375C37.4105 17.375 38.25 16.5355 38.25 15.5C38.25 14.4645 37.4105 13.625 36.375 13.625Z"
              fill="#fda65e"
            ></path>
          </svg>
          <h1 className="text-white font-extrabold text-[18px]">BITEBOX</h1>
        </div>

        {/* User Section */}
        <div className="relative">
          <div
            className="bg-[#fc8d30] p-3 rounded-[0.5rem] flex flex-row gap-3 items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={usericon}
              alt="User Icon"
              className="w-[20px] h-[20px] object-cover"
            />
            <p className="text-white font-medium text-[14px]">kamalesh B</p>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-white text-[14px]"
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md ">
              <ul className="py-1">
                {/* <li className="px-3 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer">
                <p className="font-medium text-[12px]">Profile</p>
                </li>
                <li className="px-3 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer">
                <p className="font-medium text-[12px]"> Settings </p>
                </li> */}
                <li
                  className="px-3 py-1 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={logout}
                >
                  <p className="font-medium text-[12px]"> Logout </p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
