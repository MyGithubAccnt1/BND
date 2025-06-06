import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [button, setButton] = useState(false);
  const mobileNav = (isActive) => (
    `ps-5! font-bold py-3! min-w-[300px] border border-x-0 ${
      isActive
        ? 'border-[rgba(0,0,0,0.5)] dark:border-[rgba(255,255,255,0.5)]'
        : 'border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.2)]'
    }`
  )
  const pcNav = (isActive) => (
    `font-bold py-5! relative after:content-[''] after:absolute after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0 ${
      isActive
        ? 'text-[rgb(5,109,173)] after:w-[50%]'
        : 'hover:text-[rgb(5,109,173)] after:w-0 after:transition-all after:duration-300 hover:after:w-[50%]'
    }`
  )
  return (
    <>
      <nav className="text-gray-500 bg-white dark:bg-[#242424] h-[120px] flex justify-center items-center shadow-sm">
        <div className="flex justify-around items-center gap-[150px]">
          <div>
            <NavLink to="/"><img src="/icon.png" alt="BND" className="w-[85px] h-[85px]"/></NavLink>
          </div>
          <div className="hidden md:flex justify-center items-center gap-[30px] lg:gap-[50px]">
            <NavLink to="/" className={({ isActive }) => pcNav(isActive)}>Home</NavLink>
            <NavLink to="/about-bnd" className={({ isActive }) => pcNav(isActive)}>About BND</NavLink>
            <NavLink to="/products" className={({ isActive }) => pcNav(isActive)}>Products</NavLink>
            <NavLink to="/careers" className={({ isActive }) => pcNav(isActive)}>Careers</NavLink>
            <NavLink to="/contact" className={({ isActive }) => pcNav(isActive)}>Contact Us</NavLink>
          </div>
          <button 
            className={`
                flex flex-col md:hidden transistion-all
                ${button ? '-rotate-90 duration-1000' : 'duration-300'}
              `}
            onClick={() => setButton(!button)}
          >
            <span
              className={`
                content-[''] h-[2px] w-[35px] bg-gray-500 transition-all
                ${button ? 'rotate-40 duration-800' : 'duration-1000'}
              `}
            ></span>
            <span
              className={`
                content-[''] h-[2px] w-[35px] bg-gray-500 mx-auto! my-2!
                ${button ? 'hidden' : ''}
              `}
            ></span>
            <span
              className={`
                content-[''] h-[2px] w-[35px] bg-gray-500 transition-all
                ${button ? '-rotate-40 duration-300' : 'duration-800'}
              `}
            ></span>
          </button>
        </div>
      </nav>
      <nav
        className={`
          absolute h-[calc(100dvh-120px)] text-gray-500 flex transition-all duration-500 w-full
          ${button ? 'left-0' : '-left-100'}
        `}
      >
        <div className="bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(0,0,0,0.9)] transition-all duration-500 flex flex-col items-start">
          <NavLink to="/" className={({ isActive }) => mobileNav(isActive)}>Home</NavLink>
          <NavLink to="/about-bnd" className={({ isActive }) => mobileNav(isActive)}>About BND</NavLink>
          <NavLink to="/products" className={({ isActive }) => mobileNav(isActive)}>Products</NavLink>
          <NavLink to="/careers" className={({ isActive }) => mobileNav(isActive)}>Careers</NavLink>
          <NavLink to="/contact" className={({ isActive }) => mobileNav(isActive)}>Contact Us</NavLink>
        </div>
        <button type='button' className='w-full h-full' onClick={() => setButton(false)}></button>
      </nav>
    </>
  )
} 