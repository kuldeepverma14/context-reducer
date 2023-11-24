import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper className="section">
      <h2 className="head">Feel free to contact us!</h2>
      <div className="containe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54889.04829149505!2d76.82105155819882!3d30.702498447071846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f936ed6a2b757%3A0x898668d7061b40f0!2sPanchkula%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700728138664!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form action="https://formspree.io/f/xnqkkazj" method="POST" className="contact">
        <input
          className="email"
          type="email"
          name="username"
          placeholder="Email"
          autoComplete="off"
          required
        />
        <input
          className="pass"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <textarea
          className="pass"
          name="message"
          id=""
          cols="40"
          rows="10"
          required
        ></textarea>
        <input className="submit" type="submit" value="Send" />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
.containe{
padding:20px 30px 10px 30px;
}
.contact{
  margin:20px;
  display:flex;
  flex-direction:column;
 align-items:center;
 gap:30px;
}

.submit{
  width:100px;
  cursor:pointer;
  &:hover{
    transform:scale(0.9);
  }
}

input{
 width:120rem;
}
`;
