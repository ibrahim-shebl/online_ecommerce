import React from "react";
import Container from "../components/Container";
import payment  from "../assets/payment.webp";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="mt-10">
      <FooterTop />
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p>@2024 By Eng Ibrahim Shebl. All rights reserved.</p>
        <img src={payment} alt="payment-img" className="object-cover" />
      </Container>
    </div>
  );
};

export default Footer;
