import React from "react";
import { Link } from "react-router-dom";
import saleImgOne from "../../../assets/images/sale/sll.webp";
import saleImgTwo from "../../../assets/images/sale/slll.webp";
import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";


const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="bg-[#f3f3f3] w-full md:w-1/2 lg:w-1/2 flex flex-col items-center">
        <div className="aspect-w-4 aspect-h-3 w-full mb-4">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
          </Link>
        </div>
        <div className="text-left h-auto w-full mx-4">
          <div className="mx-8">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
            Special Offers on eyeshadows
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Discover amazing deals and discounts on our wide range of eyeshadows.
            </p>
            <div className="mb-8">
              <Link to="/shop">
                <ShopNow />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f3] w-full md:w-1/2 lg:w-1/2 flex flex-col items-center">
        <div className="aspect-w-4 aspect-h-3 w-full mb-4">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
          </Link>
        </div>
        <div className="text-left h-auto w-full mx-4">
          <div className="mx-8">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
              Special Offers on lipsticks
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Discover amazing deals and discounts on our wide range of lipsticks.
            </p>
            <div className="mb-8">
              <Link to="/shop">
                <ShopNow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
