import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/hero.png'

const Main = () => {
  return (
    <MainSection id="main">
      <div className="background">
        <img src={backgroundImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Discover India's hidden gems
            with Explora. Embark on unforgettable journeys, immerse in diverse
            cultures, and let your wanderlust lead the way. Start your Indian
            adventure with Explora today!
          </p>
        </div>

        <div className="search">
          <div className="container text">
            <input type="text" placeholder="Enter a Location" />
          </div>
          <div className="container date">
            <label>Check-in</label>
            <input type="date" />
          </div>
          <div className="container date">
            <label>Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </MainSection>
  );
}

export default Main

const MainSection = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }

  .content {
    position: absolute;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
  }
  .search {
    display: flex;
    background-color: #ffffffce;
    padding: 0.5rem;
    border-radius: 0.5rem;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 1.5rem;

      label {
        font-size: 1.1rem;
        color: #03045e;
      }
      input {
        border: none;
        background-color: transparent;
        color: black;
        text-align: center;

        &[type="date"] {
          padding-left: 1rem;
        }
        &::placeholder {
          color: black;
        }
        &:focus {
          outline: none;
        }
      }
    }
    button {
      padding: 1rem;
      border-radius: 0.3rem;
      border: none;
      background-color: #4361ee;
      color: white;
      transition: 0.3s ease-in-out;
      text-transform: uppercase;
      font-size: 1.1rem;
      cursor: pointer;
      &:hover {
        background-color: #023e8a;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;

    .background {
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1.2rem;
          letter-spacing: 0.1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }

    .search{
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;

        .container{
            padding: 0 0.8rem;

            input[type="date"]{
                padding-left: 1rem;
            }

        }
        button{
            padding:1rem;
            font-size: 1rem;
        }
    }
  }
}
`;