import React from "react";
import Header from "../../components/Header/Header";
import shopBg from "../../assets/imgs/hero.png";
import Footer from "../../components/Footer/Footer";
import Shopping from "../../components/Shopping/Shopping";
const Shop = () => {
  const title = `appreciate your author's work
`;
  const subtitle = "find your favorite book and read it here for free";
  return (
    <div>
      <Header title={title} bg={shopBg} subtitle={subtitle} />
      <Shopping />
      <Footer />
    </div>
  );
};

export default Shop;
