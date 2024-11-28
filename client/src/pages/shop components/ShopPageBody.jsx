import SingleProductView from "./SingleProductView";

const ShopPageBody = ({ handlePageSelect, products, filtered }) => {

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-wrap w-full justify-around" style={filtered ? { justifyContent: "space-between" } : {}}>
        {
          products.map((product) => (
            <SingleProductView filtered={filtered} key={product.id} product={product} />
          ))
        }
      </div>
      <div className="flex justify-center m-2 p-2">pagenumber</div>
    </div>
  )
}

export default ShopPageBody;