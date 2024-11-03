import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);

export default function Home() {

  const textQuote = useRef()
  const textTitle  = useRef();
  useEffect(()=>{
    const text1 = textQuote.current;
    const text2 = textTitle.current;

    gsap.to(text1,{
      duration:1,
      text:"where fashion moves forward",
      delay:1
    })
    gsap.to(text2,{
      duration:0.4,
      text:"Adelante",
      delay:2
    })
    

  },[]);

  return (
    <div className="homeArea">
    
      <div className="landingPage" style={{"display":"flex","justifyContent":"space-evenly"}}>
        {/* <div className="landingPage-firstColumn" style={{"width":"50%"}}>
          <div className="text1Box">
            <span className="firstColumnText1" ref={textQuote} contentEditable={true} >{}</span>
          </div>
          <div className="text2Box">
            <span className="firstColumnText2" ref={textTitle} contentEditable={true}>{}</span>
          </div>
        </div> */}
        {/* <div className="landingPage-secondColumn">
          <img style={{"borderRadius":"10px","height":"100%"}} src="https://plus.unsplash.com/premium_photo-1661326297568-65045688d10a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div> */}
        <div className="landingPage-thirdColumnBlur">

        </div>
        <div className="landingPage-thirdColumn">
          <div className="carouselBackground"></div>
          <div className="carouselBox">
            <img data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" src="https://media.istockphoto.com/id/518730149/photo/handsome-man-wearing-norwegian-sweater.jpg?s=1024x1024&w=is&k=20&c=8Gd_GhTFG6MvF8jpNnJ7WkwIkXP_mJcuu4XNyqNXKuE=" alt="" />
          </div>
        </div>
      </div>
      <div className="secondSection">
          <div className="policyBox" data-aos="slide-up">policy box</div>
      </div>
      <div className="thirdSection">
          <div className="trendingFirstColumn">
            <div>Trendy Design</div>
            <div>view more</div>
          </div>
          <div className="trendingSecondColumn">trending second column</div>
        </div>
    </div>
  );
}