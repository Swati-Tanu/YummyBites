import Logo from "../../assets/images/logo.jpg";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => {
    return store?.cart?.items;
  });

  return (
    <div className="flex justify-between bg-sky-100 shadow-lg mb-2 sm:bg-gray-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-32" src={Logo} alt="logo"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart - ({cartItems.length} Items)</Link>
          </li>
          <button
            className="login px-4"
            onClick={() => {
              if (btnName === "Login") {
                setBtnName("Logout");
              } else {
                setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
          {btnName === "Logout" && (
            <li className="px-4 font-semibold text-green-700">
              {loggedInUser}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
