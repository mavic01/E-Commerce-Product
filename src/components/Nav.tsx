import { useState } from "react";
import type { FC } from "react";

interface NavProps {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  currentImg: string;
  setCurrentImg: React.Dispatch<React.SetStateAction<string>>;
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
}

const Nav: FC<NavProps> = ({ cartCount, setCartCount, currentImg, qty }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const handleCartOpen = () => {
    setCartOpen((prev) => !prev);
  };

  const handleDel = () => {
    setCartCount(0);
  };

  return (
    <section className="w-full relative">
      <nav className="px-6 md:px-20">
        <div className="flex items-center justify-between border-b border-[#555] py-6">
          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden flex flex-col gap-[4px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-[2px] bg-[#555]"></span>
            <span className="w-6 h-[2px] bg-[#555]"></span>
            <span className="w-6 h-[2px] bg-[#555]"></span>
          </button>
          {/* Logo */}
          <a
            href="/"
            className="text-2xl md:text-3xl font-bold text-[#1d2025ff]"
          >
            sneakers
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center cursor-pointer gap-6">
            <li className="text-[#555] hover:text-[#888]">
              <a href="#">Collection</a>
            </li>
            <li className="text-[#555] hover:text-[#888]">
              <a href="#">Men</a>
            </li>
            <li className="text-[#555] hover:text-[#888]">
              <a href="#">Women</a>
            </li>
            <li className="text-[#555] hover:text-[#888]">
              <a href="#">About</a>
            </li>
            <li className="text-[#555] hover:text-[#888]">
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-6 relative">
            {cartCount > 0 && (
              <span
                onClick={handleCartOpen}
                className="absolute top-1 right-12 bg-[#ff7d1a] text-white text-xs font-bold px-2 py-0.3 rounded-full"
              >
                {cartCount}
              </span>
            )}
            <img
              onClick={handleCartOpen}
              className="w-5 h-5 object-cover cursor-pointer"
              src="/images/icon-cart.svg"
              alt="Cart Icon"
            />

            <img
              className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full cursor-pointer"
              src="/images/image-avatar.png"
              alt="Profile Picture"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu + Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 md:hidden flex">
            <div
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 transition-opacity duration-500 ease-in-out"
            />

            {/* Menu slide */}
            <div
              className={`relative z-50 bg-white w-2/3 h-full shadow-lg transform 
        transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold p-6"
              >
                ×
              </button>

              <ul className="flex flex-col items-start gap-6 mt-4 px-6 text-[#555]">
                <li>
                  <a href="#">Collection</a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>

      {cartOpen && (
        <div className="absolute py-6 flex flex-col gap-4 right-4 top-20 md:right-20 md:top-22 w-[95%] md:w-96 flex flex-col gap-4 bg-white shadow-xl rounded-lg z-50">
          <h1 className="font-bold border-b border-gray pb-2 px-4">Cart</h1>
          {cartCount > 0 ? (
            <div className="px-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={currentImg}
                  className="w-10 h-10 rounded object-cover"
                  alt="Product Image"
                />
                <div className="px-4">
                  <h1 className="text-sm text-[#68707dff]">
                    Fall Limited Edition Sneakers
                  </h1>
                  <p className="flex gap-2">
                    <span className="text-sm text-[#68707dff]">
                      $125.00 &times; {cartCount + qty}
                    </span>
                    <span className="text-sm font-semibold">
                      ${125.0 * cartCount + qty}
                    </span>
                  </p>
                </div>
                <button
                  onClick={handleDel}
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  <img
                    className="cursor-pointer"
                    src="/images/icon-delete.svg"
                    alt="delete icon"
                  />
                </button>
              </div>

              <button className="px-4 py-2 rounded-lg font-bold text-black bg-[#ff7d1a]">
                Checkout
              </button>
            </div>
          ) : (
            <div className="w-78 h-20 flex items-center justify-center">
              <h1 className="text-center">Your cart is empty</h1>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Nav;
