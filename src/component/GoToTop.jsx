import React, { useEffect, useState } from "react";
import { BiUpArrowCircle } from "react-icons/bi";
import styled from "styled-components";

export default function GoToTop(){
    const [visible,setVisible] = useState(false)
    const Gototop =() =>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }

    const scrollHeight = () =>{
        let heightToHidden = 20 //after this height we will show uparrow button
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;
        console.log("scroll height", scroll)
        if(scroll>heightToHidden){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    useEffect(()=>{
       window.addEventListener("scroll",scrollHeight)
       return () => window.removeEventListener("scroll", scrollHeight);//to clear cache memory 
    },[])
    return(
        <Wrapper className="section">
        {visible && (
        <button className="btn" onClick={Gototop}><BiUpArrowCircle className="arrow"/></button>
        )}
        </Wrapper>
    )
}

const Wrapper = styled.section`
.btn{
    position:fixed;
    font-size:30px;
    height:40px;
    width:40px;
}
.arrow{
    animation: gototop 1.2s linear infinite alternate-reverse;
}
@keyframes gototop {
    0% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: translateY(1rem);
    }
  }
}
`