import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Exquisite rooms"
          subtitle="starting at €199"
        >
          <Link to="/rooms" className="btn-primary">
            Check out our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
