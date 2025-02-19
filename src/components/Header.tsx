import { useState } from "react";
import { SignInButton } from "@clerk/clerk-react";
import CartOverlay from "../pages/shoppingCart/CartOverlay";
import logo from '../images/furniroLogo.png'
import login from '../images/login.png'
import cart from '../images/shoppingCart.png'

const Header = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => setOverlayVisible((prev) => !prev);

  return (
    <header className="w-full h-24 flex items-center justify-between">
      <div className="ml-8 flex items-center">
        <img src={logo} alt="Logo" className="w-12 h-8 mr-1" />
        <h1 className="font-bold text-3xl">Furniro</h1>
      </div>
      <div>
        <nav className="flex gap-6">
          <a href="/" className="text-base font-medium">Home</a>
          <a href="/shop" className="text-base font-medium">Shop</a>
          <a href="/about" className="text-base font-medium">About</a>
          <a href="/contact" className="text-base font-medium">Contact</a>
        </nav>
      </div>
      <div className="flex items-center gap-2 mr-9">
        <SignInButton>
          <button>
        <img src={login} alt="Login Icon" className="w-5.5 h-4" />
          </button>
        </SignInButton>
        <div className="relative">
          <img
            src={cart}
            alt="Cart Icon"
            className="w-5 h-5 cursor-pointer"
            onClick={toggleOverlay}
          />
          {isOverlayVisible && (
            <div className="absolute right-0 mt-6">
              <CartOverlay handleClose={() => setOverlayVisible(false)} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;