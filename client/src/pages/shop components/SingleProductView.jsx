const SingleProductView = ({ product , filtered }) => {

  console.log(filtered)
  return (
    <div className="m-4 p-4 w-[400px] rounded-lg shadow-2xl bg-white" style={filtered?{width:"300px"}:{}}>
      <img className="my-2 cursor-pointer" src={product.images[0]} alt="" />
      <div className="flex justify-center items-center my-2">{product.title}</div>
      <div className="flex justify-around my-2">
        <img className="cursor-pointer w-12" src="https://cdn-icons-png.flaticon.com/128/6811/6811598.png" alt="addToCart" />
        <img className="cursor-pointer w-12" src="https://cdn-icons-png.flaticon.com/128/13570/13570033.png" alt="addToWishlist" />
      </div>
    </div>
  )
}

export default SingleProductView;