import { FaFacebookF, FaTiktok } from "react-icons/fa";
import {
  FaShopee,
  FaLazada,
} from './SVG';

export default function Footer() {
  const companies = [
    "BND Pharma and Medical Supplies Distribution Corp. (Distributors)",
    "PhilRX Pharma Inc. (Open Market Retailers)",
    "FSPC Pharma Inc. (Private Sector through Doctors)",
    "P & D Medivet Distribution Inc. (Livestock - Poultry and Swine)",
    "Pet Prime International Corp (Companion Animals)",
  ];
  return (
    <div className="py-[20px]! bg-[#FFFFFF] dark:bg-[#0D0D0D]">
      <div className="md:max-w-[80dvw] lg:max-w-[75dvw] md:mx-auto! w-full">
        <div className="flex flex-col md:flex-row gap-y-5 justify-between">
          <div className="px-5! flex flex-col gap-y-5 text-justify">
            <div>
              <h1
                className="text-[#6EC1E4] text-start"
                style={{ fontFamily: "Changa" }}
              >
                BND's Expertise and Experience in the Philippine Market
              </h1>
              <ul
                className="text-gray-500 text-start"
                style={{ fontFamily: "Changa" }}
              >
                {companies.map((company) => (
                  <li key={company}>&#10004; {company}</li>
                ))}
              </ul>
            </div>

            <div>
              <h1
                className="text-[#6EC1E4] text-start"
                style={{ fontFamily: "Changa" }}
              >
                Contact Number
              </h1>
              <p className="text-gray-500" style={{ fontFamily: "Changa" }}>
                (02) 7617-2922
              </p>
              <p className="text-gray-500" style={{ fontFamily: "Changa" }}>
                (02) 8522-5393
              </p>
              <p className="text-gray-500" style={{ fontFamily: "Changa" }}>
                (+63) 0917 170 2970
              </p>
            </div>
          </div>

          <div className="px-5! flex flex-col gap-y-5 text-justify">
            <div>
              <h1
                className="text-[#6EC1E4] text-start"
                style={{ fontFamily: "Changa" }}
              >
                Location
              </h1>
              <p className="text-gray-500" style={{ fontFamily: "Changa" }}>
                <span className="font-bold">Manila Office: </span>
                2111 Calamba St., Sampaloc, Manila, Philippines
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.7518150507526!2d120.99019729503695!3d14.623349340450806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7b07317fc3b%3A0x747bad0e0e59dd9b!2sBND%20PHARMA%20AND%20MEDICAL%20SUPPLIES%20DISTRIBUTION%20CORP.!5e1!3m2!1sen!2sph!4v1749360888329!5m2!1sen!2sph"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BND Pharma Location"
              ></iframe>
            </div>
          </div>

          <div className="px-5! flex flex-col gap-y-5 text-justify">
            <div>
              <h1
                className="text-[#6EC1E4] text-start"
                style={{ fontFamily: "Changa" }}
              >
                Social Media
              </h1>
              <div
                className="text-white flex gap-3"
                style={{ fontFamily: "Changa" }}
              >
                <a
                  href="https://www.facebook.com/bndpharmadistributor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0866FF] w-[50px] h-[50px] rounded-md dark:bg-black dark:hover:bg-gray-900 border border-black dark:border-white hover:bg-black hover:border-white flex items-center justify-center"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.tiktok.com/@bndcorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] rounded-md text-black dark:text-white dark:hover:bg-gray-900 dark:bg-black border hover:bg-black hover:text-white flex items-center justify-center"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://www.lazada.com.ph/shop/bndpharmacorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] rounded-md text-black dark:text-white dark:hover:bg-gray-900 dark:bg-black border hover:bg-black hover:border-white flex items-center justify-center"
                >
                  <FaLazada />
                </a>
                <a
                  href="https://www.lazada.com.ph/shop/bndpharmacorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] px-3! rounded-md text-black dark:text-white dark:hover:bg-gray-900 dark:bg-black border hover:bg-black hover:border-white flex items-center justify-center"
                >
                  <FaShopee />
                </a>
              </div>
            </div>

            <div>
              <h1
                className="text-[#6EC1E4] text-start"
                style={{ fontFamily: "Changa" }}
              >
                Email
              </h1>
              <p className="text-gray-500" style={{ fontFamily: "Changa" }}>
                banddpharma@gmail.com
              </p>
              <p className="text-gray-500" style={{ fontFamily: "Changa" }}>
                sales@bndpharma.com
              </p>
              <p className="text-gray-500" style={{ fontFamily: "Changa" }}>
                business@bndpharma.com
              </p>
            </div>
          </div>
        </div>
        <p
          className="text-gray-500 text-center mt-[25px]!"
          style={{ fontFamily: "Changa" }}
        >
          &#169; 2025 BND Pharma and Medical Supplies Distribution Corp. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}
