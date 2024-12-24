import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./Pages/Category/Category";
import Profile from "./Pages/Profile/Profile";
import Korzinka from "./Pages/Korzinka/Korzinka";
import Favorites from "./Pages/Favorites/Favorites";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/profile/:sectionName" element={<Profile />} />
            <Route path="/korzinka" element={<Korzinka/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
