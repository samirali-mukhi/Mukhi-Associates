import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
