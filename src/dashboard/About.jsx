import React, { useEffect } from "react";
import HeroSection from "../component/heroSection";
import { useGlobalCustomHook } from "../context";

const About = () => {
  const {aboutPage} = useGlobalCustomHook()
  useEffect(()=>{
    aboutPage()
  },[])
  return (
    <>
      <HeroSection  />
    </>
  );
};
export default About;
