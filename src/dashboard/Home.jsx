import  {useEffect } from "react";
import HeroSection from "../component/heroSection";
import { useGlobalCustomHook } from "../context";

const Home = () => {
  const { homePage } = useGlobalCustomHook();
  useEffect(() => {
    homePage();
  }, []);

  return (
    <>
      <HeroSection />
    </>
  );
};
export default Home;
