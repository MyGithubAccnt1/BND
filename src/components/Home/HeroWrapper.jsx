import { NavLink } from "react-router-dom";

export default function HeroWrapper({children}) {
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