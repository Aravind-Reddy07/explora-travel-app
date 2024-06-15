import React from "react";
import styled from "styled-components";
import { BsLinkedin,BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = ({isDark}) => {
  return (
    <FooterContainer 
   isDark={isDark} className="footer">
      <span>Copyright &copy; 2024 Explora. All rights reserved</span>

      <ul className="links">
        <li>
          <a href="#main">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>

      <ul className="sociallinks">
        <li><BsFacebook/></li>
        <li><BsLinkedin/></li>
        <li><AiFillInstagram/></li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
 
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2.5rem;
  background-color: ${({ isDark }) => (isDark ? "#2f374b" : "#d0d8ff")};
  border-radius: 0.5rem;
  color: ${({ isDark }) => (isDark ? "white" : "black")};

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;

    li {
      a {
        text-decoration: none;
        color: ${({ isDark }) => (isDark ? "white" : "black")};
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          color: #302ce9;
        }
      }

      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .sociallinks {
      flex-direction: row;
    }
  }
`;