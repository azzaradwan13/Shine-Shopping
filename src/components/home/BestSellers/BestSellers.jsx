import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import  bestSellerOne  from "../../../assets/images/products/bestSeller/bs1.webp";
import  bestSellerTwo from "../../../assets/images/products/bestSeller/bs2.webp";
import  bestSellerThree  from "../../../assets/images/products/bestSeller/bs3.webp";
import  bestSellerFour from "../../../assets/images/products/bestSeller/bs4.webp";

 

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Elixir Ultime Oil Serum"
          price="35.00"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Cherry Radiance Oil"
          price="180.00"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Peach Moisturizing Lip"
          price="25.00"
          badge={true}
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Glow Hydrating Skint"
          price="220.00"
          badge={false}

        />
      </div>
    </div>
  );
};

export default BestSellers;
