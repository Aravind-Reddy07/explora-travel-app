import React from 'react'
import styled from 'styled-components';
import service1 from "../assets/service1.png"
import service3 from "../assets/service3.png"
import service4 from "../assets/service4.png"

const Services = ({isDark}) => {

  const serviceData = [
    {
      icon: service1,
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];
  
  return (
    <Section isDark={isDark} id='services'>
      
      {
        serviceData.map(service=>{

          return(

            <div className="service">

              <div className="icon">
                <img src={service.icon} alt="" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          )
        })
      }
      
    </Section>
  )
}

export default Services

const Section = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  color: ${({ isDark }) => (isDark ? "white" : "black")};
  .service {
    background-color: ${({ isDark }) => (isDark ? "#3d443d" : "aliceblue")};
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;
    padding: 2rem;
    gap: 1rem;
    box-shadow: ${({ isDark }) =>
      isDark
        ? "rgba(108, 111, 113, 0.227) 0px 3px 25px 0px"
        : "rgba(0, 0, 0, 0.35) 0px 5px 15px"};
    transition: 0.3s ease-in-out;

    &:hover {
      transform: translateX(0.2rem) translateY(-1rem);
      box-shadow: ${({ isDark }) =>
        isDark
          ? "rgba(240, 248, 255, 0.2) 0px 7px 29px 0px"
          : "rgba(0, 0, 0, 0.35) 0px 5px 15px"};
    }
  }
  .icon {
    img {
      height: 2.4rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;