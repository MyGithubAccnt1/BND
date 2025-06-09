import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAssetPath } from "./utils/pathUtils";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutBND from "./pages/AboutBND";
import Products from "./pages/Products";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export function Preloader() {
  return (
    <div className="h-[100dvh] w-[100dvw] flex items-center justify-center">
      <img src={getAssetPath("preloader.svg")} alt="Loading..." className="h-[60px]" />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-bnd" element={<AboutBND />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[25px] right-[25px] w-[46px] h-[46px] text-2xl bg-[#056dad] text-white shadow-md hover:bg-[#045c94] transition"
        >
          &#8593;
        </button>
      )}
    </>
  );
}

export default App;
