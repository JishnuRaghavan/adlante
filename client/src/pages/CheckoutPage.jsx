import { useState } from "react";

const CheckoutPage = ({cart})=> {

  const [loggedIn,setLoggedIn]  = useState(true);

  return (
    <div>
      <div className="header w-full bg-slate-100 my-4 p-4 flex items-center justify-center font-bold">ADELANTE</div>
      <div className="flex-col w-11/12 justify-self-center p-4">
        <div className="flex justify-between items-center border-solid border-black bg-red-300 w-full p-2">
          <div className="flex items-center font-bold">
            <img src="https://img.icons8.com/?size=50&id=3686&format=png" alt="" />
            Bag()
          </div>
          <div>
            total
          </div>
        </div>
        <div className="cartBoxItemList flex flex-col gap-4 p-4">
              <div key="" className="flex gap-2">
                <div className="itemArea1 w-2/6 shadow-lg">
                  <img src="" alt="item-image" />
                </div>
                <div className="flex justify-between w-full">
                  <div className="itemArea2 w- px-2 flex flex-col items-start justify-between w-full">
                    <div>item.title</div>
                    <div>item.price</div>
                  </div>
                  <div className="itemArea3 flex flex-col justify-between items-center w-1/4">
                    <div className="w-7 p-1 rounded-full shadow-xl cursor-pointer">
                      <img className="" src="https://cdn-icons-png.flaticon.com/128/10065/10065108.png" alt="delete-button" />
                    </div>
                    <div className="flex gap-2 shadow-md w-full rounded-sm">
                      <div className="cursor-pointer w-full flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/3 flex items-center justify-center">item.quantity</div>
                      <div className="cursor-pointer w-full flex items-center justify-center">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div className="bg-yellow-300 p-2 flex justify-center">
          promocode
        </div>
        <div className="bg-violet-200 p-2 justify-center flex">
          total
        </div>
        <div className="bg-blue-300 p-2 justify-center flex">
          place order
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage;