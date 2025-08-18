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

const Nav: FC<NavProps> = ({ cartCount, currentImg, qty }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const handleCartOpen = () => {
    setCartOpen((prev) => !prev);
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
          <a href="/" className="text-2xl md:text-3xl font-bold">
            Sneakers
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center cursor-pointer gap-6">
            <li className="text-[#555] hover:text-[#888]">
              <a href="/collection">Collection</a>
            </li>
            <li className="text-[#555] hover:text-[#888]">
              <a href="/men">Men</a>
            </li>
            <li className="text-[#555] hover:text-[#888]">
              <a href="/women">Women</a>
            </li>
            <li className="text-[#555] hover:text-[#888]">
              <a href="/about">About</a>
            </li>
            <li className="text-[#555] hover:text-[#888]">
              <a href="/contact">Contact</a>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-6 relative">
            {cartCount > 0 && (
              <span className="absolute top-1 right-12 bg-[#ff7d1a] text-white text-xs font-bold px-2 py-0.3 rounded-full">
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
        {isOpen && (
          <ul className="flex flex-col items-start gap-4 mt-4 pb-4 text-[#555] md:hidden border-b border-[#555]">
            <li>
              <a href="/collection">Collection</a>
            </li>
            <li>
              <a href="/men">Men</a>
            </li>
            <li>
              <a href="/women">Women</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        )}
      </nav>

      {cartOpen && (
        <div className="absolute flex flex-col gap-4 top-22 left-200 py-6 bg-white shadow-xl rounded-lg">
          <h1 className="font-bold border-b border-gray pb-2 px-4">Cart</h1>
          {cartCount > 0 ? (
            <div className="px-4 flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <img
                  src={currentImg}
                  className="w-10 h-10 rounded object-cover"
                  alt="Product Image"
                />
                <div className="px-4">
                  <h1 className="text-sm text-[#999]">Fall Limited Edition Sneakers</h1>
                  <p className="flex gap-2">
                    <span className="text-sm text-[#999]">$125.00 &times; {cartCount + qty}</span>
                    <span className="text-sm font-semibold">${125.00 * cartCount + qty}</span>
                  </p>
                </div>
                <button className="p-2 rounded-md hover:bg-gray-100">
                  <img src="/images/icon-delete.svg" alt="delete icon" />
                </button>
              </div>

              <button className="px-4 py-2 rounded-lg font-bold text-black bg-[#ff7d1a]">Checkout</button>
            </div>
          ) : (
            <h1 className="flex items-center justify-center">
              Your cart is empty
            </h1>
          )}
        </div>
      )}
    </section>
  );
};

export default Nav;
