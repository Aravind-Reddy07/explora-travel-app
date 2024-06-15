import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Nav = ({ isDark, setIsDark }) => {
  const [navState, setNavState] = useState(false);

  return (
    <>
      <NavBar isDark={isDark}>
        <div className="container">
          <div className="logo-name">
            Expl
            <BsGlobeCentralSouthAsia className="icon-globe" />
            ra
          </div>

          <div className="toggle">
            <div className="theme-manage">
              {!isDark ? (
                <MdOutlineDarkMode
                  onClick={() => setIsDark(true)}
                  className="res-theme"
                />
              ) : (
                <MdOutlineLightMode
                  onClick={() => setIsDark(false)}
                  className="res-theme"
                />
              )}
            </div>
            <div className="menu">
              {navState ? (
                <VscChromeClose onClick={() => setNavState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavState(true)} />
              )}
            </div>
          </div>
        </div>

        <ul>
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

        {!isDark ? (
          <MdOutlineDarkMode
            onClick={() => setIsDark(true)}
            className="theme"
          />
        ) : (
          <MdOutlineLightMode
            onClick={() => setIsDark(false)}
            className="theme"
          />
        )}
      </NavBar>

      <ResponsiveNav state={navState} isDark={isDark}>
        <ul>
          <li>
            <a href="#main" onClick={() => setNavState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavState(false)}>
              Testimonials
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
};

export default Nav;


const NavBar = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${({ isDark }) => (isDark ? "white" : "black")};

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .logo-name {
    color: ${({ isDark }) => (isDark ? "white" : "black")};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    gap: 0.15rem;

    .icon-globe {
      font-size: 1.05rem;
      color: ${({ isDark }) => (isDark ? "white" : "black")};
    }
  }

  .theme {
    font-size: 1.3rem;
    color: ${({ isDark }) => (isDark ? "white" : "black")};
  }

  .toggle {
    display: none;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;

    li {
      a {
        text-decoration: none;
        color: ${({ isDark }) => (isDark ? "white" : "#0077b6")};
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;

        &:hover {
          color: ${({ isDark }) => (isDark ? "#aaa" : "#023e8a")};
        }
      }

      &:first-of-type {
        a {
          color: ${({ isDark }) => (isDark ? "white" : "#023e8a")};
          font-weight: 700;
        }
      }
    }
  }

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 1.1rem;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    letter-spacing: 0.05rem;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #023;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .theme-manage {
          .res-theme {
            font-size: 1.2rem;
            color: ${({ isDark }) => (isDark ? "white" : "black")};
          }
        }

        .menu {
          color: ${({ isDark }) => (isDark ? "white" : "black")};
        }
      }
    }

    ul,
    .theme {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 6;
  background-color: ${({ isDark }) => (isDark ? "#333" : "white")};
  color: ${({ isDark }) => (isDark ? "white" : "black")};
  width: calc(100vw - 4rem);
  height: 30vh;
  align-items: center; 
  transition: 0.2s ease-in-out;
  top: ${({ state }) => (state ? "50px" : "-400px")};

  ul {
    flex-direction: column;
    list-style: none;

    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: ${({ isDark }) => (isDark ? "white" : "#0077b6")};
        transition: 0.1s ease-in-out;

        &:hover {
          color: ${({ isDark }) => (isDark ? "#aaa" : "#023e8a")};
        }
      }

      &:first-of-type {
        a {
          color: ${({ isDark }) => (isDark ? "white" : "#023e8a")};
          font-weight: 700;
        }
      }
    }
  }
`;
