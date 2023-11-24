import React from "react";
import { useGlobalCustomHook } from "../context";
import styled from "styled-components";

const Services = () => {
  const { services } = useGlobalCustomHook();
  console.log(services);
  services.map((p) => {
    // console.log(p.id);
  });
  return (
    <Wrapper>
      <div className="section ">
        {services.map((project, index) => (
          <div className="sub-section " key={index}>
            <div>
              {" "}
              <h3 className="head">Project: {project.id}</h3>
            </div>
            <h3>Title:{project.title}</h3>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
export default Services;

const Wrapper = styled.section`
.section{
  padding:5rem;
  display:grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.head{
  font-size:2.5rem;
}
.sub-section{
  padding-bottom:2rem;
  padding-right:2rem;
}
`;
