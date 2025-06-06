import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutBND from './pages/AboutBND'
import Products from './pages/Products'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function App() {
  return (
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
    </div>
  )
}

export default App
