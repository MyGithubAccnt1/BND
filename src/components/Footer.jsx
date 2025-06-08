export default function Footer() {
  const companies = [
    "BND Pharma and Medical Supplies Distribution Corp. (Distributors)",
    "PhilRX Pharma Inc. (Open Market Retailers)",
    "FSPC Pharma Inc. (Private Sector through Doctors)",
    "P & D Medivet Distribution Inc. (Livestock - Poultry and Swine)",
    "Pet Prime International Corp (Companion Animals)",
  ];
  return (
    <div className="mt-5! py-[20px]! bg-black">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="px-5! flex flex-col gap-y-5 text-justify">
          <div>
            <h1
              className="text-[#6EC1E4] text-start"
              style={{ fontFamily: "Changa" }}
            >
              BND's Expertise and Experience in the Philippine Market
            </h1>
            <ul className="text-gray-400" style={{ fontFamily: "Changa" }}>
              {companies.map((company) => (
                <li key={company}>&#10004; {company}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-5! flex flex-col gap-y-5 text-justify">
          <div>
            <h1
              className="text-[#6EC1E4] text-start"
              style={{ fontFamily: "Changa" }}
            >
              Locations
            </h1>
            <p className="text-gray-400" style={{ fontFamily: "Changa" }}>
              <span className="font-bold">Manila Office: </span>
              2111 Calamba St., Sampaloc, Manila, Philippines
            </p>
          </div>

          <div>
            <h1
              className="text-[#6EC1E4] text-start"
              style={{ fontFamily: "Changa" }}
            >
              Contant Numbers
            </h1>
            <p className="text-gray-400" style={{ fontFamily: "Changa" }}>
              (02) 7617-2922
            </p>
            <p className="text-gray-400" style={{ fontFamily: "Changa" }}>
              (02) 8522-5393
            </p>
            <p className="text-gray-400" style={{ fontFamily: "Changa" }}>
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
              Social Media
            </h1>
            <p className="text-gray-400" style={{ fontFamily: "Changa" }}>
              <span className="italic">Facebook:</span>
              <br />
              https://www.facebook.com/bndpharmadistributor
            </p>
          </div>

          <div>
            <h1
              className="text-[#6EC1E4] text-start"
              style={{ fontFamily: "Changa" }}
            >
              Emails
            </h1>
            <p className="text-gray-400" style={{ fontFamily: "Changa" }}>
              banddpharma@gmail.com
            </p>
            <p className="text-gray-400" style={{ fontFamily: "Changa" }}>
              sales@bndpharma.com
            </p>
            <p className="text-gray-400" style={{ fontFamily: "Changa" }}>
              business@bndpharma.com
            </p>
          </div>
        </div>
      </div>
      <p
        className="text-gray-400 text-center mt-[25px]!"
        style={{ fontFamily: "Changa" }}
      >
        &#169; 2025 BND Pharma and Medical Supplies Distribution Corp. All
        rights reserved.
      </p>
    </div>
  );
}
