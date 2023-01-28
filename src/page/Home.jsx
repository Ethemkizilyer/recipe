import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import HeroComponent from "../components/HomeHero";
import FeaturesComponent from "../components/HomeFeatures";
import FeatureHighlightsComponent from "../components/HomeHigh";
import CallToActionComponent from "../components/HomeCta";
import Footer from "../components/Footere";

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
