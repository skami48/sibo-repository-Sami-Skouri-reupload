import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
/**
 * @typedef {import("@prismicio/client").Content.FirstBlocSlice} FirstBlocSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FirstBlocSlice>} FirstBlocProps
 * @param { FirstBlocProps }
 */
const FirstBloc = ({ slice }) => (
  <section className="getIntouch">
    <nav>
      <div className="navMenu">
        <Link href="#" className="small">
          Services
        </Link>
        <Link href="#" className="small">
          Pricing
        </Link>
        <Link href="#" className="small">
          Company
        </Link>
      </div>
      <div className="Logo">Logo</div>
      <Link href="#" className="CTA-Small style1">
        Get in Touch
      </Link>
    </nav>
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
        stroke-width="8"
        stroke-linecap="round"
      />
    </svg>
    <div className="TitlesZonetext">
      <PrismicRichText field={slice.primary.get_in_touch_title} />
      <Link href="#" className="CTA-Small style1">
        Get in Touch
      </Link>
    </div>
    <span>
      <div className="GetInTouch_bloc">
        <PrismicRichText field={slice.primary.title} />

        <PrismicRichText field={slice.primary.Text1} />
        <div className="titleFlex">
          <div className="ImageSlot">
            <Image
              src={slice.primary.image1.url}
              alt={slice.primary.image1.alt}
              width={578}
              height={578}
            />
          </div>
          <div className="ImageSlot">
            <Image
              src={slice.primary.image2.url}
              alt={slice.primary.image2.alt}
              width={578}
              height={578}
            />
          </div>
        </div>
      </div>
    </span>
  </section>
);

export default FirstBloc;
