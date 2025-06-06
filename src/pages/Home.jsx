import { useState, useEffect } from 'react'

export default function Home() {
  const background = [
    {
      src: "/hero1.jpg",
      alt: "IMMUMAX",
      className: "w-full h-[calc(100dvh-120px)] object-cover",
    },
    {
      src: "/hero2.jpg",
      alt: "BND",
      className: "w-full h-[calc(100dvh-120px)] object-cover",
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
    </>
  )
}