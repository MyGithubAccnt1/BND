import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAssetPath } from "./utils/pathUtils";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export function Preloader() {
  return (
    <div className="h-[100dvh] w-[100dvw] flex items-center justify-center">
      <img src={getAssetPath("preloader.svg")} alt="Loading..." className="h-[60px]" />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(() => {
    const hasLoaded = localStorage.getItem('hasLoadedBefore');
    return !hasLoaded;
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasLoadedBefore', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

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
      <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0D0D0D]">
        <Navbar />
        <main>
          <Outlet />
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
