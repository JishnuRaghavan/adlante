import { Link } from "react-router-dom";

const SingleProductView = ({ product, filtered }) => {

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  const handleAddToWishlist = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <Link to={`/product/${product.id}`} >
      <div className="m-4 p-4 w-[400px] min-h-[450px] flex flex-col justify-between rounded-lg shadow-2xl bg-sky-100" style={filtered ? { width: "300px" } : {}}>
        <img className="my-2 cursor-pointer rounded-lg" src={product?.images[0]} alt="" />
        <div className="flex items-center">
          <div className="flex justify-center items-center my-2 text-md w-full">{product?.title}</div>
          <div className="w-10 text-md text-center">₹ {product?.price}</div>
        </div>
        <div className="flex justify-between my-2">
          <div onClick={handleAddToCart} className="w-32 p-2 bg-slate-400 rounded-lg shadow-2xl border-none font-bold text-white text-center">add to cart</div>
          <div onClick={handleAddToWishlist} className="p-2 w-32 bg-slate-400 rounded-lg shadow-2xl border-none font-bold text-white text-center">add to wishlist</div>
        </div>
      </div>
    </Link>
  )
}

export default SingleProductView;