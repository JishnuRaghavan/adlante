import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductView = () => {

  const [product, setProduct] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    fetchProductData();
  }, [])

  const fetchProductData = async () => {
    const data = await fetch(`https://api.escuelajs.co/api/v1/products/${productID}`);
    const json = await data.json();
    setProduct(json);
  }
  return (
    <div className="bg-indigo-100 min-h-[100vh] w-screen">
      <div className="absolute bg-indigo-100 z-[-100] top-0 min-h-[100vh] w-screen"></div>
      <div className="firstRow flex w-full justify-around md:flex-nowrap flex-wrap">
        <div className="firstRowFirstColumn xl:min-w-[500px] xl:w-[800px] lg:min-w-[400px] lg:w-[600px] md:min-w-[300px] md:w-[500px] sm:w-full sm:min-w-[300px] m-2 p-2 sm:flex sm:flex-row flex flex-col sm:gap-0 gap-2">
          <div className="max-w-[550px]">
            <img className="w-[600px] rounded-lg" src={product?.images[0]} alt="" />
          </div>
          <div className="flex flex-row sm:flex sm:flex-col sm:gap-2 sm:px-2 justify-between">
            <img className="sm:w-40 w-28 h-full rounded-t-lg" src={product?.images[0]} alt="" />
            <img className="sm:w-40 w-28 h-full" src={product?.images[1]} alt="" />
            <img className="sm:w-40 w-28 h-full rounded-b-lg" src={product?.images[2]} alt="" />
          </div>
        </div>
        <div className="firstRowSecondColumn flex flex-col justify-between m-2 p-2 xl:min-w-[500px] xl:w-[700px] lg:min-w-[400px] lg:w-[600px] md:min-w-[300px] md:w-[500px] sm:min-w-[200px] w-full">
          <div className="">title</div>
          <div>size</div>
          <div>
            addto cart and buy
          </div>
        </div>
      </div>
      <div className="min-h-[100vh]">secondrow</div>
    </div>
  )
}

export default ProductView;