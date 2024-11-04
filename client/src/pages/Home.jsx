import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css';

export default function Home() {

    const [headerHeight, setHeaderHeight] = useState(0);
    const [firstSectionHeight, setFirstSectionHeight] = useState('80vh');
    const [imageCount, setImageCount] = useState(0);
    const [imageList, setImageList] = useState(null);
    const [imageElement, setImageElement] = useState(
        <div className="carouselBox flex items-center justify-center" style={{height:firstSectionHeight}}>
            <img 
                data-aos="fade-zoom-in" 
                src="https://media.istockphoto.com/id/518730149/photo/handsome-man-wearing-norwegian-sweater.jpg?s=1024x1024&w=is&k=20&c=8Gd_GhTFG6MvF8jpNnJ7WkwIkXP_mJcuu4XNyqNXKuE=" 
                alt="landing image" 
                style={{ height: "100%", objectFit: 'contain' }}
            />
        </div>
    );

    // Calculate header height and update firstSectionHeight
    useEffect(() => {
        const header = document.querySelector('.header');
        if (header) {
            const newHeaderHeight = header.offsetHeight + 48;
            setHeaderHeight(newHeaderHeight);
            setFirstSectionHeight(`calc(100vh - ${newHeaderHeight}px)`);
        }

        fetchImages();
    }, []);

    const fetchImages = async () => {
        const data = await fetch('https://picsum.photos/v2/list');
        const jsonImage = await data.json();
        setImageList(jsonImage);
    };

    useEffect(() => {
        if (imageList && imageList.length > 0) {
            const currentImage = imageList[imageCount].download_url;
            const timer = setTimeout(() => {
                setImageElement(
                    <div 
                        className="carouselBox flex items-center justify-center" 
                        style={{ height: firstSectionHeight }}
                    >
                        <img 
                            data-aos="fade-zoom-in" 
                            src={currentImage} 
                            alt="landing image" 
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                );

                imageCount==2?setImageCount(0):setImageCount(imageCount+1)
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [imageCount, imageList, firstSectionHeight]);

    return (
        <div className="homePage flex flex-col my-5 items-center">
            <div 
                className="firstSection w-screen" 
                style={{ height: firstSectionHeight }}
            >
                {imageElement}
            </div>
            <div className="secondSection flex h-[100vh]">
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
