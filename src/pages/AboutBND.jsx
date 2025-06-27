import { useEffect, useRef, useState } from "react";
import { getAssetPath } from "../utils/pathUtils";

export function Dot() {
  return(
    <div className="absolute top-0 -left-12.5 content-[''] bg-white dark:bg-[#0D0D0D] w-6 h-6 rounded-full flex items-center justify-center">
      <div className="content-[''] bg-[#6EC1E4] w-4 h-4 rounded-full flex items-center justify-center">
        <div className="content-[''] bg-white dark:bg-[#0D0D0D] w-3 h-3 rounded-full flex items-center justify-center">
          <div className="content-[''] bg-[#6EC1E4] w-2 h-2 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export function PreviousImage({ PreviousSrc, PreviousClass }) {
  return(
    <img 
      src={ getAssetPath(PreviousSrc) } 
      className={`absolute right-0 object-contain rounded-md w-[400px] max-h-[300px] transition-all transform duration-500
        ${ PreviousClass }  
      `}
    />
  )
}

export function CurrentImage({ CurrentSrc, CurrentClass }) {
  return(
    <img 
      src={ getAssetPath(CurrentSrc) } 
      className={`absolute right-0 object-contain rounded-md w-[400px] max-h-[300px] transition-all transform duration-500
        ${ CurrentClass }  
      `}
    />
  )
}

export function NextImage({ NextSrc, NextClass }) {
  return(
    <img 
      src={ getAssetPath(NextSrc) } 
      className={`absolute right-0 object-contain rounded-md w-[400px] max-h-[300px] transition-all transform duration-500
        ${ NextClass }  
      `}
    />
  )
}

export default function AboutBND() {
  const [toggle, setToggle] = useState({
    integrity: false,
    synergy: false,
    commitment: false,
    excellence: false,
    innovation: false
  });

  const handleToggle = (key) => {
    setToggle((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const [PreviousSrc, setPreviousSrc] = useState('About1.jpg');
  const [PreviousClass, setPreviousClass] = useState('opacity-0 scale-[120%]');

  const [CurrentSrc, setCurrentSrc] = useState('About1.jpg');
  const [CurrentClass, setCurrentClass] = useState('');

  const [NextSrc, setNextSrc] = useState('About2.jpg');
  const [NextClass, setNextClass] = useState('opacity-0 scale-[80%]');

  const [ImageToggle, setImageToggle] = useState('1');

  const secondDot = useRef(null);
  const thirdDot = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (secondDot.current) {
        const rect = secondDot.current.getBoundingClientRect();
        if (rect.top <= 160 && rect.top >= 140) {
          if (ImageToggle == '1') {
            setImageToggle('2');
            setCurrentClass('scale-[120%] opacity-0');
            setNextClass('scale-[100%] opacity-100');

            setTimeout(() => {
              setCurrentClass('scale-[100%] opacity-0');
            }, 500);
            setTimeout(() => {
              setCurrentSrc('About2.jpg');
              setCurrentClass('scale-[100%] opacity-100');
            }, 1000);
            setTimeout(() => {
              setNextClass('scale-[100%] opacity-0');
            }, 1500);
            setTimeout(() => {
              setNextSrc('About3.jpg');
              setNextClass('scale-[80%] opacity-0');
            }, 2000);
          }
        } else if (rect.top >= 161) {
          if (ImageToggle == '2') {
            setImageToggle('1');
            setCurrentClass('scale-[80%] opacity-0');
            setPreviousClass('scale-[100%] opacity-100');

            setTimeout(() => {
              setNextSrc('About2.jpg');
              setCurrentSrc('About1.jpg');
              setCurrentClass('scale-[100%] opacity-0');
              setNextClass('scale-[80%] opacity-0');
            }, 500);
            setTimeout(() => {
              setCurrentClass('scale-[100%] opacity-100');
            }, 1000);
            setTimeout(() => {
              setPreviousClass('scale-[100%] opacity-0');
            }, 1500);
            setTimeout(() => {
              setPreviousClass('scale-[120%] opacity-0');
            }, 2000);
          }
        }
      }

      if (thirdDot.current) {
        const rect = thirdDot.current.getBoundingClientRect();
        if (rect.top <= 160 && rect.top >= 140) {
          if (ImageToggle == '2') {
            setImageToggle('3');
            setCurrentClass('scale-[120%] opacity-0');
            setNextClass('scale-[100%] opacity-100');
            setPreviousSrc('About2.jpg');

            setTimeout(() => {
              setCurrentClass('scale-[100%] opacity-0');
            }, 500);
            setTimeout(() => {
              setCurrentSrc('About3.jpg');
              setCurrentClass('scale-[100%] opacity-100');
            }, 1000);
            setTimeout(() => {
              setNextClass('scale-[100%] opacity-0');
            }, 1500);
            setTimeout(() => {
              setNextClass('scale-[80%] opacity-0');
            }, 2000);
          }
        } else if (rect.top >= 161) {
          if (ImageToggle == '3') {
            setImageToggle('2');
            setCurrentClass('scale-[80%] opacity-0');
            setPreviousClass('scale-[100%] opacity-100');

            setTimeout(() => {
              setNextSrc('About3.jpg');
              setCurrentSrc('About2.jpg');
              setCurrentClass('scale-[100%] opacity-0');
              setNextClass('scale-[80%] opacity-0');
            }, 500);
            setTimeout(() => {
              setCurrentClass('scale-[100%] opacity-100');
            }, 1000);
            setTimeout(() => {
              setPreviousClass('scale-[100%] opacity-0');
            }, 1500);
            setTimeout(() => {
              setPreviousSrc('About1.jpg')
              setPreviousClass('scale-[120%] opacity-0');
            }, 2000);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ImageToggle, CurrentSrc, NextSrc]);

  return (
    <div className="flex flex-col gap-5 pt-5!">
      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] md:mx-auto! w-full flex flex-col px-5! md:px-0!">
        <button
          className={`font-bold text-start
            ${ toggle.integrity ? "text-[#6EC1E4]" : "" }  
          `}
          onClick={() => handleToggle("integrity")}
        >
          <span
            className={`me-2! inline-block transition-all duration-300 ${
              toggle.integrity ? "rotate-180" : "rotate-90"
            }`}
          >
            &#9650;
          </span>
          INTEGRITY
        </button>
        <p
          className={`text-justify text-[#7A7A7A] px-6! transition-all duration-300 ${
            toggle.integrity ? "h-full opacity-100 my-4!" : "h-0 opacity-0"
          }`}
          style={{ fontFamily: "Karla" }}
        >
          We act with sincerety, honesty, and fairness from which we build relationships, earn trust, and gain respect.
        </p>
        <div className="h-0.5 bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(255,255,255,0.4)] my-2!"></div>

        <button
          className={`font-bold text-start
            ${ toggle.synergy ? "text-[#6EC1E4]" : "" }  
          `}
          onClick={() => handleToggle("synergy")}
        >
          <span
            className={`me-2! inline-block transition-all duration-300 ${
              toggle.synergy ? "rotate-180" : "rotate-90"
            }`}
          >
            &#9650;
          </span>
          SYNERGY
        </button>
        <p
          className={`text-justify text-[#7A7A7A] px-6! transition-all duration-300 ${
            toggle.synergy ? "h-full opacity-100 my-4!" : "h-0 opacity-0"
          }`}
          style={{ fontFamily: "Karla" }}
        >
          We work together as a team in achieving the common goal through shared passion and energy amidst the diversty.
        </p>
        <div className="h-0.5 bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(255,255,255,0.4)] my-2!"></div>

        <button
          className={`font-bold text-start
            ${ toggle.commitment ? "text-[#6EC1E4]" : "" }  
          `}
          onClick={() => handleToggle("commitment")}
        >
          <span
            className={`me-2! inline-block transition-all duration-300 ${
              toggle.commitment ? "rotate-180" : "rotate-90"
            }`}
          >
            &#9650;
          </span>
          COMMITMENT
        </button>
        <p
          className={`text-justify text-[#7A7A7A] px-6! transition-all duration-300 ${
            toggle.commitment ? "h-full opacity-100 my-4!" : "h-0 opacity-0"
          }`}
          style={{ fontFamily: "Karla" }}
        >
          We work with utmost dedication and eagerness to deliver on our promises with the resolve of making a positive difference in our customers’ lives.
        </p>
        <div className="h-0.5 bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(255,255,255,0.4)] my-2!"></div>

        <button
          className={`font-bold text-start
            ${ toggle.excellence ? "text-[#6EC1E4]" : "" }  
          `}
          onClick={() => handleToggle("excellence")}
        >
          <span
            className={`me-2! inline-block transition-all duration-300 ${
              toggle.excellence ? "rotate-180" : "rotate-90"
            }`}
          >
            &#9650;
          </span>
          EXCELLENCE
        </button>
        <p
          className={`text-justify text-[#7A7A7A] px-6! transition-all duration-300 ${
            toggle.excellence ? "h-full opacity-100 my-4!" : "h-0 opacity-0"
          }`}
          style={{ fontFamily: "Karla" }}
        >
          We consistently perform at our best by making the right choices and doing the right things in the pursuit of the highest quality of our work, products and services.
        </p>
        <div className="h-0.5 bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(255,255,255,0.4)] my-2!"></div>

        <button
          className={`font-bold text-start
            ${ toggle.innovation ? "text-[#6EC1E4]" : "" }  
          `}
          onClick={() => handleToggle("innovation")}
        >
          <span
            className={`me-2! inline-block transition-all duration-300 ${
              toggle.innovation ? "rotate-180" : "rotate-90"
            }`}
          >
            &#9650;
          </span>
          INNOVATION
        </button>
        <p
          className={`text-justify text-[#7A7A7A] px-6! transition-all duration-300 ${
            toggle.innovation ? "h-full opacity-100 my-4!" : "h-0 opacity-0"
          }`}
          style={{ fontFamily: "Karla" }}
        >
          We constantly strive to redefine standards, challenge conventional views, and adapt to the society’s changing needs through the creation of timely and relevant products and solutions.
        </p>
        <div className="h-0.5 bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(255,255,255,0.4)] my-2!"></div>
      </div>

      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] md:mx-auto! w-full flex flex-col px-5! md:px-0!">
        <p
          className='text-[#7A7A7A] text-center font-bold text-xl'
          style={{ fontFamily: "Karla" }}
        >
          Introducing <span className="text-[#6EC1E4]">BND</span>
        </p>
        <p
          className='text-center font-bold text-4xl'
          style={{ fontFamily: "Changa" }}
        >
          Know where it all begins
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="w-[50%] hidden md:flex flex-col py-10! pe-10!">
            <div className="top-[20dvh] sticky">
              <div className="relative min-h-[300px]">
                <PreviousImage PreviousSrc={PreviousSrc} PreviousClass={PreviousClass}/>
                <CurrentImage CurrentSrc={CurrentSrc} CurrentClass={CurrentClass}/>
                <NextImage NextSrc={NextSrc} NextClass={NextClass}/>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] relative py-10!">
            <div className="absolute content-[''] top-0 w-0.75 h-full bg-[#6EC1E4]"></div>
            <div className="absolute content-[''] -left-2 top-0 w-5 h-10 bg-gradient-to-b from-white dark:from-[#0D0D0D] to-transparent"></div>
            <div className="absolute content-[''] -left-2 bottom-0 w-5 h-10 bg-gradient-to-t from-white dark:from-[#0D0D0D] to-transparent"></div>
            <div className="ms-10! mb-5! text-[#6EC1E4] relative">
              <Dot/>
              <span className="font-bold">Year 2020 – The Beginning Amidst Challenges</span>
              <p
                className='text-justify text-[#7A7A7A] mt-3!'
                style={{ fontFamily: "Karla" }}
              >
                The year 2020 marked a significant milestone in the inception of our business. It was a year of both excitement and uncertainty, as we officially laid the foundation for what would become a trusted name in our industry. Despite the unexpected global challenges brought about by the COVID-19 pandemic, we remained steadfast in pursuing our vision.

                Launching a business during a pandemic was far from easy. Lockdowns, shifting regulations, and supply chain disruptions posed significant hurdles. However, these obstacles became opportunities for innovation. We embraced digital platforms, remote operations, and redefined our service delivery methods to adapt to the new normal.

                Our focus during this year was heavily placed on building brand identity, establishing customer trust, and refining our core offerings. Despite the limitations, we witnessed a growing interest in our products/services, especially from customers looking for reliable solutions during uncertain times.

                By the end of 2020, what began as a concept had transformed into an operational reality. The early challenges taught us resilience, flexibility, and the importance of community support.
              </p>
            </div>

            <div ref={ secondDot } className="ms-10! mb-5! text-[#6EC1E4] relative">
              <Dot/>
              <span className="font-bold">Year 2021 – Growth, Expansion, and Adaptation</span>
              <p
                className='text-justify text-[#7A7A7A] mt-3!'
                style={{ fontFamily: "Karla" }}
              >
                Entering 2021, we were more prepared to navigate the challenges ahead. With a solid foundation set in the previous year, we shifted focus toward growth, customer acquisition, and service refinement.

                This year saw a significant increase in demand as markets began to recover and adapt. We expanded our offerings, introduced new products/services based on customer feedback, and streamlined our internal processes for greater efficiency. One of the key milestones during this period was the establishment of partnerships with key suppliers and collaborators, which enhanced our operational capabilities.

                2021 was also the year when we heavily invested in technology. We upgraded our website, enhanced our online ordering systems, and improved customer service channels to provide a smoother, more responsive experience. Social media presence and digital marketing became integral parts of our strategy, allowing us to reach a broader audience.

                Despite lingering pandemic-related uncertainties, 2021 was a year of steady growth, learning, and strengthening our presence in the market. Our team grew in both size and skill, reflecting the increasing demands and ambitions of the company.
              </p>
            </div>

            <div ref={ thirdDot } className="ms-10! mb-5! text-[#6EC1E4] relative">
              <Dot/>
              <span className="font-bold">Year 2022 – Stability, Recognition, and Future-Proofing</span>
              <p
                className='text-justify text-[#7A7A7A] mt-3!'
                style={{ fontFamily: "Karla" }}
              >
                By 2022, our business had matured into a stable, reliable brand within the industry. With the lessons learned from the past two years, we were now focused not just on growth, but on sustainability, quality, and long-term impact.

                This year was a turning point in terms of brand recognition. We received overwhelmingly positive feedback from clients, which resulted in higher referral rates and repeat business. Our dedication to customer satisfaction began to set us apart from competitors in a more significant way.

                Operationally, we invested in further automation, improved logistics, and began exploring sustainable practices to minimize environmental impact. This included optimizing supply chains, reducing waste, and incorporating eco-friendly materials where possible.

                In 2022, we also started laying the groundwork for future expansion—whether through physical presence, new product lines, or entering new markets. Our team continued to grow, and the company culture evolved to embrace creativity, collaboration, and a forward-thinking mindset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}