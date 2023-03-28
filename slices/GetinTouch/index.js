import React, { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/union.svg";

/**
 * @typedef {import("@prismicio/client").Content.FirstBlocSlice} FirstBlocSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FirstBlocSlice>} FirstBlocProps
 * @param { FirstBlocProps }
 */
const FirstBloc = ({ slice }) => {
  const [toggle, setToggle] = useState(false);

  const menu = (toggle) => {
    return (
      <>
        {toggle ? (
          <div className="Menu" onMouseLeave={() => setToggle(false)}>
            <hr />
            <div>
              <button className={"MenuElem"}>
                <Image src={""} alt=""></Image>
                <h6>Full property Management System</h6>
                <p>
                  Fully customisable guest journeys, dynamic pricing, task
                  management geared to fit your needs.
                </p>
              </button>
              <button className="MenuElem">
                <Image src={""} alt=""></Image>
                <h6>Full property Management System</h6>
                <p>
                  Fully customisable guest journeys, dynamic pricing, task
                  management geared to fit your needs.
                </p>
              </button>
              <button className="MenuElem">
                <Image src={""} alt=""></Image>
                <h6>Full property Management System</h6>
                <p>
                  Fully customisable guest journeys, dynamic pricing, task
                  management geared to fit your needs.
                </p>
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <section className="getIntouch">
      {menu(toggle)}
      <div className="Content">
        <svg
          className="SVGRope"
          width="348"
          height="465"
          viewBox="0 0 348 465"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.39486 460.913C6.39486 443.554 6.51516 426.193 6.07439 408.838C5.55741 388.482 4.99791 368.154 4.95276 347.789C4.86931 310.155 2.78598 271.442 8.31765 234.104C13.2025 201.131 30.6766 171.168 60.2332 154.868C97.6905 134.212 145.577 137.884 186.978 137.884C219.291 137.884 251.811 141.786 284.079 140.447C302.982 139.663 323 136.724 335.594 121.059C347.69 106.012 343.787 79.8837 339.84 62.7342C334.533 39.6768 324.042 18.2687 312.12 -2"
            stroke="#E4C87F"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
        <nav>
          <div className="navMenu">
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
              className={"small" + (toggle ? " Black" : "")}
            >
              Services
            </button>
            <button href="/" className={"small" + (toggle ? " Black" : "")}>
              Pricing
            </button>
            <button href="/" className={"small" + (toggle ? " Black" : "")}>
              Company
            </button>
          </div>
          <div className={"Logo" + (toggle ? " logoMenu" : "")}>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9635 2.52161L20.9631 2.52208L17.8098 5.66169L14.6907 2.55478L14.6903 2.55438L14.689 2.55316L14.689 2.55315C12.2858 0.219311 8.17924 0.500042 6.14081 3.15832L2.10242 8.15791L2.10241 8.1579L2.10168 8.15886L2.1006 8.16027C1.35633 9.13174 0.953145 10.32 0.953145 11.5421V15.7244C0.953145 18.8033 3.45889 21.2987 6.54919 21.2987H13.6436C15.1503 21.2987 16.3711 22.5153 16.3711 24.0152V28.9684C16.3711 30.4684 15.1503 31.6849 13.6436 31.6849H6.54919C5.04249 31.6849 3.82162 30.4684 3.82162 28.9684V23.3365V23.3028L3.78965 23.2921L3.69503 23.2604C2.79159 22.9577 1.96691 22.4836 1.25995 21.8767L1.03052 21.6798L0.953145 21.6134V21.7153V28.9684C0.953145 32.0473 3.45888 34.5427 6.54919 34.5427H13.6436C16.7339 34.5427 19.2396 32.0473 19.2396 28.9684V24.0152C19.2396 20.9363 16.7339 18.4409 13.6436 18.4409H6.54919C5.04249 18.4409 3.82162 17.2244 3.82162 15.7244V11.5421C3.82162 10.9474 4.01755 10.3691 4.37934 9.89607L8.4177 4.89652L8.41771 4.89653L8.41844 4.89557L8.41952 4.89416C9.41117 3.5998 11.5125 3.46013 12.686 4.59884L12.686 4.59886L12.6862 4.59905L12.6868 4.59961L15.7632 7.6843C15.5411 7.92659 15.3013 8.20428 15.0605 8.5111C14.2001 9.60755 13.1365 11.3141 13.1365 13.2227C13.1365 15.8007 15.2312 17.8947 17.8204 17.8947C20.4096 17.8947 22.5044 15.8007 22.5044 13.2227C22.5044 11.3111 21.4326 9.60331 20.5673 8.50762C20.3256 8.20157 20.0849 7.92452 19.8618 7.68268L22.963 4.57075C22.9631 4.57065 22.9632 4.57054 22.9633 4.57044C24.0934 3.47831 26.0514 3.57946 27.0743 4.77467C27.0744 4.77483 27.0746 4.77499 27.0747 4.77516L31.2187 9.89523L31.2187 9.89524L31.2195 9.89621L31.2207 9.89758C31.632 10.3792 31.7989 11.0063 31.7989 11.6659V28.9684C31.7989 30.4684 30.578 31.6849 29.0713 31.6849H21.2492H21.2156L21.2048 31.7167L21.1728 31.8106C20.8662 32.7111 20.3875 33.5325 19.7757 34.236L19.5765 34.4651L19.509 34.5427H19.6118H29.0713C32.1617 34.5427 34.6674 32.0473 34.6674 28.9684V11.6659C34.6674 10.3507 34.2714 9.06063 33.4069 8.04741C33.4067 8.04723 33.4065 8.04705 33.4064 8.04687L29.2623 2.92667L29.2623 2.92666L29.2615 2.92572L29.2603 2.92433L29.2247 2.95476L29.2603 2.92432C27.1639 0.470045 23.2848 0.275326 20.9635 2.52161ZM17.3203 10.2713C17.487 10.0588 17.6545 9.8624 17.8135 9.68609C17.9744 9.86331 18.144 10.0609 18.3129 10.2748C19.0777 11.2432 19.6359 12.3064 19.6359 13.2227C19.6359 14.2268 18.8209 15.0369 17.8204 15.0369C16.82 15.0369 16.005 14.2268 16.005 13.2227C16.005 12.3034 16.561 11.2389 17.3203 10.2713Z"
                fill={toggle ? "  #5d750f" : "white"}
                stroke={toggle ? "  #5d750f" : "white"}
                stroke-width="0.0937107"
              />
            </svg>
            <h3 className={toggle ? "  logoMenu" : ""}>Sibo</h3>
          </div>
          <Link
            href="/"
            className={"CTA-Small style1" + (toggle ? "" : " nomenu")}
          >
            <div>Get in Touch</div>
          </Link>
        </nav>

        <div className="TitlesZonetext">
          <div className="big">
            <PrismicRichText field={slice.primary.get_in_touch_title} />
          </div>

          <Link href="/" className="CTA-Small style1">
            <div>Get in Touch</div>
          </Link>
        </div>
        <span>
          <div className="GetInTouch_bloc">
            <div className="Title">
              <PrismicRichText field={slice.primary.title} />

              <PrismicRichText field={slice.primary.Text1} />
            </div>

            <div className="titleFlex">
              <div className="ImageSlot">
                <Image
                  src={slice.primary.image1.url}
                  alt={slice.primary.image1.alt}
                  placeholder="empty"
                  fill
                />
              </div>
              <div className="ImageSlot">
                <Image
                  src={slice.primary.image2.url}
                  alt={slice.primary.image2.alt}
                  placeholder="empty"
                  fill
                />
              </div>
            </div>
          </div>
        </span>
      </div>
    </section>
  );
};

export default FirstBloc;
