import { Navigation } from "../app/components/Navigation";
import '../../src/tailwind.css';

import { Products } from "../app/components/Products";
import { Technology } from "../app/components/Technology";
import { Footer } from "../app/components/Footer";

export default function Services() {
  return (
    <>
      <Navigation />
      <Products />
      {/* <Technology /> */}
      <Footer />
    </>
  );
}