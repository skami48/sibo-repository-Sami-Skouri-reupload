import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
/**
 * @typedef {import("@prismicio/client").Content.FirstBlocSlice} FirstBlocSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FirstBlocSlice>} FirstBlocProps
 * @param { FirstBlocProps }
 */
const FirstBloc = ({ slice }) => (
  <section className="getIntouch">
    <nav>
      <div className="navMenu">
        <a className="small">Services</a>
        <a className="small">Pricing</a>
        <a className="small">Company</a>
      </div>
      <div className="Logo">Logo</div>
      <a className="CTA-Small style1">Get in Touch</a>
    </nav>
    <span className="title">
      <div className="GetInTouch">
        <PrismicRichText field={slice.primary.title} />

        <PrismicRichText field={slice.primary.Text1} />
        <Image
          src={slice.primary.image1.url}
          alt={slice.primary.image1.alt}
          fill
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
        />
      </div>
    </span>
  </section>
);

export default FirstBloc;
