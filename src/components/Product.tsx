import { useRef, useState } from "react";
import type { FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import thumbs from "../data/ImageThumbnail";

interface productProps {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  currentImg: string;
  setCurrentImg: React.Dispatch<React.SetStateAction<string>>;
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
}

const Product: FC<productProps> = ({
  cartCount,
  setCartCount,
  currentImg,
  setCurrentImg,
  qty,
  setQty,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openDialog = () => {
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    setIsOpen(false);
    setTimeout(() => {
      dialogRef.current?.close();
    }, 200);
  };

  // Add to cart
  const handleAddToCart = () => {
    if (qty > 0) {
      setCartCount(cartCount + qty);
      setQty(0);
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 py-10 bg-white">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
          {/* left */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-xl  overflow-hidden lg:w-[85%]">
              <img
                onClick={() => {
                  if (window.innerWidth >= 1024) {
                    openDialog();
                  }
                }}
                src={currentImg}
                alt="Main"
                className="w-full cursor-pointer"
              />
              <ChevronLeft
                onClick={() => {
                  const currentIndex = thumbs.findIndex(
                    (t) => t.big === currentImg
                  );
                  const prevIndex =
                    (currentIndex - 1 + thumbs.length) % thumbs.length;
                  setCurrentImg(thumbs[prevIndex].big);
                }}
                size={30}
                className="sm:hidden rounded-full bg-white p-1 font-bold absolute top-[190px] right-[292px] cursor-pointer"
              />
              <ChevronRight
                onClick={() => {
                  const currentIndex = thumbs.findIndex(
                    (t) => t.big === currentImg
                  );
                  const nextIndex = (currentIndex + 1) % thumbs.length;
                  setCurrentImg(thumbs[nextIndex].big);
                }}
                size={30}
                className="sm:hidden rounded-full bg-white p-1 font-bold absolute top-[190px] left-[292px] cursor-pointer"
              />
            </div>
            <div className="flex md:gap-4 gap-1 mt-6">
              {thumbs.map((t, i) => (
                <img
                  key={i}
                  src={t.small}
                  alt={`thumb-${i}`}
                  onClick={() => setCurrentImg(t.big)}
                  className={`w-20 h-20 rounded-lg cursor-pointer border-2 ${
                    currentImg === t.big
                      ? "border-orange-500"
                      : "border-transparent hover:opacity-75"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col justify-center">
            <h2 className="uppercase tracking-widest text-sm font-bold text-[#68707dff]">
              Sneaker Company
            </h2>
            <h1 className="text-4xl font-bold mt-3 text-[#1d2025ff] leading-snug">
              Fall Limited Edition <br />
              Sneakers
            </h1>
            <p className="text-[#68707dff] mt-6 leading-relaxed">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <span className="text-3xl font-bold text-[#1d2025ff]">
                $125.00
              </span>
              <span className="bg-[#1d2025ff] text-white text-sm font-bold px-2 py-1 rounded">
                50%
              </span>
            </div>
            <span className="line-through text-gray-400 mt-1">$250.00</span>

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-between md:block md:w-fit bg-gray-100 rounded-lg w-full">
                <button
                  onClick={() => qty > 0 && setQty(qty - 1)}
                  className="px-4 py-2 text-[#ff7d1a] font-bold text-lg cursor-pointer"
                >
                  –
                </button>
                <span className="px-4 py-2 font-bold">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-2 text-[#ff7d1a] font-bold text-lg cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="cursor-pointer flex-1 bg-[#ff7d1a] hover:bg-[#fb6406] text-[#1d2025ff] font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-3 shadow-lg"
              >
                <img
                  className="w-4 h-4 object-cover"
                  src="/images/icon-cart.svg"
                  alt="cart icon"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dialog */}
      {isOpen && (
        <dialog
          ref={dialogRef}
          className="fixed inset-0 bg-transparent w-full bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div
            className={`relative rounded-lg p-6 w-[90%] max-w-sm backdrop:bg-black/50 relative transition-transform duration-200 ease-out 
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            {/* Close button */}
            <button
              className="absolute text-[#ff7d1a] cursor-pointer top-[-12px] right-7 text-lg font-bold hover:text-[#fb6406]"
              onClick={closeDialog}
            >
              ✕
            </button>

            {/* big Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={currentImg}
                alt="Main"
                className="w-full max-h-[60vh] object-contain"
              />
              <ChevronLeft
                onClick={() => {
                  const currentIndex = thumbs.findIndex(
                    (t) => t.big === currentImg
                  );
                  const prevIndex =
                    (currentIndex - 1 + thumbs.length) % thumbs.length;
                  setCurrentImg(thumbs[prevIndex].big);
                }}
                size={30}
                className="rounded-full bg-white p-1 font-bold absolute bottom-[370px] right-[340px] cursor-pointer"
              />
              <ChevronRight
                onClick={() => {
                  const currentIndex = thumbs.findIndex(
                    (t) => t.big === currentImg
                  );
                  const nextIndex = (currentIndex + 1) % thumbs.length;
                  setCurrentImg(thumbs[nextIndex].big);
                }}
                size={30}
                className="rounded-full bg-white p-1 font-bold absolute bottom-[370px] left-[340px] cursor-pointer"
              />
            </div>

            {/* smaller images */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              {thumbs.map((t, i) => (
                <img
                  key={i}
                  src={t.small}
                  alt={`thumb-${i}`}
                  onClick={() => setCurrentImg(t.big)}
                  className={`w-20 h-20 rounded-lg cursor-pointer border-2 transition-all
            ${
              currentImg === t.big
                ? "border-orange-500"
                : "border-transparent hover:opacity-75"
            }`}
                />
              ))}
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Product;
