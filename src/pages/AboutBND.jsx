import { useState } from "react";

export function Dot() {
  return(
    <div className="absolute top-0 -left-12.5 content-[''] bg-white dark:bg-black w-6 h-6 rounded-full flex items-center justify-center">
      <div className="content-[''] bg-[#6EC1E4] w-4 h-4 rounded-full flex items-center justify-center">
        <div className="content-[''] bg-white w-3 h-3 rounded-full flex items-center justify-center">
          <div className="content-[''] bg-[#6EC1E4] w-2 h-2 rounded-full"></div>
        </div>
      </div>
    </div>
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
        <div className="h-0.5 bg-[rgba(0,0,0,0.4)] my-2!"></div>

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
        <div className="h-0.5 bg-[rgba(0,0,0,0.4)] my-2!"></div>

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
        <div className="h-0.5 bg-[rgba(0,0,0,0.4)] my-2!"></div>

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
        <div className="h-0.5 bg-[rgba(0,0,0,0.4)] my-2!"></div>

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
        <div className="h-0.5 bg-[rgba(0,0,0,0.4)] my-2!"></div>
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
          <div className="hidden md:flex w-[50%] py-5! pe-10! flex flex-col gap-5 items-end">
            <img src="/About1.jpg" className="object-contain rounded-lg max-h-[300px]"/>
            <img src="/About2.jpg" className="object-contain rounded-lg max-h-[300px]"/>
            <img src="/About3.jpg" className="object-contain rounded-lg max-h-[300px]"/>
          </div>
          <div className="md:w-[50%] relative py-5!">
            <div className="absolute content-[''] top-0 w-0.5 h-full bg-[#6EC1E4]"></div>
            <div className="ms-10! mb-5! md:mb-[200px]! text-[#6EC1E4] relative">
              <Dot/>
              <span className="font-bold">YEAR OF 2020</span>
              <p
                className='text-justify text-[#7A7A7A] mt-3!'
                style={{ fontFamily: "Karla" }}
              >
                To be one of the leading and most respected names in the Pharmaceutical Industry engaged in importation and distribution of affordable, high-quality and innovative products that will enhance health and wellness of our consumers.
              </p>
            </div>

            <div className="ms-10! mb-5! md:mb-[200px]! text-[#6EC1E4] relative">
              <Dot/>
              <span className="font-bold">YEAR OF 2021</span>
              <p
                className='text-justify text-[#7A7A7A] mt-3!'
                style={{ fontFamily: "Karla" }}
              >
                To uphold our social responsibilities of delivering highest standards and affordable healthcare services that will improve quality of life to all segments of society without compromising our core values of integrity, good ethics and commitment.
              </p>
            </div>

            <div className="ms-10! mb-5! md:mb-[200px]! text-[#6EC1E4] relative">
              <Dot/>
              <span className="font-bold">YEAR OF 2022</span>
              <p
                className='text-justify text-[#7A7A7A] mt-3!'
                style={{ fontFamily: "Karla" }}
              >
                We provide cure and wellness to consumers through affordable yet effective pharmaceutical products and medical devices.
                We conduct Nationwide Medical Mission to communities that lacks basic health care and promotes health awareness.
                We ensure compliance to Department of Environment and Natural Resources (DENR) for the observance of standards and guidelines on the transport, treatment, storage and proper disposal of pharmaceutical waste.
                We support the advocacy programs of the Philippine Government on health care waste management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}