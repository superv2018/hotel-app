import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Drinks",
        info:
          "We offer free drinks and cocktails to satify your thirty "
      },
      {
        icon: <FaHiking />,
        title: "Hiking",
        info:
          "If you like to see the nature, we have breathtaking views"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Transportion",
        info:
          "Free transportation from and to the airport "
      },
      {
        icon: <FaBeer />,
        title: "Unlimited Alcohol",
        info:
          "Are you a beer fish? We got you covered"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
