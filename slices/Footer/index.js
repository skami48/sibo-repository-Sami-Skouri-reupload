import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param { FooterProps }
 */
const Footer = ({ slice }) => (
  <section className="footer">
    <div className="list">
      <div className="elem">
        <p className="Big">Services</p>
        <p>Full PMS</p>
        <p>White label branding</p>
        <p>Dedicated support team</p>
      </div>
      <div className="elem">
        <p className="Big">Features</p>
        <p>Channel Management</p>
        <p>Customised Website & Mobile App</p>
        <p>Payment processing, Paylinks & Deposits</p>
        <p>Multi calendar</p>
        <p>Pricing tool</p>
        <p>Owner Portal</p>
      </div>
      <div className="elem">
        <p>Online Check-In</p>
        <p>Journey</p>
        <p>Unified Inbox</p>
        <p>Customizable Analytics</p>
        <p>NPS and InStay reviews</p>
      </div>
      <div className="elem">
        <p className="Big">Company</p>
        <p>About us</p>
        <p>Careers</p>
        <p>Blog</p>
      </div>
      <div className="elem">
        <p className="Big">Contact </p>
        <button>
          <div>Get in touch</div>
        </button>
        <button>
          <div>Get a quote</div>
        </button>
      </div>
    </div>
    <div className="BottomElem">
      <h3>sibo</h3>
      <div>
        <p>©2023 SIBO. All rights Reserved</p>
        <p>Legal Mentions</p>
        <p>Made by Bruno</p>
      </div>
    </div>
  </section>
);

export default Footer;
