import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";

import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

const Recommend = ({ isDark }) => {
  const [active, setActive] = useState(0);

  const data = [
    {
      image: Destination1,
      title: "Kerala",
      subTitle:
        "Kerala, known as 'God's Own Country', is a state on the southwestern coast of India.",
      cost: "15,000",
      duration: "Approx 3 night trip",
      type: "The Weekend Break",
    },
    {
      image: Destination2,
      title: "Himachal Pradesh",
      subTitle:
        "Himachal Pradesh, a northern Indian state in the Himalayas, is known for its scenic landscapes.",
      cost: "20,000",
      duration: "Approx 4 night trip",
      type: "The Package Holiday",
    },
    {
      image: Destination3,
      title: "Kashmir",
      subTitle:
        "Kashmir, often referred to as 'Paradise on Earth', is known for its beautiful valleys and pristine lakes.",
      cost: "18,000",
      duration: "Approx 3 night trip",
      type: "The Group Tour",
    },
    {
      image: Destination4,
      title: "Andaman and Nicobar Islands",
      subTitle:
        "The Andaman and Nicobar Islands are a group of islands known for their clear waters and coral reefs.",
      cost: "25,000",
      duration: "Approx 5 night trip",
      type: "The Weekend Break",
    },
    {
      image: Destination5,
      title: "Meghalaya",
      subTitle:
        "Meghalaya, a state in Northeast India, is famous for its living root bridges and lush landscapes.",
      cost: "22,000",
      duration: "Approx 4 night trip",
      type: "The Package Holiday",
    },
    {
      image: Destination6,
      title: "Uttarakhand",
      subTitle:
        "Uttarakhand, a northern Indian state, is known for its Hindu pilgrimage sites and scenic beauty.",
      cost: "19,000",
      duration: "Approx 3 night trip",
      type: "The Group Tour",
    },
  ];

  const packages = [
    "All",
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
  ];

  const filteredData =
    active === 0 ? data : data.filter((dst) => dst.type === packages[active]);

  return (
    <Section id="recommend" isDark={isDark}>
      <div className="title">
        <h2>Recommend Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={active === index ? "active" : ""}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations">
        {filteredData.map((dst, index) => (
          <div key={index} className="destination">
            <img src={dst.image} alt={dst.title} />
            <h3>{dst.title}</h3>
            <p>{dst.subTitle}</p>
            <div className="info">
              <div className="services">
                <img src={info1} alt="service 1" />
                <img src={info2} alt="service 2" />
                <img src={info3} alt="service 3" />
              </div>
              <h4>{dst.cost}</h4>
            </div>
            <div className="distance">
              <span></span>
              <span>{dst.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Recommend;

const Section = styled.div`
  padding: 2rem 0;
  color: ${({ isDark }) => (isDark ? "white" : "black")};
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: ${({ isDark }) =>
          isDark ? "2px solid white" : "2px solid black"};
      }
      .active {
        border-bottom: ${({ isDark }) =>
          !isDark ? "0.3rem solid #8338ec" : "0.3rem solid #0685eca3"};
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      background-color: ${({ isDark }) => (isDark ? "#4c6e8977" : "#8338ec14")};
      border-radius: 1rem;
      gap: 0.5rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: ${({ isDark }) =>
          isDark
            ? "#0685eca3 0px 8px 24px"
            : "rgba(0, 0, 0, 0.35) 0px 5px 15px"};
      }
      img {
        width: 100%;
        border-radius: 0.5rem;
      }
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            width: 2rem;
            background-color: ${({ isDark }) =>
              isDark ? "none" : "#4d2ddb84"};
            border-radius: 1rem;
            padding: 0.2rem 0.4rem;
          }
        }
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
