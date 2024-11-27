import { useEffect, useState } from "react";

const HomePageThirdSection = () => {

    const [trendyProducts, setTrendyProducts] = useState([]);

    useEffect(() => {
        fetchTrendingProducts();
    }, []);

    const fetchTrendingProducts = async () => {
        const data = await fetch("https://api.escuelajs.co/api/v1/products");
        const json = await data.json();
        setTrendyProducts(json);
    }

    return (
        <div className="w-screen flex flex-col items-center mt-4 mb-10 min-h-[100vh]">
            <div className="trendingFirstColumn w-[1220px] flex justify-between px-4 my-10 text-2xl text-neutral-400" data-aos="slide-up">
                <div className="cursor-pointer">Trendy Design</div>
                <div className="cursor-pointer">view more</div>
            </div>
            <div className="trendingSecondColumn w-[1220px] mt-4 flex items-center justify-between relative">
                {
                    trendyProducts.slice(0, 4).map((trendyProduct) => (
                        <div key={trendyProduct.id} data-aos="fade-up" data-aos-duration="1000" className="flex w-[270px] h-[400px] bg-indigo-200 shadow-xl rounded-2xl overflow-hidden flex-col justify-around hover:cursor-pointer">
                            <img className="p-6 hover:scale-[1.03] hover:transition-transform transition-transform rounded-2xl h-[300px] w-[260px]" src={trendyProduct?.images[0]} />
                            <div className="text-center flex items-center justify-center">
                                <div>{trendyProduct.title}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePageThirdSection;