import { useEffect, useState } from "react";

const useHeaderScrollingEffect  = ()=>  {

  const [prevScrollPos,setPrevScrollPos]  = useState(window.pageYOffset);

  const handleScroll  = ()=>  {

    const currentScrollPos  = window.pageYOffset;

    if(Math.abs(prevScrollPos-currentScrollPos) < 100){
      return;
    }

    if(prevScrollPos > currentScrollPos){
      handleScrollUp();
    }

    if(prevScrollPos < currentScrollPos){
      handleScrollDown();
    }

    setPrevScrollPos(currentScrollPos);
  }

  const handleScrollDown  = ()=>  {
    const headerComponent = document.querySelector('header');
    headerComponent.style.opacity = 0;
    headerComponent.style.visibility  = 'none';
  }

  const handleScrollUp  = ()=>  {
    const headerComponent = document.querySelector('header');
    headerComponent.style.opacity = 1;
    headerComponent.style.visibility  = 'visible';
  }

  useEffect(()=>{

    window.addEventListener('scroll',handleScroll);

    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[prevScrollPos]);
}

export default useHeaderScrollingEffect;