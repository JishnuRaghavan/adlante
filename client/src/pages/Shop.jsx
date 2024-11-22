import { useEffect, useState } from "react";
import ShopPageBody from "./shop components/ShopPageBody";

const Shop = () => {

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


  return (
    <div className="border-2">
      <div className="shopPageBanner h-56 border-2">
      </div>
      <div className="shopPageBody">
        <div className="shopPageHeader h-20 border-2 flex items-center p-4">
          <div className="w-1/3">
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
          <div className="flex w-2/3">
            <div className="w-1/2 flex justify-center ">
              <span>Showing {products.length > 30 ? 30 : products.length} of {products.length} items</span>
            </div>
            <div className="w-1/2 flex justify-end">sort</div>
          </div>
        </div>
        <div className="shoppingPageBody flex w-screen min-h-[100vh]">
          <div>filter</div>
          {
            products.length == 0 ?
              <h1>nothing to load</h1> :
              products.length <= 30 ?
                (
                  <ShopPageBody handlePageSelect={handlePageSelect} products={products} />
                ) :
                (
                  <ShopPageBody handlePageSelect={handlePageSelect} products={products.slice(((currentPage - 1) * 30), (currentPage * 30))} />
                )
          }
        </div>
      </div>
    </div>
  )
}

export default Shop;