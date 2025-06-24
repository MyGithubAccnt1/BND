import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Slider from "react-infinite-logo-slider";
import { getAssetPath } from "../utils/pathUtils";
import { NavLink } from "react-router-dom";

export function HeroWrapper({children}) {
  return(
    <div className="absolute top-0 left-0 w-full h-[85dvh] px-[30px]!">
      <div className="content-[''] bg-gradient-to-r from-white from-0% via-white via-25% to-transparent to-100% rounded-2xl h-[80dvh] w-full">
        <div className="w-full h-full lg:w-[40%] px-5! md:ps-[100px]! flex flex-col justify-center text-black">
          {children}
          <NavLink 
            to="/contact" 
            className="ms-auto text-center text-white font-bold bg-red-600 md:w-[50%] mt-2! py-2! px-3! hover:bg-red-500 hover:text-gray-100">
            BE OUR DISTRIBUTOR
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export function Hero1() {
  return(
    <>
      <span 
        className="text-[#001AC6] font-bold text-2xl md:text-4xl"
        style={{ fontFamily: "Russo One" }}
      >BUILD YOUR</span>
      <span 
        className="text-[#D50057] font-bold text-2xl md:text-4xl"
        style={{ fontFamily: "Russo One" }}
      >OWN BRAND</span>
      <span 
        className="text-[#34AADC] font-bold text-2xl md:text-4xl"
        style={{ fontFamily: "Russo One" }}
      >WITH US!</span>
      <ol>
        <li className="text-md md:text-1xl font-bold">✔ Pharmaceutical Drugs</li>
        <li className="text-md md:text-1xl font-bold">✔ OTC Medicines</li>
        <li className="text-md md:text-1xl font-bold">✔ Food Supplements</li>
        <li className="text-md md:text-1xl font-bold">✔ Medical Supplies</li>
      </ol>
    </>
  )
}

export function Hero2() {
  return(
    <>
      <span 
        className="text-[#CE5C00] font-bold text-2xl md:text-4xl"
        style={{ fontFamily: "Russo One" }}
      >Keep a healthy immune system by taking</span>
      <img src={getAssetPath("IMMUMAX.png")} className="md:w-[75%]" alt="IMMUMAX"/>
      <ol>
        <li className="text-md md:text-1xl font-bold">✔ Eliminates chronic and acute infections</li>
        <li className="text-md md:text-1xl font-bold">✔ Reverse development of atherosclerosis</li>
        <li className="text-md md:text-1xl font-bold">✔ Helps with the prevention of heart attack</li>
      </ol>
    </>
  )
}

export function Hero3() {
  return(
    <>
      <span 
        className="text-[#3681E2] font-bold text-2xl md:text-4xl"
        style={{ fontFamily: "Russo One" }}
      >INTRODUCING OUR OWN PRODUCTS</span>
      <span className="text-md md:text-1xl font-bold text-[#171F75]">WE OFFER WIDE RANGE OF ACCREDITED OTC MEDICINE AND MEDICAL SUPPLIES</span>
    </>
  )
}

export function Hero4() {
  return(
    <>
      <span className="text-md md:text-1xl font-bold">BND Pharma and Medical Supplies Distribution Corp.</span>
      <span 
        className="text-[#3681E2] font-bold text-2xl md:text-4xl"
        style={{ fontFamily: "Russo One" }}
      >YOUR PARTNER IN TOTAL HEALTHCARE</span>
    </>
  )
}

export default function Home() {
  const background = [
    {
      src: getAssetPath("hero1.jpg"),
      alt: "BND",
      className: "object-cover rounded-2xl h-[80dvh] w-full",
      child: <HeroWrapper><Hero1/></HeroWrapper>
    },
    {
      src: getAssetPath("hero2.jpg"),
      alt: "IMMUMAX",
      className: "object-cover rounded-2xl h-[80dvh] w-full",
      child: <HeroWrapper><Hero2/></HeroWrapper>
    },
    {
      src: getAssetPath("hero3.png"),
      alt: "BND",
      className: "object-cover rounded-2xl h-[80dvh] w-full",
      child: <HeroWrapper><Hero3/></HeroWrapper>
    },
    {
      src: getAssetPath("hero4.jpg"),
      alt: "BND",
      className: "object-cover rounded-2xl h-[80dvh] w-full",
      child: <HeroWrapper><Hero4/></HeroWrapper>
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: refImg, inView: inViewImg } = useInView({ threshold: 0.1, triggerOnce: true });

  function useCounter(target, duration = 500) {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (!inView) return;
  
      let start = 0;
      const steps = target > 500 ? 400 : 500;
      const stepTime = Math.floor(duration / steps);
      const increment = Math.max(Math.ceil(target / steps), 1);
  
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, stepTime);
  
      return () => clearInterval(interval);
    }, [inView, target, duration]);
  
    return { ref, count };
  }

  const c1 = useCounter(5);
  const c2 = useCounter(1);
  const c3 = useCounter(50);
  const c4 = useCounter(250);
  const c5 = useCounter(250);
  const c6 = useCounter(1000);
  const c7 = useCounter(200);
  const c8 = useCounter(150);
  const c9 = useCounter(250);
  const c10 = useCounter(15);
  const c11 = useCounter(2000);
  const c12 = useCounter(30);
  const c13 = useCounter(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === background.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  },);

  const groupOfCompanies = [
    { src: getAssetPath("icon.png"), alt: "BND Logo" },
    { src: getAssetPath("home2.png"), alt: "PhilRX Logo" },
    { src: getAssetPath("home3.png"), alt: "FSPC Logo" },
    { src: getAssetPath("home4.png"), alt: "P&D Medivet Logo" },
    { src: getAssetPath("home5.png"), alt: "Pet Prime Logo" },
  ];

  const style = {
    backgroundImage: `
      linear-gradient(158deg, rgba(84, 84, 84, 0.03) 0%, rgba(84, 84, 84, 0.03) 20%, rgba(219, 219, 219, 0.03) 20%, rgba(219, 219, 219, 0.03) 40%, rgba(54, 54, 54, 0.03) 40%, rgba(54, 54, 54, 0.03) 60%, rgba(99, 99, 99, 0.03) 60%, rgba(99, 99, 99, 0.03) 80%, rgba(92, 92, 92, 0.03) 80%, rgba(92, 92, 92, 0.03) 100%),
      linear-gradient(45deg, rgba(221, 221, 221, 0.02) 0%, rgba(221, 221, 221, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),
      linear-gradient(109deg, rgba(33, 33, 33, 0.03) 0%, rgba(33, 33, 33, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 25%, rgba(131, 131, 131, 0.03) 25%, rgba(131, 131, 131, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 50%, rgba(211, 211, 211, 0.03) 50%, rgba(211, 211, 211, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 75%, rgba(55, 55, 55, 0.03) 75%, rgba(55, 55, 55, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 100%),
      linear-gradient(348deg, rgba(42, 42, 42, 0.02) 0%, rgba(42, 42, 42, 0.02) 20%, rgba(8, 8, 8, 0.02) 20%, rgba(8, 8, 8, 0.02) 40%, rgba(242, 242, 242, 0.02) 40%, rgba(242, 242, 242, 0.02) 60%, rgba(42, 42, 42, 0.02) 60%, rgba(42, 42, 42, 0.02) 80%, rgba(80, 80, 80, 0.02) 80%, rgba(80, 80, 80, 0.02) 100%),
      linear-gradient(120deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 100.002%),
      linear-gradient(45deg, rgba(214, 214, 214, 0.03) 0%, rgba(214, 214, 214, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 100.002%),
      linear-gradient(59deg, rgba(224, 224, 224, 0.03) 0%, rgba(224, 224, 224, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 25%, rgba(143, 143, 143, 0.03) 25%, rgba(143, 143, 143, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 50%, rgba(34, 34, 34, 0.03) 50%, rgba(34, 34, 34, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 75%, rgba(249, 249, 249, 0.03) 75%, rgba(249, 249, 249, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 100%),
      linear-gradient(241deg, rgba(58, 58, 58, 0.02) 0%, rgba(58, 58, 58, 0.02) 25%, rgba(124, 124, 124, 0.02) 25%, rgba(124, 124, 124, 0.02) 50%, rgba(254, 254, 254, 0.02) 50%, rgba(254, 254, 254, 0.02) 75%, rgba(52, 52, 52, 0.02) 75%, rgba(52, 52, 52, 0.02) 100%),
      linear-gradient(90deg, #ffffff, #ffffff)
    `
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full h-[85dvh] px-[30px]! relative">
        <img
          src={background[currentIndex].src}
          alt={background[currentIndex].alt}
          className={background[currentIndex].className}
        />
        {background[currentIndex].child}
      </div>
      

      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col gap-5 md:flex-row md:gap-0">
        <img
          ref={refImg}
          src={getAssetPath("home1.jpg")}
          alt="home1.jpg"
          className={`w-full md:w-[40%] transform transition-all duration-700 ease-out ${
            inViewImg ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
        <div className="flex flex-col gap-5 px-5!">
          <h1
            className="text-[#6EC1E4] font-bold text-2xl"
            style={{ fontFamily: "Changa" }}
          >
            Brief Introduction
          </h1>
          <p
            className="text-justify text-[#7A7A7A]"
            style={{ fontFamily: "Karla" }}
          >
            A tripartite of well-known companies in pharmaceutical and
            veterinary industries in the Philippines, AMB-HK Group of Companies
            is engaged in the distribution of high quality medicines, medical
            devices, medical supplies and veterinary creations geared towards
            providing excellent products nationwide.
          </p>
          <p
            className="text-justify text-[#7A7A7A]"
            style={{ fontFamily: "Karla" }}
          >
            With the strong network of manufacturer tie-ups from China, India
            and Europe, the company is established to cater to the increasing
            demands of high quality yet price-competitive pharmaceutical and
            veterinary products that suit the needs of common and sophisticated
            customers.
          </p>
        </div>
      </div>

      <div className="bg-[#E0E0E0] dark:bg-[#2C2C2C] py-[50px]!">
        <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! mb-[30px]!">
          <h1
            className="text-[#6EC1E4] font-bold text-center text-3xl md:text-5xl"
            style={{ fontFamily: "Changa" }}
          >
            BND Group of Companies
          </h1>
        </div>

        <Slider
          duration={20}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={"#fff"}
        >
          {groupOfCompanies.map((company, index) => (
            <Slider.Slide key={index}>
              <img
                className="max-h-[150px] max-w-[200px] mx-auto!"
                src={company.src}
                alt={company.alt}
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>

      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col gap-[30px] mx-5! py-[50px]!">
        <h1
          className="text-[#6EC1E4] font-bold text-center text-3xl md:text-5xl"
          style={{ fontFamily: "Changa" }}
        >
          Overview of AMB's Success
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mx-5! md:justify-center lg:mx-0! flex-wrap lg:flex-nowrap">
          <div style={ style } className="border border-3 text-[#6EC1E4] rounded-2xl p-5! dark:bg-none! dark:bg-[#2C2C2C]">
            <h1
              className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
              style={{ fontFamily: "Changa" }}
            >
              TOP <span ref={c1.ref}>{c1.count}</span>
            </h1>
            <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
              Pharmaceutical Importer in Philippines (in terms of Sales)
            </p>
          </div>

          <div style={ style } className="border border-3 text-[#6EC1E4] rounded-2xl p-5! dark:bg-none! dark:bg-[#2C2C2C]">
            <h1
              className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
              style={{ fontFamily: "Changa" }}
            >
              TOP <span ref={c2.ref}>{c2.count}</span>
            </h1>
            <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
              Pharmaceutical Importer in Philippines (in terms of Volume)
            </p>
          </div>

          <div style={ style } className="border border-3 text-[#6EC1E4] rounded-2xl p-5! dark:bg-none! dark:bg-[#2C2C2C]">
            <h1
              className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
              style={{ fontFamily: "Changa" }}
            >
              <span ref={c3.ref}>{c3.count}</span>+
            </h1>
            <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
              GMP registered for foreign manufacturer
            </p>
          </div>

          <div style={ style } className="border border-3 text-[#6EC1E4] rounded-2xl p-5! dark:bg-none! dark:bg-[#2C2C2C]">
            <h1
              className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
              style={{ fontFamily: "Changa" }}
            >
              <span ref={c4.ref}>{c4.count}</span>+
            </h1>
            <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
              Partner distributors
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center mx-5!">
          <span className='content-[""] bg-[#7A7A7A] h-[1px] w-full'></span>
          <span className='absolute content-[""] bg-white dark:bg-transparent w-[40px] flex justify-center items-center'>
            <span className='content-[""] bg-black dark:bg-white rounded-full w-[20px] h-[20px] flex justify-center items-center'>
              <span className='content-[""] bg-white dark:bg-black rounded-full w-[7px] h-[7px]'></span>
            </span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mx-5! md:justify-center lg:mx-0! flex-wrap lg:flex-nowrap">
          <div style={ style } className="border border-3 text-[#6EC1E4] rounded-2xl p-5! dark:bg-none! dark:bg-[#2C2C2C]">
            <h1
              className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
              style={{ fontFamily: "Changa" }}
            >
              <span ref={c5.ref}>{c5.count}</span>+
            </h1>
            <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
              BND Employees
            </p>
          </div>

          <div style={ style } className="border border-3 text-[#6EC1E4] rounded-2xl p-5! dark:bg-none! dark:bg-[#2C2C2C]">
            <h1
              className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
              style={{ fontFamily: "Changa" }}
            >
              <span ref={c6.ref}>{c6.count}</span>+
            </h1>
            <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
              CPRs (Drugs Registered)
            </p>
          </div>

          <div style={ style } className="border border-3 text-[#6EC1E4] rounded-2xl p-5! dark:bg-none! dark:bg-[#2C2C2C]">
            <h1
              className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
              style={{ fontFamily: "Changa" }}
            >
              <span ref={c7.ref}>{c7.count}</span>+
            </h1>
            <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
              CPRs (Medical Devices Registered)
            </p>
          </div>

          <div style={ style } className="border border-3 text-[#6EC1E4] rounded-2xl p-5! dark:bg-none! dark:bg-[#2C2C2C]">
            <h1
              className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
              style={{ fontFamily: "Changa" }}
            >
              <span ref={c8.ref}>{c8.count}</span>+
            </h1>
            <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
              CPRs (Food Supplements Registered)
            </p>
          </div>

          <div style={ style } className="border border-3 text-[#6EC1E4] rounded-2xl p-5! dark:bg-none! dark:bg-[#2C2C2C]">
            <h1
              className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
              style={{ fontFamily: "Changa" }}
            >
              <span ref={c9.ref}>{c9.count}</span>+
            </h1>
            <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
              CPRs (Cosmetics Registered)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#E0E0E0] dark:bg-[#2C2C2C] py-[50px]!">
        <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col items-center gap-5 md:flex-row md:gap-0 px-5! md:px-0!">
          <h1
            className="text-[#6EC1E4] font-bold text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Changa" }}
          >
            Top Pharmaceutical Importers in the Philippines
          </h1>
          <img
            src={getAssetPath("home6.png")}
            alt="BND Ranking"
            className="object-contain w-full md:w-[50%]"
          />
        </div>
      </div>

      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col gap-5 px-5! md:px-0!">
        <h1
          className="text-[#6EC1E4] font-bold text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: "Changa" }}
        >
          What We Do
        </h1>
        <p
          className="text-justify text-[#7A7A7A]"
          style={{ fontFamily: "Karla" }}
        >
          AMB-HK Enterprises also specialized in creating OEM or in-house
          branding; as one of AMB's strengths is our satellite purchasing office
          in China that deals with more than 30 suppliers – Local and
          International manufacturers that are GMP accredited. Our company's
          capacity is beyond expectation as we can work and handle extensive
          requirements based on the client's desired packing, formula or
          molecule. We do not only create the brand for you but we will provide
          end to end support from documentation, registration and importation.
          All you have to do is create the brand in your mind and we will make
          it happen.
        </p>
      </div>

      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col md:flex-row gap-5">
        <div>
          <img
            src={getAssetPath("home7.jpg")}
            alt="DELCON FORTE"
            className="object-contain max-h-[950px]"
          />
        </div>
        <div>
          <img
            src={getAssetPath("home8.jpg")}
            alt="EPOTINE"
            className="object-contain max-h-[950px]"
          />
        </div>
        <div>
          <img
            src={getAssetPath("home9.jpg")}
            alt="GLOSARTAn"
            className="object-contain max-h-[950px]"
          />
        </div>
      </div>

      <div className="bg-[#E0E0E0] dark:bg-[#2C2C2C] py-[50px]! flex flex-col gap-y-5">
        <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col gap-5 px-5! md:px-0!">
          <h1
            className="text-[#6EC1E4] font-bold text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Changa" }}
          >
            Regional and National Distributors
          </h1>
          <p
            className="text-justify text-[#7A7A7A]"
            style={{ fontFamily: "Karla" }}
          >
            AMB-HK Enterprises is also engaged in partnership with top regional
            and national distributors in which they help to sustain a complex
            supply chain, serving as an important link in the healthcare system
            and delivering medicines safely, securely and efficiently.
            Distributors who work around the clock to help hundreds of thousands
            of pharmacies, hospitals, long-term care facilities, clinics and other
            healthcare providers across the country together with our objective of
            keeping our shelves stocked with the quality and affordable
            medications and products that patients need.
          </p>
        </div>

        <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col md:flex-row gap-5">
          <div>
            <img
              src={getAssetPath("home10.png")}
              alt=""
              className="object-contain"
            />
          </div>
          <div>
            <img
              src={getAssetPath("home11.png")}
              alt=""
              className="object-contain"
            />
          </div>
          <div>
            <img
              src={getAssetPath("home12.png")}
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] md:mx-auto! w-full flex flex-col gap-5 px-5! md:px-0!">
        <h1
          className="text-[#6EC1E4] font-bold text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: "Changa" }}
        >
          Strategic Fields
        </h1>
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-y-5">
          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                    .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                  `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <path
                className="cls-2"
                d="M59.32,70.69V94.42a1.46,1.46,0,0,0,1.47,1.46h6.94a1.46,1.46,0,0,0,1.46-1.46V70.75a12.46,12.46,0,0,1,10-12.18,5,5,0,0,0-2-9.73A22.37,22.37,0,0,0,59.32,70.69Z"
              ></path>
              <path
                className="cls-2"
                d="M96.24,73.5a1.1,1.1,0,0,1-1.44.34A16.79,16.79,0,0,0,73.16,78a.58.58,0,0,1-1-.35v-6.9a9.55,9.55,0,0,1,3.16-7.08.76.76,0,0,1,1.09.1,9.53,9.53,0,0,0,1.39,1.44.74.74,0,0,1,.16.94,10.67,10.67,0,0,0-1.39,5.9,1.46,1.46,0,0,0,1.52,1.38,1.51,1.51,0,0,0,1.4-1.58,7.71,7.71,0,0,1,1-4.32.76.76,0,0,1,.89-.33,13.15,13.15,0,0,0,4.14.65A1.52,1.52,0,0,0,87,66.35a1.46,1.46,0,0,0-1.52-1.42,10.17,10.17,0,0,1-4.36-1,7.65,7.65,0,0,1-1.77-1.23.75.75,0,0,1,.34-1.28h0a7.68,7.68,0,0,0,5.93-5.21.75.75,0,0,1,1-.45,9.5,9.5,0,0,1,2.38,1.72,1.45,1.45,0,0,0,1,.43,1.46,1.46,0,0,0,1-2.5,12.08,12.08,0,0,0-4.85-3,.74.74,0,0,1-.49-.54,7.85,7.85,0,0,0-3.59-5,.74.74,0,0,1-.1-1.2,7.17,7.17,0,0,1,2.51-1.44,1.49,1.49,0,0,0,1-1.74,1.46,1.46,0,0,0-1.87-1.06,10.2,10.2,0,0,0-1.93.85.75.75,0,0,1-.85-.06A6.12,6.12,0,0,0,75.77,41a1.46,1.46,0,0,0-1.08,1.87,1.5,1.5,0,0,0,1.74,1,3.21,3.21,0,0,1,1.95.16.75.75,0,0,1,.31,1.12c-.08.11-.16.22-.24.35a.75.75,0,0,1-.59.34,23.6,23.6,0,0,0-9.67,3.53,1.45,1.45,0,0,1-2.22-1c-1.2-6.61,1.94-14.06,8.48-16.14C93.51,26.16,107.5,57.39,96.24,73.5Z"
              ></path>
              <path
                className="cls-2"
                d="M59,20.76v24.4a21.78,21.78,0,0,0,1.8,8.69,1.09,1.09,0,0,0,1.83.29c.35-.4.71-.79,1.06-1.14a1.11,1.11,0,0,0,.25-1.15C61.37,45,63.28,36.58,68.8,32a1.07,1.07,0,0,0,.39-.84V20.76a1.46,1.46,0,0,0-1.46-1.47H60.42A1.46,1.46,0,0,0,59,20.76Z"
              ></path>
              <path
                className="cls-2"
                d="M53.47,70.69V90.76A1.46,1.46,0,0,1,52,92.23H45.07a1.47,1.47,0,0,1-1.47-1.47v-20a12.46,12.46,0,0,0-9.94-12.18,5,5,0,0,1,2-9.73A22.36,22.36,0,0,1,53.47,70.69Z"
              ></path>
              <path
                className="cls-2"
                d="M38.34,32.23C15.42,24.93-.17,71.6,26.7,81a13.6,13.6,0,0,0,13.47-2.24,1.49,1.49,0,0,0,.51-1.12V70.75a9.55,9.55,0,0,0-3.16-7.08.76.76,0,0,0-1.09.1A9.53,9.53,0,0,1,35,65.21a.74.74,0,0,0-.17.94,10.59,10.59,0,0,1,1.4,5.9,1.47,1.47,0,0,1-2.93-.16,7.58,7.58,0,0,0-1.05-4.36.75.75,0,0,0-.88-.33,13.15,13.15,0,0,1-4.14.65,1.52,1.52,0,0,1-1.48-1.5,1.45,1.45,0,0,1,1.51-1.42,8.93,8.93,0,0,0,6.14-2.22.74.74,0,0,0-.35-1.27,7.69,7.69,0,0,1-6-5.22.73.73,0,0,0-1-.45,9.73,9.73,0,0,0-2.39,1.72,1.41,1.41,0,0,1-1,.43,1.46,1.46,0,0,1-1-2.5,12.08,12.08,0,0,1,4.85-3A.74.74,0,0,0,27,51.9a7.79,7.79,0,0,1,3.59-5,.75.75,0,0,0,.1-1.2,7.16,7.16,0,0,0-2.53-1.44,1.49,1.49,0,0,1-1-1.74A1.46,1.46,0,0,1,29,41.42a10.2,10.2,0,0,1,1.93.85.75.75,0,0,0,.85-.06A6.11,6.11,0,0,1,37,41a1.46,1.46,0,0,1-.64,2.85,3.28,3.28,0,0,0-2,.16.75.75,0,0,0-.31,1.11l.24.36a.73.73,0,0,0,.58.34,23.41,23.41,0,0,1,9.67,3.53,1.46,1.46,0,0,0,2.23-1c1.2-6.6-1.94-14-8.49-16.14Z"
              ></path>
              <path
                className="cls-2"
                d="M53.84,17.1V45.16A21.78,21.78,0,0,1,52,53.85a1.09,1.09,0,0,1-1.83.29c-.36-.4-.72-.79-1.06-1.14a1.09,1.09,0,0,1-.25-1.15C51.42,45,49.52,36.58,44,32a1.08,1.08,0,0,1-.4-.84V17.1a1.46,1.46,0,0,1,1.47-1.46h7.31a1.46,1.46,0,0,1,1.46,1.46Z"
              ></path>
              <path
                className="cls-2"
                d="M86.38,74.5a13.89,13.89,0,1,0,13.89,13.89A13.91,13.91,0,0,0,86.38,74.5ZM91,89.85H87.84V93a1.47,1.47,0,0,1-2.93,0V89.85h-3.1a1.47,1.47,0,1,1,0-2.93h3.1v-3.1a1.47,1.47,0,1,1,2.93,0v3.1H91a1.47,1.47,0,0,1,0,2.93Z"
              ></path>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Nephrology
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <path
                className="cls-2"
                d="M53.43,29v8.78a23.73,23.73,0,0,1,11.78,0V28.64A8.93,8.93,0,1,0,53.43,29Z"
              ></path>
              <path
                className="cls-2"
                d="M32.88,42.38l6.21,6.21a23.74,23.74,0,0,1,8.33-8.33L41,33.8a8.93,8.93,0,1,0-8.09,8.58Z"
              ></path>
              <path
                className="cls-2"
                d="M27.82,66.38h8.77a23.73,23.73,0,0,1,0-11.78H27.47a8.93,8.93,0,1,0,.35,11.78Z"
              ></path>
              <path
                className="cls-2"
                d="M39.09,72.39l-6.46,6.46a8.93,8.93,0,1,0,8.58,8.08l6.21-6.21a23.65,23.65,0,0,1-8.33-8.33Z"
              ></path>
              <path
                className="cls-2"
                d="M65.21,92V83.22a23.73,23.73,0,0,1-11.78,0v9.12A8.93,8.93,0,1,0,65.21,92Z"
              ></path>
              <path
                className="cls-2"
                d="M85.77,78.6l-6.22-6.21a23.49,23.49,0,0,1-8.33,8.33l6.46,6.46a8.93,8.93,0,1,0,8.09-8.58Z"
              ></path>
              <path
                className="cls-2"
                d="M97.71,51.36a8.91,8.91,0,0,0-6.88,3.24H82.05a23.73,23.73,0,0,1,0,11.78h9.12a8.94,8.94,0,1,0,6.54-15Z"
              ></path>
              <path
                className="cls-2"
                d="M79.56,48.59,86,42.13a8.93,8.93,0,1,0-8.57-8.08l-6.22,6.21a23.68,23.68,0,0,1,8.34,8.33Z"
              ></path>
              <path
                className="cls-2"
                d="M67.13,44.35a17.93,17.93,0,1,0,9.13,22A18,18,0,0,0,67.13,44.35ZM55.57,67.93H50V62.38h5.55Zm.86-10.71a2.2,2.2,0,1,1,2.2-2.2A2.21,2.21,0,0,1,56.43,57.22Zm4.92,11.45a3.21,3.21,0,1,1,3.21-3.2A3.2,3.2,0,0,1,61.35,68.67Zm5.21-8a5.21,5.21,0,1,1,5.2-5.21A5.21,5.21,0,0,1,66.56,60.69Z"
              ></path>
              <circle className="cls-2" cx="53.08" cy="64.97" r="4.68"></circle>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Oncology Anti-Infectives
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <path
                className="cls-2"
                d="M56.24,15.23V38.57c-.66,4.21-3,9.92-15.24,17.63C28.11,64.29,26,85.71,26,85.92a3.47,3.47,0,1,0,6.9.7c.51-5.08,3.63-19.4,11.82-24.55,6.74-4.25,11.47-8.4,14.45-12.69a.71.71,0,0,1,1.14,0c3,4.29,7.7,8.44,14.45,12.69,3.58,2.26,6.54,6.42,8.8,12.36a51.72,51.72,0,0,1,3,12.19,3.47,3.47,0,0,0,6.91-.7h0c0-.21-2.14-21.63-15-29.72C66.16,48.49,63.84,42.78,63.19,38.68V15.23a3.47,3.47,0,0,0-6.94,0Z"
              ></path>
              <path
                className="cls-2"
                d="M98.28,92.59a15.23,15.23,0,0,0,4.82-10.13c0-.48,1.36-45.58-21.53-57.95a8.5,8.5,0,0,0-7.9-.34h0l-.08.05A3.67,3.67,0,0,0,71.69,28a38.2,38.2,0,0,1-2.25,17.11c-.21.56-.4,1.13-.59,1.69a43.33,43.33,0,0,0,8.06,6.75,14.84,14.84,0,0,0,1.76-2.5,8.26,8.26,0,0,1-2.85-6.63.7.7,0,0,1,1.39.12,6.76,6.76,0,0,0,2.11,5.2,13.43,13.43,0,0,0,.79-2.23A13.72,13.72,0,0,0,80.24,41a.7.7,0,1,1,1.34-.38,15.09,15.09,0,0,1,.08,6.26A7,7,0,0,0,86,44.1a.69.69,0,0,1,1-.2.68.68,0,0,1,.21,1,8.41,8.41,0,0,1-5.85,3.46,16.08,16.08,0,0,1-1.13,2.91l-.06.1a16.36,16.36,0,0,1-2,3l1.08.7a25.46,25.46,0,0,1,6.68,6.28,15.86,15.86,0,0,1,3-.77,15.21,15.21,0,0,1,3.1-.14A8.41,8.41,0,0,1,97.14,56a.69.69,0,0,1,.84.5.7.7,0,0,1-.5.85,7.06,7.06,0,0,0-4,3.22,15,15,0,0,1,5.9,2.08.7.7,0,0,1,.18,1,.69.69,0,0,1-.58.3.71.71,0,0,1-.39-.12,14,14,0,0,0-6.22-2,14.39,14.39,0,0,0-2.37,0,6.81,6.81,0,0,0,4.26,3.67.7.7,0,0,1,.51.84.69.69,0,0,1-.67.53l-.17,0A8.23,8.23,0,0,1,88.55,62a14.08,14.08,0,0,0-1.86.47c6.8,9.91,8.12,23.14,8.14,23.31a4.87,4.87,0,0,1-4.36,5.31l-.48,0a4.85,4.85,0,0,1-4.83-4.37,50.94,50.94,0,0,0-2.93-11.84,30.34,30.34,0,0,0-4.59-8.33A15.8,15.8,0,0,0,76,69a8.24,8.24,0,0,1,2.88,6.62.69.69,0,0,1-.69.63h-.06a.69.69,0,0,1-.63-.75,6.76,6.76,0,0,0-2.16-5.21A14.24,14.24,0,0,0,74.5,79a.69.69,0,1,1-1.33.39A14.62,14.62,0,0,1,73,73.16,7.23,7.23,0,0,0,68.73,76a.67.67,0,0,1-.58.32.69.69,0,0,1-.37-.1.7.7,0,0,1-.22-1,8.51,8.51,0,0,1,5.81-3.49,15.71,15.71,0,0,1,3.33-6.19A14.53,14.53,0,0,0,74,63.24a70.61,70.61,0,0,1-8.13-5.87l0,.15c-2.06,9.87-4.55,27.68,1.84,36a11.87,11.87,0,0,0,9.17,4.63c9.68.58,16.89-1.3,21.44-5.59Z"
              ></path>
              <path
                className="cls-2"
                d="M45.42,63.24a15.53,15.53,0,0,0-3.63,3.31,16.53,16.53,0,0,1,3.45,6.32A8.5,8.5,0,0,1,51,76.36a.7.7,0,0,1-.59,1.07.67.67,0,0,1-.58-.32,7.13,7.13,0,0,0-4.3-2.79,14.83,14.83,0,0,1-.14,6.25.71.71,0,0,1-.67.5.63.63,0,0,1-.19,0,.69.69,0,0,1-.47-.86,13.69,13.69,0,0,0-.05-6.42.56.56,0,0,1,0-.12,15.09,15.09,0,0,0-.76-2.23,6.78,6.78,0,0,0-2.17,5.21.69.69,0,0,1-.63.75h-.06a.69.69,0,0,1-.69-.64,8.27,8.27,0,0,1,2.9-6.63,16.44,16.44,0,0,0-1.67-2.42C36.51,73.85,34.64,83,34.26,86.76a4.86,4.86,0,0,1-9.67-1c0-.16,1.23-12.4,7.37-22.14a15.32,15.32,0,0,0-1.91-.49A8.27,8.27,0,0,1,24.68,68l-.17,0a.69.69,0,0,1-.16-1.37A6.8,6.8,0,0,0,28.61,63a14.39,14.39,0,0,0-2.37,0,13.9,13.9,0,0,0-6.21,2,.66.66,0,0,1-.4.13.71.71,0,0,1-.57-.3.69.69,0,0,1,.18-1,14.86,14.86,0,0,1,5.89-2.08,7.19,7.19,0,0,0-4-3.22.69.69,0,0,1,.34-1.34,8.4,8.4,0,0,1,5.17,4.43,15.21,15.21,0,0,1,3.1.14,16.7,16.7,0,0,1,3,.76,26.12,26.12,0,0,1,7.44-7.37,17.06,17.06,0,0,1-1.78-2.68,17,17,0,0,1-1.13-2.92A8.45,8.45,0,0,1,31.44,46a.68.68,0,0,1,.21-.95.69.69,0,0,1,1,.2A7.05,7.05,0,0,0,36.93,48,14.92,14.92,0,0,1,37,41.78a.68.68,0,0,1,.85-.48.69.69,0,0,1,.48.86,13.76,13.76,0,0,0,.12,6.44h0s0,0,0,.07a16.43,16.43,0,0,0,.79,2.23,6.75,6.75,0,0,0,2.12-5.21.71.71,0,0,1,.63-.76.69.69,0,0,1,.75.63,8.28,8.28,0,0,1-2.85,6.65,17.23,17.23,0,0,0,1.43,2.09,47.6,47.6,0,0,0,8.94-7.2l-.69-2A37.58,37.58,0,0,1,47.35,28a3.72,3.72,0,0,0-1.91-3.78l-.07,0h0a8.48,8.48,0,0,0-7.89.34C14.57,36.89,15.92,82,15.94,82.43a15.32,15.32,0,0,0,4.83,10.18c4.55,4.28,11.75,6.15,21.41,5.57a11.88,11.88,0,0,0,9.18-4.63c6.36-8.3,3.92-26,1.87-35.92A70.37,70.37,0,0,1,45.42,63.24Z"
              ></path>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Respiratory Drugs Anti-Allergy
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <g id="Layer_15" data-name="Layer 15">
                <path
                  className="cls-2"
                  d="M104,41a5.8,5.8,0,0,0-2.86-3.16c-3.32.17-7.79,4-7.84,4a.77.77,0,0,1-1,0c-5.53-4.53-15.38-2.72-18.66-2A22.57,22.57,0,0,0,62,52.32a.76.76,0,0,1-.71.46.85.85,0,0,1-.31-.06.78.78,0,0,1-.4-1C66.33,38.14,78.05,36.44,85,35.42c2.41-.34,4.49-.65,5.48-1.3.1-.06.36-.47.51-1.63.3-2.25-.12-5.28-.66-5.9-1-1.16-10.51.29-13.7,2.12a.78.78,0,0,1-1.16-.78c.08-.54.19-1.22.31-2,.36-2.12,1.08-6.54.25-7.41a7.06,7.06,0,0,0-3.4.11,4.24,4.24,0,0,0-2.11.87c-.07.85,0,1.93,0,3.06.11,2.94.22,6.24-1.91,8.35a37.75,37.75,0,0,1-8.24,5.63c-4.72,2.61-9.16,5.08-11.21,10.79a.76.76,0,0,1-1,.46.77.77,0,0,1-.47-1,16.93,16.93,0,0,1,5.75-7.74,1,1,0,0,0-.06-.22c-1.57-4.47-.85-7.76,2.45-11l.71-.7c1.6-1.58,5-4.85,5-5.87,0-.41-.77-1.66-2.44-3.08s-3.19-2.12-3.76-2c-2.89.48-10,6.14-11.63,10.33a10,10,0,0,1,.87,3.34.76.76,0,0,1-.76.77.73.73,0,0,1-.79-.75c0-3.1-5.3-11.66-7.87-12-3.48-.47-7,3-7.19,4.5-.27,1.79,1.89,4.82,4,7.74,2.39,3.36,4.87,6.82,4.84,9.71,0,1.56-1.19,2.74-2.69,4.22-2.57,2.57-6.45,6.44-7.29,15.25-1.16,12,4.78,28.21,14.09,38.5,4,4.37,10.31,9.58,18.09,9.61h0c6.52,0,13.45-4.82,19-13.23,7.45-11.3,12.07-29.39,5.78-44.47a10.9,10.9,0,0,0-8.2,2.18.77.77,0,0,1-.91-1.25c8.58-6.26,16.75.31,21.14,3.85a18.15,18.15,0,0,0,2.56,1.87c.92-.37,3.58-3.23,3.51-4-.82-1.35-4.43-4.49-5.76-5.57A.78.78,0,0,1,95.9,46a.84.84,0,0,1,.55-.59s5.22-1.57,7.35-3.24C103.94,42,104.28,41.77,104,41ZM38.1,73.31l-.53.45a.72.72,0,0,1-.51.2.77.77,0,0,1-.5-1.36l.53-.46c1.33-1.15,2.74-2.35,4-3.67-2-1-4.17-1.2-5.51-.57a.77.77,0,1,1-.67-1.39c2.27-1.08,5.32-.26,7.28.77a13.64,13.64,0,0,0,3-5.32,15.93,15.93,0,0,0,.53-7.29.77.77,0,0,1,.62-.9.75.75,0,0,1,.89.62,17.25,17.25,0,0,1-.46,7.54,6.61,6.61,0,0,1,5,6.31.78.78,0,0,1-1.55,0c0-2.27-1.93-4.62-3.88-4.82A13.78,13.78,0,0,1,45,66.11c2,2.92,2,7.59,1.85,10.15a.78.78,0,0,1-.77.73H46a.79.79,0,0,1-.72-.82c.13-1.8.22-6-1.26-8.68A41.75,41.75,0,0,1,38.1,73.31ZM76.72,73a.8.8,0,0,1,1.08.2.77.77,0,0,1-.2,1.08,9.09,9.09,0,0,1-5.23,1.6,11,11,0,0,1-2.8-.39,19.78,19.78,0,0,1,3.48,8.26.76.76,0,0,1-.63.89l-.12,0a.76.76,0,0,1-.76-.65c-1-5.75-4.11-9.06-7.7-12.91-1-1.07-2-2.18-3-3.37-2.3,10-.23,18,6.33,24.37a.75.75,0,0,1,0,1.09.72.72,0,0,1-.55.24.77.77,0,0,1-.53-.22A26.66,26.66,0,0,1,61.84,88c-2.11,1.19-3.51,5.38-3.86,6.91a.79.79,0,0,1-.76.61l-.17,0a.79.79,0,0,1-.59-.93c.07-.26,1.47-6.13,4.63-7.91a23.74,23.74,0,0,1-2.71-10.39C56,81.43,52.71,86.67,47.36,90a.77.77,0,0,1-.41.11.73.73,0,0,1-.64-.36.76.76,0,0,1,.24-1.07,22.22,22.22,0,0,0,5.6-5,9.27,9.27,0,0,1-1.52.12,21.27,21.27,0,0,1-7.7-1.64.78.78,0,0,1,.65-1.42c2.74,1.25,8.14,2.21,10,.85,0,0,.1,0,.14-.06A80,80,0,0,0,58.52,72,40.82,40.82,0,0,1,59.6,66.2,25.11,25.11,0,0,1,57,61.44a26.94,26.94,0,0,0-2.26-4.18A.78.78,0,0,1,56,56.37a26.67,26.67,0,0,1,2.38,4.42A23.47,23.47,0,0,0,61,65.57c1.28,1.6,2.63,3.06,3.93,4.45,1,1,1.93,2.09,2.84,3.15l.09,0C69.76,74.1,73.38,75.28,76.72,73Z"
                ></path>
              </g>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Cardiovascular Drugs
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <path
                className="cls-2"
                d="M40.71,58.18a3.7,3.7,0,1,0,3.7,3.69A3.7,3.7,0,0,0,40.71,58.18Z"
              ></path>
              <path
                className="cls-2"
                d="M59.26,28.69a3.7,3.7,0,1,0-3.69,3.7A3.69,3.69,0,0,0,59.26,28.69Z"
              ></path>
              <path
                className="cls-2"
                d="M60.52,69.53a3.07,3.07,0,1,0,3.07-3.07A3.08,3.08,0,0,0,60.52,69.53Z"
              ></path>
              <path
                className="cls-2"
                d="M38.69,35.82a3.7,3.7,0,1,0,3.7,3.69A3.7,3.7,0,0,0,38.69,35.82Z"
              ></path>
              <path
                className="cls-2"
                d="M78.33,34.8a4.72,4.72,0,1,0,4.72,4.71A4.71,4.71,0,0,0,78.33,34.8Z"
              ></path>
              <path
                className="cls-2"
                d="M86.51,27.16A34.72,34.72,0,0,0,51.1,15.59c-9.78,2.51-20.84,9.87-26,29.27a5.91,5.91,0,0,0,1.28,4.76c.94,1.38,1.84,3.4.72,5.5L20.35,65.56a4.11,4.11,0,0,0-.49,3.55,3.67,3.67,0,0,0,2.42,2.19l3.9,1.1a3.12,3.12,0,0,1-.1,3.47,2.69,2.69,0,0,0,2.25,2.4S25.14,82.52,30,83.49v6.92a3.36,3.36,0,0,0,2.22,3.15,2.9,2.9,0,0,0,1.29.22h9.27a2,2,0,0,1,2,2v9.68a2,2,0,0,0,2,2H76.94a2,2,0,0,0,2-2V84.55A5.89,5.89,0,0,1,81.1,80a36.61,36.61,0,0,0,3.71-3.45,37.64,37.64,0,0,0,1.7-49.38ZM78.33,45.68a6.15,6.15,0,0,1-4.8-2.34l-6.78,4.13a9.92,9.92,0,0,1-5.1,13.74l1.26,3.87a5.05,5.05,0,0,1,.68-.07,4.58,4.58,0,1,1-2.06.52l-1.26-3.88a9.64,9.64,0,0,1-2.35.3,10,10,0,0,1-8.23-4.37L45.49,60a5.22,5.22,0,1,1-.73-1.26L49,56.31a9.87,9.87,0,0,1,.24-9.08L42.54,42.9a5.17,5.17,0,1,1,.8-1.21L50,46a9.94,9.94,0,0,1,6.2-3.79l-.85-8.41a5.13,5.13,0,1,1,1.44-.14l.85,8.41.28,0A10,10,0,0,1,66,46.23l6.77-4.12a6.15,6.15,0,1,1,5.57,3.57Z"
              ></path>
              <path
                className="cls-2"
                d="M57.92,43.52A8.49,8.49,0,1,0,66.4,52,8.5,8.5,0,0,0,57.92,43.52Zm0,4.36A4.14,4.14,0,0,0,53.78,52a.72.72,0,0,1-.72.72.73.73,0,0,1-.73-.72,5.6,5.6,0,0,1,5.59-5.59.73.73,0,0,1,0,1.46Z"
              ></path>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              CNS Drugs Analgesic, Anaesthetic
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <path
                className="cls-2"
                d="M83.69,35.27a4.78,4.78,0,0,0-4.77-4.77,7.52,7.52,0,0,0-6.28,3.37l-.49.72H69.83a7.91,7.91,0,0,0-5.62,2.33l-1,1-1.77-1.76a5.21,5.21,0,0,0-7.38,0L52.19,38l-2.58-3.44a6.82,6.82,0,0,0-12.27,4.09V43a7.92,7.92,0,0,0,2.33,5.62l1,1L39.2,51a6.35,6.35,0,0,0,4.49,10.84h.41a4.15,4.15,0,0,0,3.71-6l-1.08-2.17,1.1-2.22a3.84,3.84,0,0,0,.42-1.76,4,4,0,0,0-1.75-3.28l-1.73-1.15L46.28,43,48,44.15l.35.25,3.82.77A17.16,17.16,0,0,0,59.66,45l3.64-.91,3.36,1.12a5.72,5.72,0,0,0,1.84.3h0a5.83,5.83,0,0,0,5.66-4.42l.26-1h4.47A4.78,4.78,0,0,0,83.69,35.27ZM45.52,53.14a13,13,0,0,1-.67,4.14l-.76,2.28L41.5,58.7l.76-2.28a10.21,10.21,0,0,0,.54-3.28,10.34,10.34,0,0,0-1.74-5.75l-.76-1.13,2.27-1.52.75,1.14A13,13,0,0,1,45.52,53.14ZM58.59,42.77A31.66,31.66,0,0,1,46.05,40.2l-3.79-1.63,1.07-2.5,3.8,1.62A29.05,29.05,0,0,0,74,35.62l3.5-2.18L79,35.75l-3.49,2.18A31.78,31.78,0,0,1,58.59,42.77Z"
              ></path>
              <path
                className="cls-2"
                d="M78.24,51.28A12.5,12.5,0,0,0,75.92,44a8.56,8.56,0,0,1-7.39,4.24h0a8.53,8.53,0,0,1-2.7-.44l-2.61-.87-2.87.71a19.82,19.82,0,0,1-8.67.21l-1-.2A6.78,6.78,0,0,1,51,49.7a6.7,6.7,0,0,1-.71,3l-.5,1,.48,1a7,7,0,0,1,.6,1.77H61.24a24.73,24.73,0,0,0,9.14-1.77,9.52,9.52,0,0,1-.32-2.45V51h2.73v1.23a7.14,7.14,0,0,0,5.72,7L78,61.83a9.84,9.84,0,0,1-6.55-4.68,27.47,27.47,0,0,1-4,1.26,6.11,6.11,0,0,1-2.28,11l-6.82,1.36a2.38,2.38,0,0,0,.47,4.72h3.07v2.73H58.81a5.11,5.11,0,0,1-1-10.12l6.81-1.36a3.39,3.39,0,0,0,.85-6.34l-2.64-1.32c-.53,0-1.06.05-1.59.05H50.83a6.9,6.9,0,0,1-6.29,5.44L42.7,69.18l-2.53-1,1.52-3.81a9.18,9.18,0,0,1-3.32-1.5,10.53,10.53,0,0,0-1,4.52,5.39,5.39,0,0,0,5.39,5.38,5.46,5.46,0,0,0,3-.88,10,10,0,0,1,8.73-8.14L59,63.23l.3,2.71-4.59.51a7.27,7.27,0,0,0,.8,14.49A24,24,0,0,0,76.21,69.06l2.51-4.3,1.38-.34a4.75,4.75,0,0,0,0-9.21l-1.86-.47V51.28Zm-10.9,2.4H53.7V51H67.34ZM74.52,66a17.15,17.15,0,0,1-6.43,7.92l-1.51-2.27A14.4,14.4,0,0,0,72,65l.91-2.25,2.53,1Z"
              ></path>
              <path
                className="cls-2"
                d="M89,75.79l1.85-7.41A33.21,33.21,0,0,0,89.5,48L89,46.8l.27-.55A50.56,50.56,0,0,0,94.6,23.76V21H26.44v2.8a50.42,50.42,0,0,0,5.31,22.49l.27.55L31.54,48a32.9,32.9,0,0,0-2.38,12.32,33.6,33.6,0,0,0,1,8L32,75.79l-.39.52A39.77,39.77,0,0,0,23.71,100H45.52A17,17,0,0,0,38,86.17l1.51-2.27A19.69,19.69,0,0,1,48.25,100H53.7V91.85a2.74,2.74,0,0,1,2.73-2.73h8.18a2.73,2.73,0,0,1,2.72,2.73V100h5.46A19.7,19.7,0,0,1,81.57,83.9l1.52,2.27A16.94,16.94,0,0,0,75.52,100H97.33a39.77,39.77,0,0,0-7.91-23.72ZM81,51.28v1.34a7.47,7.47,0,0,1-.21,14.44l-.27.07-1.92,3.3a26.78,26.78,0,0,1-23,13.24A10,10,0,0,1,45.61,75a8.11,8.11,0,0,1-11-7.58A13.26,13.26,0,0,1,36,61.48l.33-.66a9.08,9.08,0,0,1,.51-11.28A10.57,10.57,0,0,1,34.62,43V38.68A9.54,9.54,0,0,1,51.79,33l.7.93a8,8,0,0,1,10.82.2,10.57,10.57,0,0,1,6.52-2.22h.89a10.24,10.24,0,0,1,8.2-4.09,7.5,7.5,0,1,1,0,15h-.53A15.2,15.2,0,0,1,81,51.28Z"
              ></path>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              GIT Drugs
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <path
                className="cls-2"
                d="M22.12,48.46a1.4,1.4,0,0,0,1.26.09,56.74,56.74,0,0,1,21.24-4.64c13.32,0,21,5.06,34.68,4.77a71.71,71.71,0,0,0,18.44-2.44,1.4,1.4,0,0,0,1-1.44l-.33-4.7A1.39,1.39,0,0,0,97,38.81a1.17,1.17,0,0,0-.26,0,69.8,69.8,0,0,1-36-.17l-1.85-4.45a9.35,9.35,0,0,1,6.89-4.44l.88-.08a1.4,1.4,0,0,0,1.23-1.52c-.27-1.78-2.29-1.17-3.52-1V24.93a1.39,1.39,0,0,0-2.78,0v3.23a11.32,11.32,0,0,0-3.92,3.12L55,25.07a1.35,1.35,0,0,0-1.59-.82l-4.88,1.16a1.42,1.42,0,0,0-.92.7,1.48,1.48,0,0,0-.07,1.15l3.68,9.56A56.61,56.61,0,0,0,22,41.29a1.38,1.38,0,0,0-.84,1.37l.33,4.72A1.39,1.39,0,0,0,22.12,48.46Z"
              ></path>
              <path
                className="cls-2"
                d="M97,71.76a69.34,69.34,0,0,1-36-.18,61.58,61.58,0,0,0-16.42-2.24A59.44,59.44,0,0,0,22.32,74.2a1.38,1.38,0,0,0-.85,1.28v4.78a1.4,1.4,0,0,0,1.43,1.38,1.34,1.34,0,0,0,.49-.1,54.59,54.59,0,0,1,37-2.48,82.59,82.59,0,0,0,12.29,2.28l-1.22,2.14a10,10,0,0,0-4,.35,6.3,6.3,0,0,0-1,.38l-2.33-2a1.39,1.39,0,0,0-1.81,2.11l1.45,1.23a6.57,6.57,0,0,1-5.11-.19,1.37,1.37,0,0,0-1.82.68h0c-.8,2.22,2.74,2.61,4.72,2.73,3.49.18,5.24-2.53,8.39-2.59L67.15,91a1.39,1.39,0,0,0,.52,1.88l.11,0,5.38,2.52a1.35,1.35,0,0,0,1.8-.59l.83-1.54.42,1.3a1.38,1.38,0,0,0,2.63-.83s-1.21-3.86-1.2-3.87l4.52-8.35a71.43,71.43,0,0,0,15.59-2.37,1.38,1.38,0,0,0,1-1.34V73.11a1.39,1.39,0,0,0-1.39-1.39A1.47,1.47,0,0,0,97,71.76Z"
              ></path>
              <path
                className="cls-2"
                d="M26.78,56.84c.28,7.53,14.19,7.51,14.46,0C41,49.33,27.05,49.32,26.78,56.84Zm8.55,0,.59,1.25a4.86,4.86,0,0,1-4.32,0,1.39,1.39,0,0,1,1.24-2.48,2.07,2.07,0,0,0,1.83,0Z"
              ></path>
              <path
                className="cls-2"
                d="M53,55.76c-8.92,3-1.58,13.45,5.93,11.51C67.9,64.26,60.51,53.83,53,55.76Zm4.25,7.66c-1.8.18-5.65-1.58-3.84-3.65a1.39,1.39,0,0,1,2,.15h0a2,2,0,0,0,1.67.72A1.38,1.38,0,0,1,58.53,62,1.4,1.4,0,0,1,57.28,63.42Z"
              ></path>
              <path
                className="cls-2"
                d="M70.94,51.1c-8.65,4.15-4.07,14.14,4.69,10.39C84.26,57.32,79.77,47.41,70.94,51.1Zm4.6,5.55c-1.07,1.46-5,3.05-5.27.33a1.4,1.4,0,0,1,1.45-1.33,2.12,2.12,0,0,0,1.66-.73C74.53,53.55,76.71,55.25,75.54,56.65Z"
              ></path>
              <path
                className="cls-2"
                d="M82.07,61.48c-4.57,5.62,5.87,15,11.12,9.24C97.8,64.77,87.08,55.88,82.07,61.48ZM90,67.29c-1.08,3.19-7.25-2-4.25-3.61a1.4,1.4,0,0,1,1.82.71h0a2.15,2.15,0,0,0,1.4,1.18,1.42,1.42,0,0,1,1,1.71Z"
              ></path>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Blood Drugs
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <path
                className="cls-2"
                d="M58.29,15.52c-21.79,0-39.53,13-39.53,29,0,.73,0,1.47.11,2.2A13.29,13.29,0,0,0,24,55.94a14.28,14.28,0,0,0,10.77,2.83A17.69,17.69,0,0,1,55,76.25a3.34,3.34,0,1,0,6.67,0A17.69,17.69,0,0,1,81.84,58.77a14.29,14.29,0,0,0,10.77-2.83,13.28,13.28,0,0,0,5.1-9.19,20.2,20.2,0,0,0,.11-2.19c0-16-17.73-29-39.53-29Z"
              ></path>
              <path
                className="cls-2"
                d="M55,84.25v22.33h6.67V84.25a8.64,8.64,0,0,1-6.67,0Z"
              ></path>
              <path
                className="cls-2"
                d="M37.29,63.92A12.34,12.34,0,0,0,25,76.25c0,13.42,9.57,24.33,21.33,24.33a3.34,3.34,0,0,0,3.34-3.33v-21A12.35,12.35,0,0,0,37.29,63.92Zm-.33,15H31.63V73.59H37Zm6,12H37.63V85.59H43Z"
              ></path>
              <path
                className="cls-2"
                d="M79.29,63.92A12.34,12.34,0,0,0,67,76.25v21a3.34,3.34,0,0,0,3.33,3.33c11.76,0,21.33-10.91,21.33-24.33A12.34,12.34,0,0,0,79.29,63.92Zm-.33,27H73.62V85.59H79Zm6-12H79.62V73.59H85Z"
              ></path>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Prostate Care
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <g id="Liver">
                <path
                  className="cls-2"
                  d="M42.56,33.22a31,31,0,0,0-5.29,2.29,5.83,5.83,0,0,0-3.65-2.63L26,31.05l1.44-5.67,8.64,2.48a10.14,10.14,0,0,1,5.73,4.21Z"
                ></path>
                <path
                  className="cls-2"
                  d="M72.93,72.21v32.85H66.76V73.12c2.34,0,4,.15,6.17-.91Z"
                ></path>
                <path
                  className="cls-2"
                  d="M79.26,23.65l-4.08,4.08a7.72,7.72,0,0,0-2.25,5.1,18,18,0,0,0-2.31,1,9.14,9.14,0,0,0-4-2A7.76,7.76,0,0,0,64.5,27.6l-4-4,4.36-4.36,5,5,5-5Z"
                ></path>
                <path
                  className="cls-2"
                  d="M76.05,62.75v1.4a7.15,7.15,0,0,1-7.14,7.15h-6a37.43,37.43,0,0,0,6.39-8.42,10.83,10.83,0,0,0,6.73-.13Z"
                ></path>
                <path
                  className="cls-2"
                  d="M97.35,33.78H78.28A14.7,14.7,0,0,0,72,35.19c2.44,3,2,6,2,9.78a36.66,36.66,0,0,1-3.8,16.29,9,9,0,0,0,6.48-.71,67.23,67.23,0,0,0,23.93-20.47,4,4,0,0,0-3.27-6.3ZM86.78,45.89c-5.29,4.41-5,4.28-5.48,4.28a.91.91,0,0,1-.91-.91.94.94,0,0,1,.33-.71l4.86-4.07a.93.93,0,0,1,1.29.12.92.92,0,0,1-.12,1.29Z"
                ></path>
                <path
                  className="cls-2"
                  d="M64.59,33.44h-12A30.22,30.22,0,0,0,22.34,63.65h0V77.54a8.71,8.71,0,0,0,8.71,8.7,35,35,0,0,0,17.33-4.57V75.49h-3a.92.92,0,0,1,0-1.83h2.9V65.58a11.22,11.22,0,0,1-4.27.85H34.24l-3.4,3.41a.93.93,0,0,1-.65.27.91.91,0,0,1-.91-.91.93.93,0,0,1,.27-.65l3-3-2.46-2.43a.92.92,0,0,1,0-1.29.91.91,0,0,1,1.29,0h0l2.83,2.83h9.83a9.43,9.43,0,0,0,4.27-1l7.25-3.7a12.87,12.87,0,0,1,3.77-8.14l1.89-1.9v-3.1a.92.92,0,1,1,1.83,0v2.57h2.13a.91.91,0,1,1,0,1.82H62.56l-1.9,1.9a11.17,11.17,0,0,0-3.25,7V74.4l4.83-5A35,35,0,0,0,72.14,45V41a7.52,7.52,0,0,0-7.53-7.51ZM44.84,44.49H41.91L44.28,47A.91.91,0,1,1,43,48.3h0l-2.93-3.11c-.69.46-.61.48-4.73,6.11a.91.91,0,1,1-1.53-1,.36.36,0,0,1,.07-.1L37.71,45a5.65,5.65,0,0,1,4.48-2.28h2.73a.91.91,0,1,1,0,1.82Z"
                ></path>
                <path
                  className="cls-2"
                  d="M55.55,60.93V100.5H50.14V63.68Z"
                ></path>
              </g>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Liver Drugs
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <g
                id="_12_Hair_Transplant_hair_plastic_surgery_transplant_aesthetic_hair"
                data-name="12, Hair Transplant, hair, plastic surgery, transplant, aesthetic, hair"
              >
                <path
                  className="cls-2"
                  d="M32.87,61.07a3.92,3.92,0,0,0,4.39-4.74,74.07,74.07,0,0,1-.55-29.82,70.59,70.59,0,0,0-7.2,30.63A4,4,0,0,0,32.87,61.07Z"
                ></path>
                <circle className="cls-2" cx="44.8" cy="80" r="1.66"></circle>
                <circle
                  className="cls-2"
                  cx="29.88"
                  cy="73.37"
                  r="1.66"
                ></circle>
                <path
                  className="cls-2"
                  d="M27,46.84H24.9a3.31,3.31,0,0,0-3.31,3.31v5h4.64A76.34,76.34,0,0,1,27,46.84Z"
                ></path>
                <path
                  className="cls-2"
                  d="M93.09,33.13A70.92,70.92,0,0,0,89,43.52H91.9A73.6,73.6,0,0,1,93.09,33.13Z"
                ></path>
                <path
                  className="cls-2"
                  d="M62.72,55.13a74,74,0,0,1,.74-8.29H39.1a68.68,68.68,0,0,0,1.3,8.29Z"
                ></path>
                <path
                  className="cls-2"
                  d="M69.35,61.07a3.92,3.92,0,0,0,4.39-4.74,74.07,74.07,0,0,1-.55-29.82A70.59,70.59,0,0,0,66,57.14,4,4,0,0,0,69.35,61.07Z"
                ></path>
                <path
                  className="cls-2"
                  d="M53.29,33.13a70.86,70.86,0,0,0-4.1,10.39h2.92A73.59,73.59,0,0,1,53.29,33.13Z"
                ></path>
                <circle
                  className="cls-2"
                  cx="61.38"
                  cy="71.71"
                  r="1.66"
                ></circle>
                <path
                  className="cls-2"
                  d="M68.88,64.35a7.28,7.28,0,0,1-6.09-5.91H40.57a7.24,7.24,0,0,1-14.26,0H21.59V85a3.32,3.32,0,0,0,3.31,3.32H96.2A3.32,3.32,0,0,0,99.52,85V58.44H77.05A7.24,7.24,0,0,1,68.88,64.35Zm-39,14a5,5,0,1,1,5-5A5,5,0,0,1,29.88,78.34ZM44.8,85a5,5,0,1,1,5-5,5,5,0,0,1-5,5Zm16.58-8.29a5,5,0,1,1,5-5A5,5,0,0,1,61.38,76.68ZM89.57,63.42a5,5,0,1,1-5,5A5,5,0,0,1,89.57,63.42ZM82.94,80a5,5,0,1,1-5-5A5,5,0,0,1,82.94,80Z"
                ></path>
                <path
                  className="cls-2"
                  d="M96.2,46.84H75.57a70.74,70.74,0,0,0,1.31,8.29H99.52v-5a3.32,3.32,0,0,0-3.32-3.31Z"
                ></path>
                <circle className="cls-2" cx="77.96" cy="80" r="1.66"></circle>
                <circle
                  className="cls-2"
                  cx="89.57"
                  cy="68.39"
                  r="1.66"
                ></circle>
              </g>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Dermatologicals
            </h1>
          </div>
        </div>
      </div>
      
      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] md:mx-auto! w-full flex flex-col gap-5 px-5! md:px-0!">
        <h1
          className="text-[#6EC1E4] font-bold text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: "Changa" }}
        >
          Upcoming Fields
        </h1>
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-y-5">
          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <path
                className="cls-2"
                d="M63.73,73.77a3.17,3.17,0,1,1-3.17-3.16A3.17,3.17,0,0,1,63.73,73.77Z"
              ></path>
              <path
                className="cls-2"
                d="M63.73,48.45a3.17,3.17,0,1,1-3.17-3.17A3.16,3.16,0,0,1,63.73,48.45Z"
              ></path>
              <path
                className="cls-2"
                d="M49.48,61.11A3.17,3.17,0,1,1,46.32,58,3.16,3.16,0,0,1,49.48,61.11Z"
              ></path>
              <path
                className="cls-2"
                d="M78,61.11A3.17,3.17,0,1,1,74.81,58,3.16,3.16,0,0,1,78,61.11Z"
              ></path>
              <path
                className="cls-2"
                d="M100.13,56.36A4.74,4.74,0,0,0,96,58.75a1.61,1.61,0,0,1-1.37.78h-9a1.58,1.58,0,0,1-1.57-1.39A23.56,23.56,0,0,0,80.35,48L78,50.38l-2.24-2.24,10-10a1.57,1.57,0,0,1,1.53-.41,4.74,4.74,0,0,0,4.57-7.92,4.88,4.88,0,0,0-6.72,0A4.71,4.71,0,0,0,84,34.35a1.6,1.6,0,0,1-.42,1.53l-10,10-2.24-2.24,2.35-2.34a23.48,23.48,0,0,0-10.1-3.75A1.57,1.57,0,0,1,62.15,36V27a1.56,1.56,0,0,1,.78-1.36,4.75,4.75,0,1,0-4.73,0A1.58,1.58,0,0,1,59,27v9a1.59,1.59,0,0,1-1.39,1.57,23.43,23.43,0,0,0-10.1,3.75l2.35,2.34L47.6,45.91l-10-10a1.56,1.56,0,0,1-.41-1.52,4.68,4.68,0,0,0-1.21-4.57,4.84,4.84,0,0,0-6.71,0,4.73,4.73,0,0,0,4.57,7.91,1.59,1.59,0,0,1,1.52.41l10,10-2.24,2.24L40.78,48A23.56,23.56,0,0,0,37,58.14a1.58,1.58,0,0,1-1.57,1.39h-9a1.58,1.58,0,0,1-1.36-.78,4.75,4.75,0,1,0,0,4.72,1.58,1.58,0,0,1,1.36-.78h9A1.59,1.59,0,0,1,37,64.08a23.43,23.43,0,0,0,3.75,10.1l2.34-2.34,2.24,2.24-10,10a1.61,1.61,0,0,1-1.52.41,4.73,4.73,0,0,0-4.58,7.92,4.88,4.88,0,0,0,6.72,0,4.71,4.71,0,0,0,1.21-4.57,1.55,1.55,0,0,1,.41-1.52l10-10,2.23,2.24L47.49,80.9a23.54,23.54,0,0,0,10.1,3.74A1.59,1.59,0,0,1,59,86.21v9a1.58,1.58,0,0,1-.78,1.36,4.75,4.75,0,1,0,4.73,0,1.56,1.56,0,0,1-.78-1.36v-9a1.58,1.58,0,0,1,1.39-1.57,23.59,23.59,0,0,0,10.1-3.74l-2.35-2.35,2.24-2.24,10,10A1.59,1.59,0,0,1,84,87.87a4.68,4.68,0,0,0,1.21,4.57,4.84,4.84,0,0,0,6.71,0,4.73,4.73,0,0,0-4.57-7.92,1.56,1.56,0,0,1-1.52-.41l-10-10L78,71.84l2.34,2.34a23.54,23.54,0,0,0,3.74-10.1,1.6,1.6,0,0,1,1.58-1.39h9a1.61,1.61,0,0,1,1.37.78,4.74,4.74,0,1,0,4.09-7.11ZM46.32,67.44a6.33,6.33,0,1,1,6.33-6.33A6.32,6.32,0,0,1,46.32,67.44ZM60.56,80.1a6.33,6.33,0,1,1,6.33-6.33A6.33,6.33,0,0,1,60.56,80.1Zm0-25.32a6.33,6.33,0,1,1,6.33-6.33A6.34,6.34,0,0,1,60.56,54.78ZM74.81,67.44a6.33,6.33,0,1,1,6.33-6.33A6.32,6.32,0,0,1,74.81,67.44Z"
              ></path>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Monocional Antibodies
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
              `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <path
                className="cls-2"
                d="M54.94,41.34a41.51,41.51,0,0,1,5.4,6.84,41,41,0,0,1,5.41-6.84,16,16,0,0,0-10.81,0Z"
              ></path>
              <path
                className="cls-2"
                d="M106.88,47.78c-.15-5.66-4.31-9.93-9.66-9.93H86.13c-1.48-9.28-10.69-14.54-25.79-14.54S36,28.57,34.56,37.85H23.47c-5.36,0-9.51,4.27-9.66,9.93-.1,3.48,1.53,7.54,4.33,11-2.31,4.2-1.33,10,2.7,14C25.45,77.43,32.72,78.2,37,73.94s3.42-11.62-1.12-16.15c-3.95-3.95-9.6-5-13.78-2.83-1.81-2.34-2.88-5-2.82-7,.07-2.68,1.84-4.62,4.21-4.62H34.64C36.46,51.52,46,55.83,46,63.85v8.73c0,6.71,5.82,9.07,5.82,11.63V95.85a2.72,2.72,0,0,0,2.72,2.72H66.16a2.72,2.72,0,0,0,2.73-2.72V84.21c0-2.9,5.81-6.18,5.81-11.63V63.85c0-8,9.52-12.33,11.34-20.54H97.22c2.36,0,4.14,1.94,4.21,4.62a12,12,0,0,1-2.82,7c-4.18-2.13-9.84-1.12-13.79,2.83a13.18,13.18,0,0,0-3.89,8.06,9.67,9.67,0,0,0,9.82,10.89,13,13,0,0,0,9.1-3.92c4-4,5-9.84,2.7-14,2.8-3.46,4.42-7.52,4.33-11Zm-34.61-5.1c-2.19,1.83-8,7.63-9.2,12.75V69.67a2.73,2.73,0,0,1-5.45,0V55.43c-1.17-5.12-7-10.92-9.21-12.76a2.73,2.73,0,0,1,.24-4.36,22,22,0,0,1,23.38,0,2.73,2.73,0,0,1,.24,4.37Z"
              ></path>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Hormones
            </h1>
          </div>

          <div className="flex flex-col md:w-1/5">
            <svg className="h-[85px]" viewBox="0 0 120 120">
              <defs>
                <style>
                  {`
                  .cls-1{fill:url(#linear-gradient);}.cls-2{fill:#fff;}
                `}
                </style>
                <linearGradient
                  id="linear-gradient"
                  x1="2.33"
                  y1="60"
                  x2="117.59"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#00b2e3"></stop>
                  <stop offset="0.02" stopColor="#0fb4e3"></stop>
                  <stop offset="0.07" stopColor="#31b9e3"></stop>
                  <stop offset="0.12" stopColor="#4cbce4"></stop>
                  <stop offset="0.17" stopColor="#5fbfe4"></stop>
                  <stop offset="0.22" stopColor="#6ac0e4"></stop>
                  <stop offset="0.28" stopColor="#6ec1e4"></stop>
                  <stop offset="1" stopColor="#056dad"></stop>
                </linearGradient>
              </defs>
              <circle className="cls-1" cx="59.96" cy="60" r="57.63"></circle>
              <g
                id="_24_Injection_syringe_immunization_drug_hospital_vaccine"
                data-name="24, Injection, syringe, immunization, drug, hospital, vaccine"
              >
                <path
                  className="cls-2"
                  d="M57.91,71h0V32.75a1.65,1.65,0,0,0-1.65-1.65H52.92V29.43a5,5,0,0,0-3.32-4.69V14.49a1.66,1.66,0,1,0-3.31,0V24.74A5,5,0,0,0,43,29.43V31.1H39.64A1.65,1.65,0,0,0,38,32.75V71h0a5,5,0,1,0,0,10h5v6.66h0a5,5,0,1,0,0,10h10a5,5,0,1,0,0-10h0V80.91h5a5,5,0,0,0,0-10ZM46.27,29.43a1.67,1.67,0,0,1,3.34,0V31.1H46.27Zm-5,38.19h3.33a1.65,1.65,0,1,0,0-3.3H41.29V61h3.33a1.66,1.66,0,0,0,0-3.31H41.29V54.34h3.33a1.66,1.66,0,0,0,0-3.31H41.29V47.7h3.33a1.66,1.66,0,0,0,0-3.31H41.29V41.05h3.33a1.66,1.66,0,0,0,0-3.31H41.29V34.41h13.3V71H41.29Zm13.3,24.92a1.67,1.67,0,0,1-1.67,1.67H43a1.67,1.67,0,1,1,0-3.33h10A1.66,1.66,0,0,1,54.59,92.54Zm-5-5H46.27V80.91h3.34Z"
                ></path>
                <path
                  className="cls-2"
                  d="M86.13,66.18V62.36a5,5,0,0,0-1.65-9.67h-10a5,5,0,0,0-1.66,9.67v3.82a6.63,6.63,0,0,0-5,6.41V90.9a6.63,6.63,0,0,0,6.61,6.62h10a6.63,6.63,0,0,0,6.62-6.62V72.59A6.64,6.64,0,0,0,86.13,66.18ZM72.85,57.67A1.67,1.67,0,0,1,74.52,56h10a1.67,1.67,0,1,1,0,3.33h-10A1.66,1.66,0,0,1,72.85,57.67Zm10,5V66H76.17V62.64Zm0,24.08H81.15v1.67a1.66,1.66,0,1,1-3.31,0V86.72H76.18a1.65,1.65,0,1,1,0-3.3h1.66V81.75a1.66,1.66,0,1,1,3.31,0v1.67h1.67a1.65,1.65,0,1,1,0,3.3Zm5-14.1H71.19v0a3.3,3.3,0,0,1,3.3-3.3h10a3.31,3.31,0,0,1,3.31,3.3Z"
                ></path>
              </g>
            </svg>
            <h1
              className="text-[#6EC1E4] text-center text-2xl"
              style={{ fontFamily: "Changa" }}
            >
              Vaccines
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#E0E0E0] dark:bg-[#2C2C2C] py-[50px]!">
        <div className="md:max-w-[80dvw] lg:max-w-[75dvw] md:mx-auto! flex flex-col gap-5 px-5! md:px-0!">
          <h1
            className="text-[#6EC1E4] font-bold text-center text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Changa" }}
          >
            Why work with BND?
          </h1>
          <div className="flex flex-col md:flex-row gap-4 flex-wrap md:justify-center lg:flex-nowrap">
            <div className="border border-3 text-[#6EC1E4] rounded-2xl p-5! bg-[#FFFFFF] dark:bg-[#0D0D0D]">
              <h1
                className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
                style={{ fontFamily: "Changa" }}
              >
                <span ref={c10.ref}>{c10.count}</span>YRS
              </h1>
              <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
                Experience in the Pharmaceutical Importation and Distribution in
                the Philippines
              </p>
            </div>

            <div className="border border-3 text-[#6EC1E4] rounded-2xl p-5! bg-[#FFFFFF] dark:bg-[#0D0D0D]">
              <h1
                className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
                style={{ fontFamily: "Changa" }}
              >
                <span ref={c11.ref}>{c11.count}</span>+
              </h1>
              <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
                Batch Notifications for Antibiotic from 2018-2023 (Top 1
                Antibiotic Importer in the Philippines)
              </p>
            </div>

            <div className="border border-3 text-[#6EC1E4] rounded-2xl p-5! bg-[#FFFFFF] dark:bg-[#0D0D0D]">
              <h1
                className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
                style={{ fontFamily: "Changa" }}
              >
                <span ref={c12.ref}>{c12.count}</span>+
              </h1>
              <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
                Experienced Regulatory Pharmacist in AMB HK Regulatory Team
              </p>
            </div>

            <div className="border border-3 text-[#6EC1E4] rounded-2xl p-5! bg-[#FFFFFF] dark:bg-[#0D0D0D]">
              <h1
                className="text-[#6EC1E4] font-bold text-center text-4xl border border-x-0 mb-2! w-[75%] mx-auto!"
                style={{ fontFamily: "Changa" }}
              >
                <span ref={c13.ref}>{c13.count}</span>%
              </h1>
              <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
                Reach in all 82 provinces of the Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
