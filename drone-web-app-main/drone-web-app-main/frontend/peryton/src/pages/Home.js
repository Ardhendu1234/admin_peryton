import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaBriefcase,
  FaUser,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { blogData, customers, products, services } from "../constants/data";
import { MdGroups } from "react-icons/md";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { TbDrone } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import BlogPost from "../components/blogPost";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const handleScroll = () => {
    const position = window.scrollY;
    // console.log(10 + position / 10);
    setScrollPosition(position);
  };

  const incrementIndex = () => {
    if (index < products.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const decrementIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(products.length - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen relative top-0 max-w-s bg-gray-950 z-[-2]">
        <div
          className="w-full h-full bg-hero-pattern bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
          alt="home"
        >
          <img
            src="imgs/logo.png"
            alt="site-logo"
            className="md:h-20 h-12 w-auto z-10 m-4"
          />
          <img
            src="imgs/sub-logo.png"
            alt="site-logo"
            className="md:h-6 h-2 w-auto z-10"
          />
          <div className="flex flex-row overflow-hidden align-middle justify-center text-gray-400 gap-6 mt-12 text-3xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
      {/* <img
        src="imgs/drone.png"
        className={
          `w-96 h-auto absolute top-${15} right-10 z-10`
        }
        alt="drone"
      /> */}
      <div className="pb-[100px] bg-gray-950 relative pt-8 w-full">
        <div className="flex justify-between align-center w-[80%] mx-auto py-8">
          <h3 className="text-white text-4xl font-bold">Products</h3>
          <button className="text-white bg-gray-700 px-6 py-3 rounded font-bold uppercase hover:bg-blue-700">
            View All Products
          </button>
        </div>

        <div className="flex w-[80%] md:h-[80vh] h-[800px] min-w-[300px] mx-auto overflow-hidden shrink-0 rounded-md shadow-md">
          {products.map((item) => {
            return (
              <div
                className={`h-full min-w-full mx-auto bg-cover bg-center bg-no-repeat relative translate-x-[-${100*index}%] transition-transform duration-1000 ease-in-out`}
              >
                <img
                  src={item.coverImage}
                  alt={item.name}
                  className="h-full w-full opacity-40 object-cover bg-cover bg-center bg-no-repeat"
                />
                <div className="absolute py-8 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="px-0">
                    <div
                      className="px-4 py-16 mr-4 bg-[rgba(0,0,0,0.5)] cursor-pointer hover:bg-[rgba(255,255,255,0.2)]"
                      onClick={decrementIndex}
                    >
                      <FaChevronLeft className="text-4xl text-gray-300 hover:text-blue-700 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex flex-col h-full py-8 items-center justify-between">
                    <h3 className="text-white text-3xl font-bold">
                      {item.name}
                    </h3>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[200px] h-[200px] rounded-[50%] shadow-md"
                    />
                    <p className="text-white text-lg text-center">
                      {item.description}
                    </p>
                    <button
                      className="text-white bg-gray-700 px-6 py-3 rounded font-bold hover:bg-blue-700"
                      onClick={() => {
                        navigate("/products/" + item.id);
                      }}
                    >
                      View Product
                    </button>
                  </div>
                  <div className="px-0">
                    <div
                      className="px-4 py-16 ml-4 bg-[rgba(0,0,0,0.5)] cursor-pointer hover:bg-[rgba(255,255,255,0.2)]"
                      onClick={incrementIndex}
                    >
                      <FaChevronRight className="text-4xl text-gray-300 hover:text-blue-700 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between align-center w-[80%] mx-auto py-8 my-8">
          <h3 className="text-white text-4xl font-bold">Services</h3>
          <button className="text-white bg-gray-700 px-6 py-3 rounded font-bold uppercase hover:bg-blue-700">
            View All Services
          </button>
        </div>

        <div className="flex md:flex-row flex-col gap-6 justify-between w-[80%] h-auto min-w-[300px] mx-auto overflow-hidden shrink-0 rounded-md shadow-md">
          {services.map((item) => {
            return (
              <div className="flex flex-col justify-start align-middle w-[380px] h-[380px] bg-gray-800 rounded-lg hover:bg-blue-700 p-12">
                <div className="text-white text-4xl mb-12">{item.icon}</div>
                <div className="text-white text-3xl font-bold">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>

        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            <div className="flex md:flex-row flex-col md:justify-between items-center gap-12 w-[80%] md:h-[300px] h-max py-12 min-w-[300px] mx-auto overflow-hidden shrink-0 rounded-md shadow-md bg-gray-800 mt-16">
              <div className="flex flex-col w-[25%] justify-center items-center">
                <MdGroups className="text-blue-700 text-5xl mb-4" />
                {isVisible && (
                  <div className="text-white text-4xl font-bold">
                    <CountUp end={1} duration={2} />
                    K+
                  </div>
                )}
                <div className="text-gray-400 text-2xl">Buyers</div>
              </div>
              <div className="flex flex-col w-[25%] justify-center items-center">
                <FaBriefcase className="text-blue-700 text-4xl mb-4" />
                {isVisible && (
                  <div className="text-white text-4xl font-bold">
                    <CountUp end={110} duration={2} />+
                  </div>
                )}
                <div className="text-gray-400 text-2xl">Projects</div>
              </div>
              <div className="flex flex-col w-[25%] justify-center items-center">
                <TbDrone className="text-blue-700 text-5xl mb-4" />
                {isVisible && (
                  <div className="text-white text-4xl font-bold">
                    <CountUp end={25} duration={2} />+
                  </div>
                )}
                <div className="text-gray-400 text-2xl">Drones</div>
              </div>
              <div className="flex flex-col w-[25%] justify-center items-center">
                <FaUser className="text-blue-700 text-5xl mb-4" />
                {isVisible && (
                  <div className="text-white text-4xl font-bold">
                    <CountUp end={6} duration={2} />
                  </div>
                )}
                <div className="text-gray-400 text-2xl">Employees</div>
              </div>
            </div>
          )}
        </VisibilitySensor>

        <div className="flex justify-center align-center w-[80%] mx-auto py-8 pb-6 my-8">
          <button className="text-white bg-gray-700 px-6 py-3 rounded font-bold uppercase hover:bg-blue-700">
            View All Projects
          </button>
        </div>

        <div className="flex flex-col justify-center items-center w-[80%] mx-auto py-8 pb-6 my-8">
          <h3 className="text-white text-4xl font-bold">
            Our Sponsors and Partners
          </h3>
          <div className="text-gray-500">
            Driving technology for leading brands
          </div>

          <div className="flex md:flex-row flex-col gap-24 bg-gray-900 w-full h-auto p-12 m-12 mb-0 justify-center items-center rounded-md">
            {customers.map((item) => {
              return (
                <img src={item.image} alt={item.name} className="h-24 w-auto" />
              );
            })}
          </div>
        </div>

        <div className="flex justify-between align-center w-[80%] mx-auto py-8 my-8">
          <h3 className="text-white text-4xl font-bold">Blogs</h3>
          <button className="text-white bg-gray-700 px-6 py-3 rounded font-bold uppercase hover:bg-blue-700">
            View All Blogs
          </button>
        </div>

        <div className="flex md:flex-row flex-col gap-6 w-[80%] h-auto min-w-[300px] mx-auto overflow-hidden shrink-0 rounded-md shadow-md">
          {blogData.map((item) => {
            return (
              <BlogPost
                key={item.id}
                id={item.id}
                img={item.image}
                category={item.category}
                title={item.title}
              />
            );
          })}
        </div>

        <div className="flex justify-center align-center md:w-[70%] w-[80%] mx-auto py-8 pb-6 my-8">
          <div className="flex md:flex-row flex-col w-full">
            <div className="md:w-1/2 w-full flex flex-col justify-end">
              <div className="w-full md:h-3/4 h-max bg-gray-800 p-10">
                <h2 className="text-white text-5xl font-bold mb-12">
                  Let's talk about you project
                </h2>
                <Link
                  to="/contact"
                  className="bg-blue-700 py-4 px-16 text-white font-bold text-2xl mt-8 hover:bg-gray-700 hover:text-blue-700"
                >
                  Contact
                </Link>
              </div>
            </div>
            <img
              src="imgs/pexels-oleksandr-pidvalnyi-1093236-1024x681.jpg"
              alt="drone"
              className="md:w-1/2 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
