import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { LangProvider } from "./context/LangContext";
import Cards from "./components/Cards"; 

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Router>
          <Navbar />
          <HeroSection />
          <Cards /> {/* FakeStore API-dan mahsulotlar chiqadi */}
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/todos" element={<Todos />} />
            <Route path="/about/comments" element={<Comments />} />
            <Route path="/about/posts" element={<Posts />} /> */}
          </Routes>
        </Router>
      </LangProvider>
    </ThemeProvider>
  );
}




function AppContent({ products }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <h1 className="logo">STREET88</h1>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Menu</NavLink>
          <NavLink to="/about/todos">Todos</NavLink>
          <NavLink to="/about/comments">Comments</NavLink>
          <NavLink to="/about/posts">Posts</NavLink>
        </nav>
      </header>

      {/* HERO SECTION */}
      {isHomePage && (
        <section className="hero">
          <div className="hero-content">
            <h2>Welcome to Street88</h2>
            <p>The best street food experience awaits you!</p>
          </div>
        </section>
      )}

      {/* MAIN CONTENT */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/todos" element={<Todos />} />
          <Route path="/about/comments" element={<Comments />} />
          <Route path="/about/posts" element={<Posts />} />
        </Routes>
      </main>

      {/* CARDS SECTION (FAQAT HOME SAHIFADA CHIQADI) */}
      {isHomePage && (
        <section className="cards">
          {products.length > 0 ? (
            <div className="grid">
              {products.map((product) => (
                <div key={product.id} className="card">
                  <img src={product.image} alt={product.title} className="card-image" />
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading products...</p>
          )}
        </section>
      )}
    </div>
  );
}

export default App;
