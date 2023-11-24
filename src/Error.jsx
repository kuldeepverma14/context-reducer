import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

export default function Error(){

    return(
        <Wrapper className="section">
        <h2 className="head">
       Error 404
       <NavLink to="/">
        <input className="submit" type="submit" value="Go back"/>
        </NavLink>
        </h2>

        </Wrapper>
    )
}

const Wrapper = styled.section`
.head{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
.submit{

    width:130px;
    cursor:pointer;
    &:hover{
      transform:scale(0.9);
    }
  }
  
`