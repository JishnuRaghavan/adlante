const SingleProductView = ({ product }) => {

  return (
    <div className="m-4 p-4 w-80 h-96 rounded-lg shadow-xl">
      <img src={product.images[1]} alt="" />
      product image
    </div>
  )
}

export default SingleProductView;