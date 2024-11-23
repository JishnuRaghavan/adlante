import SingleProductView from "./SingleProductView";

const ShopPageBody = ({ handlePageSelect, products }) => {

  return (
    <div className="flex flex-wrap w-full justify-around">
      {
        products.map((product) => (
          <SingleProductView key={product.id} product={product}/>
        ))
      }
      <div>
        pagenumber
      </div>
    </div>
  )
}

export default ShopPageBody;