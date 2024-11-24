import { useEffect, useState } from "react";
import ShopPageBody from "./shop components/ShopPageBody";
import ProductFilter from "../utils/ProductFilter";

const Shop = () => {

  const [sizeFilterOpen,setSizeFilterOpen]  = useState(false);
  const [colorFilterOpen,setColorFilterOpen]  = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log('*');
    fetchProducts()
  }, []);

  const fetchProducts = async () => {
    const data = await fetch('https://api.escuelajs.co/api/v1/products');

    const json = await data.json();
    setProducts(json);
  }

  const handlePageSelect = (newPage) => {
    setCurrentPage(newPage);
  }

  const handleFilter = () => {
    setFiltered(!filtered);
  }
  const handleColorFilter = ()=>  {
    setColorFilterOpen(!colorFilterOpen);
  }
  const handleSizeFilter  = ()=>  {
    setSizeFilterOpen(!sizeFilterOpen);
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-300">
      <div className="absolute top-0 bg-gradient-to-r from-blue-200 to-blue-300 min-h-[100vh] w-screen z-[-100] m-0 p-0 left-0"></div>
      <div className="shopPageBanner h-56">
      </div>
      <div className="shopPage">
        <div className="shopPageHeader h-20 flex items-center p-4 mx-4">
          <div className="w-1/3" style={filtered?{width:'320px'}:{}}>
            <div onClick={handleFilter} className="flex gap-1 cursor-pointer">
              <span>Filters:</span>
              {
                filtered ?
                  (
                    <div className="flex gap-1">
                      <span>Hide</span>
                      <img className="cursor-pointer" src="https://img.icons8.com/?size=24&id=X9yZBEi0SUB7&format=png" alt="" />
                    </div>
                  ) :
                  (
                    <div className="flex gap-1">
                      <span>show</span>
                      <img className="cursor-pointer" src="https://img.icons8.com/?size=24&id=30M9wv1iFkcH&format=png" alt="" />
                    </div>
                  )
              }
            </div>
          </div>
          <div className="flex w-2/3" style={filtered?{width:'100%'}:{}}>
            <div className="w-1/2 flex justify-center" style={filtered?{justifyContent:'flex-start'}:{}}>
              <span>Showing {products.length > 30 ? 30 : products.length} of {products.length} items</span>
            </div>
            <div className="w-1/2 flex justify-end" style={filtered?{justifyContent:'flex-end'}:{}}>sort</div>
          </div>
        </div>
        <div className="shoppingPageBody flex w-screen min-h-[100vh]">
          {
            filtered && <ProductFilter sizeFilterOpen={sizeFilterOpen} handleSizeFilter={handleSizeFilter} colorFilterOpen={colorFilterOpen} handleColorFilter={handleColorFilter} />
          }
          {
            products.length == 0 ?
              <h1>nothing to load</h1> :
              products.length <= 30 ?
                (
                  <ShopPageBody filtered={filtered} handlePageSelect={handlePageSelect} products={products} />
                ) :
                (
                  <ShopPageBody filtered={filtered} handlePageSelect={handlePageSelect} products={products.slice(((currentPage - 1) * 30), (currentPage * 30))} />
                )
          }
        </div>
      </div>
    </div>
  )
}

export default Shop;