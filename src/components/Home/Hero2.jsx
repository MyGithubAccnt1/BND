import { getAssetPath } from "../../utils/pathUtils"

export default function Hero2() {
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