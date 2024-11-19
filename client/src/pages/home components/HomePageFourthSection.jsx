const HomePageFourthSection = () => {
  return (
    <div className="w-screen h-[100vh]">
      <div className="h-[100%] flex items-center justify-center">
        <div className="flex justify-center items-center overflow-hidden shadow-xl border-indigo-300" data-aos="fade-up" data-aos-delay="100">
          <img className="md:w-screen hover:cursor-pointer hover:scale-[1.05] hover:transition-transform transition-transform ease-in duration-200 hover:duration-300" src="https://img.freepik.com/free-psd/young-skater-with-grey-t-shirt-s-mock-up_23-2147653513.jpg?t=st=1731846368~exp=1731849968~hmac=4c99e47b297201ae1afdfe5fa30f44892aa2ffacd2c0cbc8bde9e274a15404ea&w=740" />
          <div className="font-bold text-white text-2xl absolute">T-Shirt</div>
        </div>
        <div className="flex justify-center items-center relative overflow-hidden border-indigo-300" data-aos="fade-up">
          <img className="md:w-screen hover:scale-[1.05] ease-in transition-transform hover:cursor-pointer hover:transition-transform hover:duration-300 duration-200" src="https://img.freepik.com/free-photo/handsome-man_144627-14256.jpg?t=st=1731846510~exp=1731850110~hmac=20890deacb44d3b70c2bac1419efca657321b02606d13e6474de4c4db5bdf40b&w=740" />
          <div className="absolute font-bold text-white text-2xl">Shirt</div>
        </div>
      </div>
    </div>
  )
}

export default HomePageFourthSection;