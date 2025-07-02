import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Slider from "react-infinite-logo-slider";
import { getAssetPath } from "../utils/pathUtils";
import HeroWrapper from '../components/Home/HeroWrapper';
import Hero1 from '../components/Home/Hero1';
import Hero2 from '../components/Home/Hero2';
import Hero3 from '../components/Home/Hero3';
import Hero4 from '../components/Home/Hero4';
import {
  Nephrology,
  Oncology,
  Respiratory,
  Cardiovascular,
  CNS,
  GIT,
  Blood,
  Prostate,
  Liver,
  Dermatologicals,
  Monocional,
  Hormones,
  Vaccines
} from '../components/SVG';

export function Bullet() {
  return(
    <div className="absolute top-0 -left-7.5 content-[''] bg-white dark:bg-[#0D0D0D] w-6 h-6 rounded-full flex items-center justify-center">
      <div className="content-[''] bg-[#6EC1E4] w-4 h-4 rounded-full flex items-center justify-center">
        <div className="content-[''] bg-white dark:bg-[#0D0D0D] w-3 h-3 rounded-full flex items-center justify-center">
          <div className="content-[''] bg-[#6EC1E4] w-2 h-2 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export function Box({ title, countRef, count, description, years }) {
  return(
    <div 
      className='p-[30px]! bg-white transition-shadow
        hover:shadow-[0_0_20px_rgb(110,193,228)] 
        dark:hover:shadow-[0_0_20px_rgb(255,255,255)]'>
      <h1 
        className='text-black font-bold text-center text-3xl border border-x-0 border-[rgba(0,0,0,0.5)] mb-[40px]! w-[75%] mx-auto!' 
        style={{ fontFamily: "Changa" }}>
        {title && (title + ' ')}
        <span ref={countRef}>{count}</span>
        {!years ? (!title && ("+")) : ('YRS')}
      </h1>
      <p className="text-[#7A7A7A]" style={{ fontFamily: "Karla" }}>
        {description}
      </p>
    </div>
  )
}

export function SVG({ icon, title }) {
  return (
    <div className="flex flex-col md:w-1/5">
      {icon}
      <h1
        className="text-[#6EC1E4] text-center text-2xl"
        style={{ fontFamily: "Changa" }}
      >
        {title}
      </h1>
    </div>
  )
}

export default function Home() {
  const backgroundClassName = 'object-cover rounded-2xl h-[80dvh] w-full';
  const background = [
    {
      src: getAssetPath("hero1.jpg"),
      className: backgroundClassName,
      child: <HeroWrapper><Hero1/></HeroWrapper>
    },
    {
      src: getAssetPath("hero2.jpg"),
      className: backgroundClassName,
      child: <HeroWrapper><Hero2/></HeroWrapper>
    },
    {
      src: getAssetPath("hero3.png"),
      className: backgroundClassName,
      child: <HeroWrapper><Hero3/></HeroWrapper>
    },
    {
      src: getAssetPath("hero4.jpg"),
      className: backgroundClassName,
      child: <HeroWrapper><Hero4/></HeroWrapper>
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === background.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [background.length]);

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

  const groupOfCompanies = [
    { src: getAssetPath("icon.png"), alt: "BND Logo" },
    { src: getAssetPath("home2.png"), alt: "PhilRX Logo" },
    { src: getAssetPath("home3.png"), alt: "FSPC Logo" },
    { src: getAssetPath("home4.png"), alt: "P&D Medivet Logo" },
    { src: getAssetPath("home5.png"), alt: "Pet Prime Logo" },
  ];

  const contentWrapper = 'md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col gap-[30px] mx-5! py-[50px]!';

  const [DarkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="h-[85dvh] px-[30px]! relative">
        <img
          src={background[currentIndex].src}
          className={background[currentIndex].className}
        />
        {background[currentIndex].child}
      </div>
      
      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] mx-auto! flex flex-col gap-5 md:flex-row md:gap-0">
        <img
          ref={refImg}
          src={getAssetPath("home1.jpg")}
          alt="home1.jpg"
          className={`w-full md:w-[30%] transform transition-all duration-700 ease-out ${
            inViewImg ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
        <div className="flex flex-col gap-5 px-5! ps-10! relative">
          <div className="absolute content-[''] left-5 top-0 w-0.75 h-full bg-[#6EC1E4]"></div>
          <div className="absolute content-[''] left-2.5 top-0 w-5 h-10 bg-gradient-to-b from-white dark:from-[#0D0D0D] to-transparent"></div>
          <div className="absolute content-[''] left-2.5 bottom-0 w-5 h-10 bg-gradient-to-t from-white dark:from-[#0D0D0D] to-transparent"></div>
          <h1
            className="text-[#6EC1E4] font-bold text-2xl"
            style={{ fontFamily: "Changa" }}
          >
            Brief Introduction
          </h1>
          <div className="relative">
            <Bullet/>
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
          </div>
          <div className="relative">
            <Bullet/>
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
      </div>

      <div 
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
        className="bg-gradient-to-b from-gray-200 via-white to-gray-200 dark:bg-gradient-to-b dark:from-[#0D0D0D] dark:via-neutral-900 dark:to-[#0D0D0D] py-[50px]!">
        <Slider
          duration={20}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={"#fff"}
        >
          {groupOfCompanies.map((company, index) => (
            <Slider.Slide key={index}>
              <img
                className="max-h-[100px] max-w-[200px] mx-auto"
                src={company.src}
                alt={company.alt}
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>

      <div 
        style={{
          backgroundImage: `
            ${ DarkMode 
              ? 'radial-gradient(circle at center center, rgba(49, 132, 215, 0.4) 0%, rgba(49, 132, 215, 0.4) 7%, transparent 7%, transparent 100%)'
              : 'radial-gradient(circle at center center, rgba(49, 132, 215, 0.4) 0%, rgba(49, 132, 215, 0.4) 7%, transparent 7%, transparent 100%), linear-gradient(90deg, rgb(246,250,251), rgb(246,250,251))' }
          `,
          backgroundSize: '16px 16px'
        }}
        className="py-[50px]!">
        <div className={ contentWrapper }>
          <h1
            className="text-[#6EC1E4] font-bold text-center text-3xl md:text-5xl"
            style={{ fontFamily: "Changa" }}
          >
            Overview of AMB's Success
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:mx-5! md:justify-center lg:mx-0! flex-wrap lg:flex-nowrap">
            <Box
              title="TOP"
              countRef={c1.ref}
              count={c1.count}
              description="Pharmaceutical Importer in Philippines (in terms of Sales)"
            />
            <Box
              title="TOP"
              countRef={c2.ref}
              count={c2.count}
              description="Pharmaceutical Importer in Philippines (in terms of Volume)"
            />
            <Box
              countRef={c3.ref}
              count={c3.count}
              description="GMP registered for foreign manufacturer"
            />
            <Box
              countRef={c4.ref}
              count={c4.count}
              description="Partner distributors"
            />
          </div>

          <div className="flex justify-center items-center mx-5! relative ">
            <span className='content-[""] bg-[#7A7A7A] h-[1px] w-full'></span>
            <span className='absolute content-[""] bg-[rgb(246,250,251)] dark:bg-[#0D0D0D] w-[40px] flex justify-center items-center'>
              <span className='content-[""] bg-black dark:bg-white rounded-full w-[20px] h-[20px] flex justify-center items-center'>
                <span className='content-[""] bg-white dark:bg-[#0D0D0D] rounded-full w-[7px] h-[7px]'></span>
              </span>
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:mx-5! md:justify-center lg:mx-0! flex-wrap lg:flex-nowrap">
            <Box
              countRef={c5.ref}
              count={c5.count}
              description="BND Employees"
            />
            <Box
              countRef={c6.ref}
              count={c6.count}
              description="CPRs (Drugs Registered)"
            />
            <Box
              countRef={c7.ref}
              count={c7.count}
              description="CPRs (Medical Devices Registered)"
            />
            <Box
              countRef={c8.ref}
              count={c8.count}
              description="CPRs (Food Supplements Registered)"
            />
            <Box
              countRef={c9.ref}
              count={c9.count}
              description="CPRs (Cosmetics Registered)"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-200 via-white to-gray-200 dark:bg-gradient-to-b dark:from-[#0D0D0D] dark:via-neutral-900 dark:to-[#0D0D0D] py-[50px]!">
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

      <div className="bg-gradient-to-b from-gray-200 via-white to-gray-200 dark:bg-gradient-to-b dark:from-[#0D0D0D] dark:via-neutral-900 dark:to-[#0D0D0D] py-[50px]! flex flex-col gap-y-5">
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
          <SVG icon={<Nephrology />} title="Nephrology" />
          <SVG icon={<Oncology />} title="Oncology Anti-Infectives" />
          <SVG icon={<Respiratory />} title="Respiratory Drugs Anti-Allergy" />
          <SVG icon={<Cardiovascular />} title="Cardiovascular Drugs" />
          <SVG icon={<CNS />} title="CNS Drugs Analgesic, Anaesthetic" />
          <SVG icon={<GIT />} title="GIT Drugs" />
          <SVG icon={<Blood />} title="Blood Drugs" />
          <SVG icon={<Prostate />} title="Prostate Care" />
          <SVG icon={<Liver />} title="Liver Drugs" />
          <SVG icon={<Dermatologicals />} title="Dermatologicals" />
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
          <SVG icon={<Monocional />} title="Monocional Antibodies" />
          <SVG icon={<Hormones />} title="Hormones" />
          <SVG icon={<Vaccines />} title="Vaccines" />
        </div>
      </div>

      <div 
        style={{
          backgroundImage: `
            ${ DarkMode 
              ? 'radial-gradient(circle at center center, rgba(49, 132, 215, 0.4) 0%, rgba(49, 132, 215, 0.4) 7%, transparent 7%, transparent 100%)'
              : 'radial-gradient(circle at center center, rgba(49, 132, 215, 0.4) 0%, rgba(49, 132, 215, 0.4) 7%, transparent 7%, transparent 100%), linear-gradient(90deg, rgb(246,250,251), rgb(246,250,251))' }
          `,
          backgroundSize: '16px 16px'
        }}
        className="py-[50px]!">
        <div className={ contentWrapper }>
          <h1
            className="text-[#6EC1E4] font-bold text-center text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Changa" }}
          >
            Why work with BND?
          </h1>
          <div className="flex flex-col md:flex-row gap-4 flex-wrap md:justify-center lg:flex-nowrap">
            <Box
              countRef={c10.ref}
              count={c10.count}
              years={true}
              description="Experience in the Pharmaceutical Importation and Distribution in the Philippines"
            />
            <Box
              countRef={c11.ref}
              count={c11.count}
              description="Batch Notifications for Antibiotic from 2018-2023 (Top 1 Antibiotic Importer in the Philippines)"
            />
            <Box
              countRef={c12.ref}
              count={c12.count}
              description="Experienced Regulatory Pharmacist in AMB HK Regulatory Team"
            />
            <Box
              countRef={c13.ref}
              count={c13.count}
              description="Reach in all 82 provinces of the Philippines"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
