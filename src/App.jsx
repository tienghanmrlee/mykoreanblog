import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import Home from "./routes/Home";
import Courses from "./routes/Courses";
import Blog from "./routes/Blog";
import Library from "./routes/Library";
import Contact from "./routes/Contact";

export default function App() {
  const [authOpen, setAuthOpen] = useState({ open: false, mode: "login" }); // mode: login | register

  return (
    <>
      <Header onAuth={(mode) => setAuthOpen({ open: true, mode })} />
      <main>
        <Routes>
          <Route path="/" element={<Home onAuth={(m) => setAuthOpen({ open: true, mode: m })} />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/library" element={<Library />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      {authOpen.open && (
        <AuthModal mode={authOpen.mode} onClose={() => setAuthOpen({ open: false, mode: "login" })} />
      )}
    </>
  );
}
