import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductView = () => {

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleClick = (index) => {

  }

  const fetchProductData = async () => {
    const data = await fetch(`https://api.escuelajs.co/api/v1/products/${productID}`);
    const json = await data.json();
    setProduct(json);
  }
  return (
    <div className="bg-indigo-100 min-h-[100vh] w-screen">
      <div className="absolute bg-indigo-100 z-[-100] top-0 min-h-[100vh] w-screen"></div>
      <div className="firstRow flex w-full md:flex-nowrap flex-wrap md:h-[550px]">
        <div className="firstRowFirstColumn md:w-1/2 flex">
          <div className="w-4/5 h-full px-2">
            <img className="w-full h-full rounded-lg" src={product?.images[0]} alt="productimage" />
          </div>
          <div className="w-1/5 px-2 flex flex-wrap gap-2 overflow-hidden cursor-[url('https://img.icons8.com/?size=26&id=6454&format=png'),default]">
            {
              product?.images?.map((image, index) => (
                <img key={index} onClick={handleClick(index)} className="draggableImages min-h-[250px] rounded-lg" src={image} alt="secondoryimages" />
              ))
            }
          </div>
        </div>
        <div className="firstRowSecondColumn border-2 border-green-700 md:w-1/2">

        </div>
      </div>
      <div className="min-h-[100vh]">secondrow</div>
    </div>
  )
}

export default ProductView;