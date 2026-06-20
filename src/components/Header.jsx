// Icons
import mobileMenuIcon from "../assets/icons/mobileMenuIcon.png";
import bagIconLight from "../assets/icons/bagLight.svg";
import bagIconDark from "../assets/icons/bagDark.svg";

// imgs
import storeLogoLight from "../assets/imgs/storeLogoLight.svg";
import storeLogoDark from "../assets/imgs/storeLogoDark.svg";

// React Router
import { Link } from "react-router";

// React
import { useState } from "react";

// Clsx
import clsx from "clsx";

export default function Header() {
  const [theme , setTheme] = useState("dark");
  return (
    <header>
      <div className={clsx(`container ${theme == "dark" ? "" :"" }`)} >
        <Link>
          <img
            src={theme === "dark" ? storeLogoLight : storeLogoDark}
            alt="store Logo"
          />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Link to="/cart" title="cart">
          <img src={theme === "dark" ? bagIconLight : bagIconDark} alt="Cart item Icon" />
        </Link>
        <button className="hidden">
          <img src={mobileMenuIcon} alt="Mobile menu icon" />
        </button>
      </div>
    </header>
  );
}
