const HomePageThirdSection  =   ()=>    {
    return (
        <div style={{height: `calc(100vh - 200px)`}} className="w-screen flex flex-col items-center mt-4">
            <div className="trendingFirstColumn w-[80%] border-solid border-red-700 border-4 flex justify-between">
                <div>Trendy Design</div>
                <div>view more</div>
            </div>
            <div className="trendingSecondColumn border-solid border-green-800 border-4 w-[100%] h-[100%] mt-4">trending second column

            </div>
        </div>
    )
}

export default HomePageThirdSection;