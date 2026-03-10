import { Navigation } from "../app/components/Navigation";
import { Features } from "../app/components/Features";
import { Stats } from "../app/components/Stats";
import { Footer } from "../app/components/Footer";

export default function About(){
  return (
    <>
      <Navigation/>
      <Features/>
      <Stats/>
      <Footer/>
    </>
  );
}