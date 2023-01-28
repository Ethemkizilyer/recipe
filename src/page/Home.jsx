import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import HeroComponent from "../components/Hero";
import FeaturesComponent from "../components/Features";
import FeatureHighlightsComponent from "../components/Highlights";
import CallToActionComponent from "../components/Cta";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const navigateToSearch = useCallback(() => navigate("/search"), [navigate]);
  return (
    <>
      <HeroComponent onClick={navigateToSearch} />
      <FeaturesComponent />
      <FeatureHighlightsComponent />
      <CallToActionComponent onClick={navigateToSearch} />
      <Footer />
    </>
  );
};

export default Home;
