import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Bg1 from "../Images/Home/11111-scaled.jpg";
import Card1 from "../Images/Home/medal-1.png";
import Card2 from "../Images/Home/monitor-1.png";
import Card3 from "../Images/Home/trophy.png";
import Card4 from "../Images/Home/contract.png";
import Card5 from "../Images/Home/light-bulb.png";
import Card6 from "../Images/Home/monitor.png";
import C1 from "../Images/Home/java-logo.png";
import C2 from "../Images/Home/android-logo.png";
import C3 from "../Images/Home/integrated-circuit.png";
import C4 from "../Images/Home/programming-1.png";
import C5 from "../Images/Home/wireless-network.png";
import C6 from "../Images/Home/computer-microprocessor.png";
import C7 from "../Images/Home/ieee-mini-project.png";
import Img1 from "../Images/Home/Error-Correctiong-155-BCH-Decoder.jpg";
import Img2 from "../Images/Home/Fault-Tolerant-Parallel-Filters-Based-on-Error-Correction-hamming.jpg";
import Img3 from "../Images/Home/vlcsnap-2016-05-30-16h19m03s183-e1503642301751.png";
import Img4 from "../Images/Home/vlcsnap-2016-05-30-16h19m35s235-e1503642207612.png";
import Cardimg1 from "../Images/Home/secure.png";
import Cardimg2 from "../Images/Home/imageedit_1_5122020341.png";
import Cardimg3 from "../Images/Home/imageedit_1_8146938264.png";
import img1 from "../Images/Home/dictionary-932327_1920-e1503642535902.jpg";
import img2 from "../Images/Home/creativity-819371_1920-e1503642481135.jpg";

