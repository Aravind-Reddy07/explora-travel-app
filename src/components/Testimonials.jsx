import React from 'react'
import styled from 'styled-components';
import sai from '../assets/sai.jpg'
import aravind from '../assets/aravind.jpeg'
import vamsi from '../assets/vamsi.jpg'

const Testimonials = ({isDark}) => {

  const testData = [
    {
      profile: aravind,
      name: "Aravind Reddy",
      feedback:
        "Explora provided an amazing, well-organized trip with breathtaking destinations. Highly recommend!",
      job: "Student at NITC",
    },
    {
      profile: vamsi,
      name: "Vamsidora",
      feedback:
        "Explora offered excellent customer service and curated unique experiences. A memorable journey!",
      job: "Student at NITC",
    },
    {
      profile: sai,
      name: "Sai Charan",
      feedback:
        "Thanks to Explora, I enjoyed a hassle-free trip with great accommodations and beautiful sights. Will book again!",
      job: "Student at NITC",
    }
  ];
    

  return (
    <Section isDark={isDark}>
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div id="testimonials">
        {testData.map((test) => {
          return (
            <div className="testimonial">
              <div className="info">
                <img src={test.profile} alt="" />

                <div className="details">
                  <h4>{test.name}</h4>
                  <span>{test.job}</span>
                </div>
              </div>
              <p>{test.feedback}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Testimonials

const Section = styled.div`
  margin: 5rem 0;
  color: ${({ isDark }) => (isDark ? "white" : "black")};
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  #testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: ${({ isDark }) => (isDark ? "#3d443d" : "aliceblue")};
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: ${({ isDark }) =>
        isDark
          ? "rgba(108, 111, 113, 0.227) 0px 3px 25px 0px"
          : "rgba(0, 0, 0, 0.35) 0px 7px 15px"};
      transition: 0.3s ease-in-out;

      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        
      }
      .info {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        img {
          height: 2rem;
          border-radius: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    #testimonials {
      flex-direction: column;
      margin: 0;

      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;