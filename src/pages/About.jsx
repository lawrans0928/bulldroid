import { Navigation } from "../app/components/Navigation";
import { AboutUs } from "../app/components/About_us";
// import { Stats } from "../app/components/Stats";
import { Footer } from "../app/components/Footer";

export default function About(){
  return (
    <>
      <Navigation/>
      <AboutUs/>
      {/* <Stats/> */}
      <Footer/>
    </>
  );
}