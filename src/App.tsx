import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLenis } from "./hooks/useLenis";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import { BookCallModal } from "./components/BookCallModal";

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-bg">
      <CustomCursor />
      <Navbar />
      <BookCallModal />
      <ScrollToTopOnRouteChange />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
