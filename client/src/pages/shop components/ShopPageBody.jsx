import SingleProductView from "./SingleProductView";

const ShopPageBody = ({ handlePageSelect, products }) => {

  return (
    <div className="flex flex-wrap">
      {
        products.map((product) => (
          <div key={product.id} className="w-80 h-96 flex m-4 p-4">
            <img src={product.images[0]} alt="product image" />
          </div>
        ))
      }
      <div>
        pagenumber
      </div>
    </div>
  )
}

export default ShopPageBody;