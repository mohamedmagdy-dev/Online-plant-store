// Icons
import mobileMenuIcon from "../assets/icons/mobileMenuIcon.png";
import bagIconLight from "../assets/icons/bagLight.svg";
import bagIconDark from "../assets/icons/bagDark.svg";
import cancelIcon from "../assets/icons/cancel.png";

// imgs
import storeLogoLight from "../assets/imgs/storeLogoLight.svg";
import storeLogoDark from "../assets/imgs/storeLogoDark.svg";

// React Router
import { Link, NavLink } from "react-router";

// React
import { useState } from "react";

// Clsx
import clsx from "clsx";

export default function Header({ itemsInCart = 0 }) {
  const [theme, setTheme] = useState("dark");
  const [isMobileNavClose, setIsMobileNavClose] = useState(true);
  const activeNavLink = ({ isActive }) => {
    return clsx(
      isActive
        ? "bg-linear-to-r from-[#2AF598] to-[#009EFD] bg-clip-text text-transparent font-semibold"
        : "",
    );
  };

  return (
    <header className="pt-11.5 pb-11.5 relative">
      <div
        className={clsx(
          `container ${theme == "dark" ? "bg-black" : ""} flex justify-between md:justify-center lg:justify-between  items-center flex-wrap pr-4 pl-4 `,
        )}
      >
        <Link to="/">
          <img
            src={theme === "dark" ? storeLogoLight : storeLogoDark}
            alt="store Logo"
          />
        </Link>
        <nav
          className={clsx(
            "hidden md:flex  gap-21.5 text-2xl font-normal ",
            theme == "dark" ? "text-white" : "black",
          )}
        >
          <NavLink className={activeNavLink} to="/">
            Home
          </NavLink>
          <NavLink className={activeNavLink} to="/shop">
            Shop
          </NavLink>
          <NavLink className={activeNavLink} to="/about-us">
            About Us
          </NavLink>
          <NavLink className={activeNavLink} to="/contact">
            Contact
          </NavLink>
        </nav>
        <Link to="/cart" className="md:ml-21.5 lg:ml-0 relative">
          <img
            src={theme === "dark" ? bagIconLight : bagIconDark}
            alt="Cart item Icon"
          />
          <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full w-5.25 h-5.25 bg-linear-to-r from-[#2AF598] to-[#009EFD] text-white">
            {itemsInCart}
          </span>
        </Link>
        <button
          className="w-8 md:hidden cursor-pointer"
          onClick={() => {
            setIsMobileNavClose(false);
          }}
        >
          <img src={mobileMenuIcon} alt="Mobile menu icon" />
        </button>
      </div>

      <nav
        className={clsx(
          isMobileNavClose ? "hidden" : "flex",
          "mobileNav absolute left-0 top-0 flex flex-col justify-center md:hidden w-full h-screen text-xl bg-black text-white z-99",
        )}
      >
        <button
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => {
            setIsMobileNavClose(true);
          }}
        >
          <img className="w-6" src={cancelIcon} alt="cancel Icon " />
        </button>
        <NavLink className={"pt-5 pb-5 border-b w-full text-center"} to="/">
          Home
        </NavLink>
        <NavLink className={"pt-5 pb-5 border-b w-full text-center"} to="/shop">
          Shop
        </NavLink>
        <NavLink
          className={"pt-5 pb-5 border-b w-full text-center"}
          to="/about-us"
        >
          About Us
        </NavLink>
        <NavLink className={"pt-5 pb-5 w-full text-center"} to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
