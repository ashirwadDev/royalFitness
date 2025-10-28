import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import IntroAnimation from './components/IntroAnimation'
export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroAnimation onFinish={() => setShowIntro(false)} />;
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
