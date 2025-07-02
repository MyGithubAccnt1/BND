export default function Hero1() {
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