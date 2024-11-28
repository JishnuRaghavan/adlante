const ProductFilter = ({sizeFilterOpen,colorFilterOpen ,handleColorFilter ,handleSizeFilter})=>  {
  return (
    <div className="mt-4 mx-4 px-4 flex flex-col w-72 h-20 sticky top-32">
      <div className="p-2 h-10 text-center cursor-pointer border-2" onClick={handleSizeFilter}>size</div>
      <div className="border-2 flex flex-wrap justify-around items-center transition-opacity transition-[.5s ease-in-out] p-2" style={sizeFilterOpen?{opacity:"1"}:{visibility:"hidden",opacity:"0",height:"0px",padding:"0px"}}>
        <div className="rounded-md bg-slate-100 w-8 h-8 flex justify-center items-center cursor-pointer">S</div>
        <div className="rounded-md bg-slate-100 w-8 h-8 flex justify-center items-center cursor-pointer">M</div>
        <div className="rounded-md bg-slate-100 w-8 h-8 flex justify-center items-center cursor-pointer">L</div>
        <div className="rounded-md bg-slate-100 w-8 h-8 flex justify-center items-center cursor-pointer">XL</div>
        <div className="rounded-md bg-slate-100 w-8 h-8 flex justify-center items-center cursor-pointer">XXL</div>
      </div>
      <div className="h-10 p-2 text-center cursor-pointer border-2" onClick={handleColorFilter}>color</div>
      <div className="flex flex-wrap border-2 transition-opacity trasition-[.5s ease-in-out] duration-200 ease-in p-2" style={colorFilterOpen?{opacity:"1"}:{visibility:"hidden",opacity:"0",height:"0px"}}>
        <div className="cursor-pointer m-2 p-2 w-5 h-5 bg-violet-700 rounded-full"></div>
        <div className="w-5 h-5 rounded-full bg-indigo-700 m-2 p-2 "></div>
        <div className="w-5 h-5 m-2 p-2  rounded-full bg-blue-700"></div>
        <div className="w-5 h-5 rounded-full bg-green-700 m-2 p-2 "></div>
        <div className="w-5 h-5 m-2 p-2  rounded-full bg-orange-700"></div>
        <div className="w-5 h-5 m-2 p-2  rounded-full bg-red-700"></div>
        <div className="w-5 h-5 m-2 p-2  rounded-full bg-black"></div>
        <div className="w-5 h-5 m-2 p-2  rounded-full bg-white"></div>
        <div className="w-5 h-5 m-2 p-2  rounded-full bg-amber-400"></div>
        <div className="w-5 h-5 m-2 p-2  rounded-full bg-sky-500"></div>
      </div>
    </div>
  )
}

export default ProductFilter;