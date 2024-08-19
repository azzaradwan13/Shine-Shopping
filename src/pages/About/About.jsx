import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { motion } from "framer-motion"; // Ensure framer-motion is installed
import { paymentCard } from "../../assets/images"; // Make sure the path is correct
import Image from "../../components/designLayouts/Image";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [emailInfo, setEmailInfo] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  const handleSubscription = () => {
    if (emailInfo.trim() === "") {
      setErrMsg("Email cannot be empty.");
      return;
    }
    // Simulate a subscription process
    setSubscription(true);
    setErrMsg("");
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />

      {/* Main Content */}
      <section className="pb-10">
        <h1 className="text-base text-lightText mb-6 lg:mb-10">
          <span className="text-primeColor font-semibold text-lg lg:text-2xl">
            Shine,
          </span>{" "}
          Welcome to our wonderful world of MAKEUP! The world of more than 340
          million beauty-adepts who annually purchase over 50 million items from
          our websites in different countries. This is a place for inspiration.
          We offer an ever-increasing variety of beauty products and services to
          please even the most discerning taste. ‘You want it? We have it.’ –
          Our powerful idea that encapsulates our commitment to fulfilling all
          your beauty desires.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-12 bg-primeColor text-white rounded-lg shadow-lg hover:bg-black duration-300 text-base lg:text-lg">
            Continue Shopping
          </button>
        </Link>
      </section>

      {/* Subscription Section */}
      <section className="w-full pb-16">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 text-center">
          Subscribe to our newsletter.
        </h2>
        <div className="w-full flex flex-col items-center gap-6 lg:gap-8">
          <p className="text-center mb-4 text-base lg:text-lg">
            -You want it? We have it-
          </p>
          {subscription ? (
            <motion.p
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full text-center text-base lg:text-lg font-titleFont font-semibold text-green-600"
            >
              Subscribed Successfully!
            </motion.p>
          ) : (
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
              <div className="flex flex-col w-full max-w-md">
                <input
                  onChange={(e) => setEmailInfo(e.target.value)}
                  value={emailInfo}
                  className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                  type="email"
                  placeholder="Insert your email ...*"
                />
                {errMsg && (
                  <p className="text-red-600 text-sm font-semibold font-titleFont text-center mt-2">
                    {errMsg}
                  </p>
                )}
              </div>
              <button
                onClick={handleSubscription}
                className="bg-white text-lightText w-[30%] h-12 rounded-lg shadow-lg hover:bg-black hover:text-white duration-300 text-base lg:text-lg"
              >
                Subscribe
              </button>
            </div>
          )}

          <Image
            className={`w-[80%] lg:w-[60%] mx-auto ${
              subscription ? "mt-4" : "mt-6"
            }`}
            imgSrc={paymentCard}
          />
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full pb-16">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 text-center">
          Find Us Here
        </h2>
        <div className="relative w-full h-64 lg:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.096863083517!2d-122.41867668468117!3d37.77992697975815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a2b839a5b%3A0x471fc21a7986e5!2s1600%20Market%20St%2C%20San%20Francisco%2C%20CA%2094102%2C%20United%20States!5e0!3m2!1sen!2sin!4v1625565757648!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
