import React from 'react'
import './App.css' 
import Nav from './components/Nav'
import Main from './components/Main'
import Services from './components/Services'
import Recommend from './components/Recommend'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import scrollreveal from 'scrollreveal'
import { useEffect,useState } from 'react'
import styled from 'styled-components'

const App = () => {

 const [isDark, setIsDark] = useState(false);

 console.log(isDark);
useEffect(()=>{

    const sr = scrollreveal(
        {
            origin:"top",
            distance:"80px",
            duration:2000,
            reset:true
        }
    );

    sr.reveal(
        `
            nav,
            #main,
            #services,
            #recommend,
            #testimonials,
            footer`,{
            opacity:0,
            interval:300
            }
        
    )
},[])
  return (
    <body className={isDark === true ? "dark" : "light"}>
      <MainContainer >
        <Nav isDark={isDark} setIsDark={setIsDark} />
        <Main isDark={isDark} setIsDark={setIsDark} />
        <Services isDark={isDark} setIsDark={setIsDark} />
        <Recommend isDark={isDark} setIsDark={setIsDark} />
        <Testimonials isDark={isDark} setIsDark={setIsDark} />
        <Footer isDark={isDark} setIsDark={setIsDark} />
      </MainContainer>
    </body>
  );
}

export default App

const MainContainer = styled.div`
  margin: 0;
  padding: 1rem 2rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;