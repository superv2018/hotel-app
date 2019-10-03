import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";


const Contact = () => {
    return (
        <Hero>
        <Banner
          title="contact us"
          subtitle="for bookings and enquiries call +358452092020"
        >
          <Link to="/" className="btn-primary">
            return Home
          </Link>
        </Banner>
      </Hero>
    )
}

export default Contact;

