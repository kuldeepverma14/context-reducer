import React ,{useContext} from "react";
import styled from "styled-components";
import { Button } from "../styles/button";
import { NavLink } from "react-router-dom";
import { useGlobalCustomHook} from "../context"

export default function HeroSection() {
  // const name = useContext(AppContext)
  const {name,image} = useGlobalCustomHook()
  console.log(name)
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="section-top-data">This is me</p>
          {/* <h1 className="hero-heading">{props.name}</h1> */}
          <h1 className="hero-heading">{name} </h1>
          <p className="hero-para">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis repellat, nihil optio aliquam ea eius voluptate
            distinctio maiores incidunt officia quidem, amet doloremque deleniti
            soluta nisi aspernatur id provident, nesciunt assumenda sunt porro?
            Temporibus, eum.{" "}
          </p>
          <Button className="">
            <NavLink to="/contact">Hire Me</NavLink>
          </Button>
        </div>
        <div  className="section-hero-image">
            <picture>
                <img src={image} alt="not found" className="hero-img"/>
            </picture>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;
