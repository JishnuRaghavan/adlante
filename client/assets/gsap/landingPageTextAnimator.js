import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

const landingTextAnimation = ()=>{
  gsap.to("h3", {duration: 3, text: "where fasion moves forward"})
  gsap.from("h2", {duration: 3, text: ""})
}

export default landingTextAnimation;