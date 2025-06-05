import { useState, useEffect } from 'react'

export default function Home() {
  const background = [
    {
      src: "/hero1.jpg",
      alt: "IMMUMAX",
      className: "w-full h-[calc(100dvh-120px)] object-cover",
      children: ''
    },
    {
      src: "/hero2.jpg",
      alt: "BND",
      className: "w-full h-[calc(100dvh-120px)] object-cover",
      children: <Immumax />
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === background.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <img 
        src={background[1].src} 
        alt={background[1].alt} 
        className={background[1].className}
      />
      {background[1].children}
    </>
  )
}

export function Immumax() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-black">
      <div className='text-center absolute left-45 top-55'>
        <h1 className="text-[rgb(226,136,0)] text-5xl font-bold text-left mb-5!">Keep a healthy immune<br/>system by taking</h1>
        <div className='flex flex-col items-start'>
          <div className='text-center'>
            <h1 className="text-[rgb(65,64,66)] text-4xl font-bold border px-3! border-[rgb(65,64,66)]">ASCORBIC ACID + ZINC</h1>
            <h1 className="text-[rgb(250,77,9)] text-3xl font-bold">IMMUMAX</h1>
            <h1 className="text-gray-700">500 mg / 10 mg Capsule</h1>
            <h1 className="text-white bg-[rgb(58,174,42)] font-bold px-3! inline">Vitamin / Mineral</h1>
          </div>
        </div>
      </div>
    </div>
  )
}