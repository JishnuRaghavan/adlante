import { useState } from "react";

const Cart = ({ showCart, cartVisible }) => {
  const [closing, setClosing] = useState(false); // State to track the closing animation

  const handleClose = () => {
    setClosing(true); // Trigger the closing animation
    setTimeout(() => {
      setClosing(false); // Reset closing state
      showCart(); // Call the parent function to hide the cart
    }); // Timeout matches the animation duration
  };

  return (
    <div className={`fixed bg-transparent z-40 inset-0 pl-[60vw]`}>
      <div
        className={`cartModal top-0 bottom-0 right-0 border-2 border-black h-full flex flex-col overflow-x-hidden ${closing ? "animate-slide-right" : "animate-slide-left"
          }`}
        data-aos={closing ? "slide-left" : "slide-left"}
      >
        <div className="border-red-600 border-2 h-28 flex justify-between">
          <div className="flex text-black text-2xl font-bold items-end">
            Your Cart
          </div>
          <div>
            <img
              onClick={handleClose}
              className="w-10"
              src="https://cdn-icons-png.flaticon.com/128/11146/11146724.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
