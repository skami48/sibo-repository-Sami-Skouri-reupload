import Head from "next/head";

import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Union.svg";

export default function Home({ page }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SliceZone
          slices={page.data.slices}
          components={components}
        ></SliceZone>
      </main>
      <footer className="footer">
        <div className="list">
          <div className="elem1">
            <h3 href={"/"} className="Big">
              Services
            </h3>
          </div>
          <div className="elem6">
            <Link className="black " href={"/"}>
              Full PMS
            </Link>
            <Link className="black" href={"/"}>
              White label branding
            </Link>
            <Link className="black" href={"/"}>
              Dedicated support team
            </Link>
          </div>
          <div className="elem2">
            <h3 href={"/"} className="Big">
              Features
            </h3>
          </div>
          <div className="elem7">
            <Link className="black" href={"/"}>
              Channel Management
            </Link>
            <Link className="black" href={"/"}>
              Customised Website & Mobile App
            </Link>
            <Link className="black" href={"/"}>
              Payment processing, Paylinks & Deposits
            </Link>
            <Link className="black" href={"/"}>
              Multi calendar
            </Link>
            <Link className="black" href={"/"}>
              Pricing tool
            </Link>
            <Link className="black" href={"/"}>
              Owner Portal
            </Link>
          </div>
          <div className="elem8">
            <Link className="black" href={"/"}>
              Online Check-In
            </Link>
            <Link className="black" href={"/"}>
              Journey
            </Link>
            <Link className="black" href={"/"}>
              Unified Inbox
            </Link>
            <Link className="black" href={"/"}>
              Customizable Analytics
            </Link>
            <Link className="black" href={"/"}>
              NPS and InStay reviews
            </Link>
          </div>

          <div className="elem4">
            <h3 href={"/"} className="Big">
              Company
            </h3>
          </div>
          <div className="elem9">
            <Link className="black" href={"/"}>
              About us
            </Link>
            <Link className="black" href={"/"}>
              Careers
            </Link>
            <Link className="black" href={"/"}>
              Blog
            </Link>
          </div>
          <div className="elem5">
            <h3 href={"/"} className="Big">
              Contact
            </h3>
          </div>
          <div className="elem10">
            <Link href={"/"} className="CTA-Medium style1">
              <div>Get in touch</div>
            </Link>
            <Link href={"/"} className="CTA-Medium style2">
              <div>Get a quote</div>
            </Link>
          </div>
        </div>
        <hr />
        <div className="BottomElem">
          <div>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9635 2.52161L20.9631 2.52208L17.8098 5.66169L14.6907 2.55478L14.6903 2.55438L14.689 2.55316L14.689 2.55315C12.2858 0.219311 8.17924 0.500042 6.14081 3.15832L2.10242 8.15791L2.10241 8.1579L2.10168 8.15886L2.1006 8.16027C1.35633 9.13174 0.953145 10.32 0.953145 11.5421V15.7244C0.953145 18.8033 3.45889 21.2987 6.54919 21.2987H13.6436C15.1503 21.2987 16.3711 22.5153 16.3711 24.0152V28.9684C16.3711 30.4684 15.1503 31.6849 13.6436 31.6849H6.54919C5.04249 31.6849 3.82162 30.4684 3.82162 28.9684V23.3365V23.3028L3.78965 23.2921L3.69503 23.2604C2.79159 22.9577 1.96691 22.4836 1.25995 21.8767L1.03052 21.6798L0.953145 21.6134V21.7153V28.9684C0.953145 32.0473 3.45888 34.5427 6.54919 34.5427H13.6436C16.7339 34.5427 19.2396 32.0473 19.2396 28.9684V24.0152C19.2396 20.9363 16.7339 18.4409 13.6436 18.4409H6.54919C5.04249 18.4409 3.82162 17.2244 3.82162 15.7244V11.5421C3.82162 10.9474 4.01755 10.3691 4.37934 9.89607L8.4177 4.89652L8.41771 4.89653L8.41844 4.89557L8.41952 4.89416C9.41117 3.5998 11.5125 3.46013 12.686 4.59884L12.686 4.59886L12.6862 4.59905L12.6868 4.59961L15.7632 7.6843C15.5411 7.92659 15.3013 8.20428 15.0605 8.5111C14.2001 9.60755 13.1365 11.3141 13.1365 13.2227C13.1365 15.8007 15.2312 17.8947 17.8204 17.8947C20.4096 17.8947 22.5044 15.8007 22.5044 13.2227C22.5044 11.3111 21.4326 9.60331 20.5673 8.50762C20.3256 8.20157 20.0849 7.92452 19.8618 7.68268L22.963 4.57075C22.9631 4.57065 22.9632 4.57054 22.9633 4.57044C24.0934 3.47831 26.0514 3.57946 27.0743 4.77467C27.0744 4.77483 27.0746 4.77499 27.0747 4.77516L31.2187 9.89523L31.2187 9.89524L31.2195 9.89621L31.2207 9.89758C31.632 10.3792 31.7989 11.0063 31.7989 11.6659V28.9684C31.7989 30.4684 30.578 31.6849 29.0713 31.6849H21.2492H21.2156L21.2048 31.7167L21.1728 31.8106C20.8662 32.7111 20.3875 33.5325 19.7757 34.236L19.5765 34.4651L19.509 34.5427H19.6118H29.0713C32.1617 34.5427 34.6674 32.0473 34.6674 28.9684V11.6659C34.6674 10.3507 34.2714 9.06063 33.4069 8.04741C33.4067 8.04723 33.4065 8.04705 33.4064 8.04687L29.2623 2.92667L29.2623 2.92666L29.2615 2.92572L29.2603 2.92433L29.2247 2.95476L29.2603 2.92432C27.1639 0.470045 23.2848 0.275326 20.9635 2.52161ZM17.3203 10.2713C17.487 10.0588 17.6545 9.8624 17.8135 9.68609C17.9744 9.86331 18.144 10.0609 18.3129 10.2748C19.0777 11.2432 19.6359 12.3064 19.6359 13.2227C19.6359 14.2268 18.8209 15.0369 17.8204 15.0369C16.82 15.0369 16.005 14.2268 16.005 13.2227C16.005 12.3034 16.561 11.2389 17.3203 10.2713Z"
                fill="#5d750f"
                stroke="#5d750f"
                stroke-width="0.0937107"
              />
            </svg>

            <h3>sibo</h3>
          </div>

          <div>
            <p className="black">©2023 SIBO. All rights Reserved</p>
            <Link className="black" href={"/"}>
              Legal Mentions
            </Link>
            <Link className="black" href={"/"}>
              Made by Bruno
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("homepage", "main");
  return {
    props: {
      page,
    },
  };
}
