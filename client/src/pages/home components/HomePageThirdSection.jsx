import { useEffect, useState } from "react";

const HomePageThirdSection = () => {

    const [trendyProducts, setTrendyProducts] = useState([]);

    useEffect(() => {
        fetchTrendingProducts();
    }, []);

    const fetchTrendingProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();
        setTrendyProducts(json);
    }

    return (
        <div style={{ height: `calc(100vh - 200px)` }} className="w-screen flex flex-col items-center mt-4">
            <div className="trendingFirstColumn w-[80%] border-solid border-red-700 border-4 flex justify-between">
                <div>Trendy Design</div>
                <div>view more</div>
            </div>
            <div className="trendingSecondColumn border-solid border-green-800 border-4 w-[80%] h-[100%] mt-4 flex items-center justify-between relative">
                {
                    trendyProducts.slice(0, 4).map((trendyProduct, index) => (
                        <div data-aos="fade-up" data-aos-duration="1000" className="flex w-1/5 h-5/6 border-solid border-black border-2">

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePageThirdSection;