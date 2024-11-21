const HomePageSecondSection = () => {
  return (
    <div className="h-[50vh] w-screen flex justify-center items-center bg-slate-300">
      <div className="policyBox w-screen h-[20vh] bg-transparent flex justify-around items-center" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img className="w-14" src="https://img.icons8.com/?size=32&id=17016&format=png&color=737373" alt="" />
          </div>
          <div className="font-bold text-lg p-2">Available in Stores</div>
          <div>Shop in one of our store or at a wholesaler</div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img className="w-14" src="https://img.icons8.com/?size=32&id=22139&format=png&color=737373" alt="" />
          </div>
          <div className="font-bold text-lg p-2">Free Shipping</div>
          <div>For Adelante members on INR orders rs1000+</div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img className="w-14" src="https://img.icons8.com/?size=26&id=4795&format=png&color=737373" alt="" />
          </div>
          <div className="font-bold text-lg p-2">Secure Payment</div>
          <div>Safe Shopping Guaranteed</div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img className="w-14" src="https://img.icons8.com/?size=32&id=22083&format=png&color=737373" alt="" />
          </div>
          <div className="font-bold text-lg p-2">Free Returns & Exchanges</div>
          <div>For orders within 30 days of purchase</div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default HomePageSecondSection;