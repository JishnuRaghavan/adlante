import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ showCart, cartVisible }) => {
  const [closing, setClosing] = useState(false);
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      showCart();
    });
  };

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="fixed bg-transparent z-50 inset-0 pl-[60vw]">
      <div
        className={`cartBox top-0 bottom-0 right-0 bg-green-100 h-full flex flex-col overflow-x-hidden ${closing ? "animate-slide-right" : "animate-slide-left"
          }`}
        data-aos={closing ? "slide-left" : "slide-left"}
      >
        <div className="cartBox1stRow h-28 flex justify-between p-4">
          <div className="flex text-black items-end" style={{ fontSize: `calc(20/10*1rem)` }}>
            Your Cart
          </div>
          <div>
            <svg className="cursor-pointer" onClick={handleClose} width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="x_svg__feather x_svg__feather-x everlane-icon"><path d="M18 6L6 18M6 6l12 12"></path></svg>
          </div>
        </div>
        <div className="cartBoxItemList flex flex-col gap-4 p-4">
          {
            cart?.cartItems?.map((item, index) => (
              <div key={index} className="flex gap-2">
                <div className="itemArea1 w-2/6 shadow-lg">
                  <img src={item?.image} alt="item-image" />
                </div>
                <div className="flex justify-between w-full">
                  <div className="itemArea2 w- px-2 flex flex-col items-start justify-between w-full">
                    <div>{item.title}</div>
                    <div>{item.price}</div>
                  </div>
                  <div className="itemArea3 flex flex-col justify-between items-center w-1/4">
                    <div className="w-7 p-1 rounded-full shadow-xl cursor-pointer">
                      <img className="" src="https://cdn-icons-png.flaticon.com/128/10065/10065108.png" alt="delete-button" />
                    </div>
                    <div className="flex gap-2 shadow-md w-full rounded-sm">
                      <div className="cursor-pointer w-full flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/3 flex items-center justify-center">{item.quantity}</div>
                      <div className="cursor-pointer w-full flex items-center justify-center">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