export const Home = () => {
  const cards = [
    {
      image: Card1,
      title: "PHD Guide",
      description:
        "Our mission is to help you complete a Phd so you can change the carrier.",
    },
    {
      image: Card2,
      title: "Online Projects",
      description:
        "Don’t Loss too much by Retailer,. Save more with Developers",
    },
    {
      image: Card3,
      title: "IEEE Projects",
      description:
        "Are you thinking of doing your IEEE research work in complete Ieee Xpert  level research environment",
    },
    {
      image: Card4,
      title: "Thesis and Journal",
      description:
        "PhD Thesis Writing program is offered for Indian scholars, where we provide complete consultation to PhD candidates in India.",
    },
    {
      image: Card5,
      title: "Technical Workshop",
      description:
        "Ieee Xpert provides customized training programs to corporate. The customized programs are been linked to suite corporate requirement.",
    },
    {
      image: Card6,
      title: "Web Development",
      description:
        "In tandem with web design, web development plays a vital role in your business site success.",
    },
  ];

  const counters = [
    { id: 1, number: 8000, description: "Successful Projects" },
    { id: 2, number: 500, description: "PHD Works" },
    { id: 3, number: 800, description: "Research Papers" },
    { id: 4, number: 2000, description: "Happy Customers" },
  ];

  const [countedValues, setCountedValues] = useState(
    counters.map((counter) => ({ ...counter, count: 0 }))
  );

  useEffect(() => {
    const animateCount = (target, duration) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setCountedValues((prev) =>
          prev.map((item) =>
            item.id === target.id ? { ...item, count: start } : item
          )
        );
        if (start >= target.number) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    countedValues.forEach((counter) => {
      animateCount(counter, 2000); // Adjust duration as needed
    });
  }, []);

  const card = [
    {
      image: C1,
      heading: "Java Projects",
      description: "within 24 hours",
    },
    {
      image: C4,
      heading: ".Net Projects",
      description: "within 24 hours",
    },
    {
      image: C2,
      heading: "Android Project",
      description: "within 24 hours",
    },
    {
      image: C5,
      heading: "NS2 Project",
      description: "within 24 hours",
    },
    {
      image: C3,
      heading: "Embedded Project",
      description: "within 48 hours",
    },
    {
      image: C6,
      heading: "VLSI Project",
      description: "within 24 hours",
    },
    {
      image: C7,
      heading: "IEEE",
      description: "Mini Project",
    },
  ];

  const images = [
    { src: Img1, name: "Image 1" },
    { src: Img2, name: "Image 2" },
    { src: Img3, name: "Image 3" },
    { src: Img4, name: "Image 4" },
  ];

  const card3 = [
    {
      image: Cardimg1,
      heading: "Low Cost",
      description:
        "Ieee Xpert offers the lowest prices on the market. Our prices start at just ₹3000 per project with all materials!",
    },
    {
      image: Cardimg2,
      heading: "Money Back Guarantee",
      description:
        "We offer a limited warranty, including free revisions, and the rights to request a refund.",
    },
    {
      image: Cardimg3,
      heading: "Privacy and Security",
      description:
        "We use an SSL 128 Bit encryption to protect your personal info and payment details. Your privacy is safe with us.",
    },
  ];

  const sections = [
    {
      heading: "10+ Year Experience",
      description:
        "In just 10 years of its existence, Ieee Xpert , India. has a pan India acclaim for its unmatched quality services with best engineering project titles.",
    },
    {
      heading: "Filled with Experts",
      description: "We grow through creativity, invention and innovation.",
    },
    {
      heading: "5000+ Customers",
      description: "Delivered more than 10000 Projects in various Domains.",
    },
  ];

  

  return (
    <>
      {/* herosection */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="flex items-center justify-center h-full relative z-10 text-white text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold mb-4">
              Welcome to IEEE Experts
            </h1>
            <p className="text-2xl md:text-xl mb-6">
              Ieee Xpert , India. Started sole mission of establishing a
              dedicated Research & Development (R&D) Cell and bringing the
              Finding to the benefit of budding Engineers with best Engineering
              Final Year Projects with Low Cost. 2022-2023 IEEE PROJECT TITLES
              For CSE,IT, ECE, EEE For
              M.E.,M.Tech.,B.E.,B.Tech.,M.Phil.,MCA.,Ph.D
            </p>
            <button className="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* card section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex items-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-50% h-20 "
                />
                <h2 className="text-xl font-semibold mb-2 ml-4">
                  {card.title}
                </h2>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* section-3 */}
      <div className="flex items-center justify-center h-64 bg-blue-400 text-white text-center">
        <div>
          <p className="text-2xl md:text-6xl font-bold mb-4">
            Doing a IEEE Research has never been so Easy.
          </p>

          <button className="bg-white text-blue-500 hover:bg-gray-200 font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>

      {/* Section-4 */}
      <div className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {countedValues.map((counter) => (
              <div
                key={counter.id}
                className="text-center p-6 bg-gray-800 rounded-lg shadow-md"
              >
                <h2 className="text-4xl font-bold mb-2">{counter.count}</h2>
                <p className="text-lg">{counter.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section-5 */}
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            You can order from us the following
          </h2>
          <h3 className="text-xl font-semibold mb-6 text-center">
            {" "}
            Our website works with the best professional developers in the
            field. You can find an assistant for any academic task on Ieee
            Xpert!
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {card.map((card, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-lg rounded-lg overflow-hidden mx-2"
              >
                <img
                  src={card.image}
                  alt={card.heading}
                  className="w-50% h-30 m-auto"
                />
                <div className="p-4 text-center">
                  <h4 className="text-xl font-bold mb-2">{card.heading}</h4>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section-6 */}
      <div>
        <h2 className="bg-purple-600 text-white text-center text-2xl py-4">
          OUR LATEST IEEE 2020 2021 PROJECTS
        </h2>
        <div className="flex justify-center space-x-4 py-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image.src}
                alt={image.name}
                className="w-72 h-48 object-cover transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {image.name}
              </div>
            </div>
          ))}
        </div>
        <h2 className="bg-purple-600 text-purple-600 text-center text-2xl py-4">
          OUR LATEST IEEE 2020 2021 PROJECTS
        </h2>
      </div>

      {/* section-7 */}
      <div className="py-8 bg-gray-100">
        <p className="text-2xl font-semibold text-center mb-6">Core Features</p>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {card3.map((card, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={card.image}
                  alt={card.heading}
                  className="w-50% h-40 m-auto"
                />
                <div className="p-4 text-center">
                  <h4 className="text-xl font-semibold mb-2">{card.heading}</h4>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section-8 */}
      <div className="bg-gray-700 py-8">
        <div className="container mx-auto px-4">
          <p className="text-2xl text-white font-semibold text-center mb-6">
            Our Mission
          </p>
          <p className=" text-gray-300 font-sm text-center mb-6">
            To be a leader in the Ieee Solutions industry by providing enhanced
            services, relationship and profitability. ONLINE IEEE VLSI , NS2 ,
            MATLAB , JAVA , ANDROID , DOTNET , POWER ELECTRONICS PROJECTS ON
            2016 2017{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              {sections.map((section, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl text-white font-semibold">
                    {section.heading}
                  </h3>
                  <p className="text-gray-300 text-sm">{section.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img
                src={img1}
                alt="Image 1"
                className="w-80% h-auto object-cover"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={img2}
                alt="Image 2"
                className="w-80% h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};
