import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="text-gray-500 dark:bg-[#242424] h-[120px] flex justify-center items-center">
      <div className="flex justify-around items-center gap-[150px]">
        <div>
          <NavLink to="/"><img src="/icon.png" alt="BND" className="w-[85px] h-[85px]"/></NavLink>
        </div>
        <div className="flex justify-center items-center gap-[50px]">
          <NavLink to="/" className={({ isActive }) => 
            isActive 
              ? "text-[rgb(5,109,173)] font-bold py-5! relative after:content-[''] after:absolute after:w-[50%] after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0" 
              : "hover:text-[rgb(5,109,173)] font-bold py-5! relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-[50%]"
          }>Home</NavLink>
          <NavLink to="/about-bnd" className={({ isActive }) => 
            isActive 
              ? "text-[rgb(5,109,173)] font-bold py-5! relative after:content-[''] after:absolute after:w-[50%] after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0" 
              : "hover:text-[rgb(5,109,173)] font-bold py-5! relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-[50%]"
          }>About BND</NavLink>
          <NavLink to="/products" className={({ isActive }) => 
            isActive 
              ? "text-[rgb(5,109,173)] font-bold py-5! relative after:content-[''] after:absolute after:w-[50%] after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0" 
              : "hover:text-[rgb(5,109,173)] font-bold py-5! relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-[50%]"
          }>Products</NavLink>
          <NavLink to="/careers" className={({ isActive }) => 
            isActive 
              ? "text-[rgb(5,109,173)] font-bold py-5! relative after:content-[''] after:absolute after:w-[50%] after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0" 
              : "hover:text-[rgb(5,109,173)] font-bold py-5! relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-[50%]"
          }>Careers</NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive 
              ? "text-[rgb(5,109,173)] font-bold py-5! relative after:content-[''] after:absolute after:w-[50%] after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0" 
              : "hover:text-[rgb(5,109,173)] font-bold py-5! relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-[50%]"
          }>Contact Us</NavLink>
        </div>
      </div>
    </nav>
  )
} 