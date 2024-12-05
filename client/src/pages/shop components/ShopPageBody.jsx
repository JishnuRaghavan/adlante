import SingleProductView from "./SingleProductView";
import { useDispatch } from 'react-redux';
import { addItemsToCart } from "../../redux/cart/cartSlice";

const ShopPageBody = ({ handlePageSelect, products, filtered }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItemsToCart({
      id: product.id,
      title: product.title,
      price: product.price ? product.price : product.defaultPrice,
      quantity: 1,
      image: product?.images[0],
    }))
  }
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap w-full justify-around" style={filtered ? { justifyContent: "space-between" } : {}}>
        {
          products.map((product) => (
            <SingleProductView addToCart={handleAddToCart} filtered={filtered} key={product.id} product={product} />
          ))
        }
      </div>
      <div className="flex justify-center m-2 p-2">pagenumber</div>
    </div>
  )
}

export default ShopPageBody;