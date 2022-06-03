import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import Gallerys from "../Gallerys/Gallerys";
import OurSpeciality from "../OurSpeciality/OurSpeciality";
import PopularFoods from "../PopularFoods/PopularFoods";
import Work from "../Works/Work";

const Home = () => {
  return (
    <>
      <BannerSection />
      <OurSpeciality />
      <PopularFoods />
      <Work />
      <Gallerys />
    </>
  );
};

export default Home;
