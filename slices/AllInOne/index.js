import React from "react";
import { PrismicRichText } from "@prismicio/react";
import AllinOneElement from "@/blocComponent/allInOneElement";

/**
 * @typedef {import("@prismicio/client").Content.AllInOneSlice} AllInOneSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AllInOneSlice>} AllInOneProps
 * @param { AllInOneProps }
 */
const AllInOne = ({ slice }) => {
  const ListBuilder = (slice) => {
    if (slice.items) {
      const item = slice.items;

      return (
        <>
          {slice?.items?.map((i, index) => (
            <AllinOneElement sliceitem={i} key={index}></AllinOneElement>
          ))}
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <section className="AllInOne">
      <span className="title">
        <PrismicRichText field={slice.primary.title} />
      </span>
      <div className="Description BlackColor small">
        <PrismicRichText field={slice.primary.description} />
      </div>
      <div className="AllInOneList">{ListBuilder(slice)}</div>
    </section>
  );
};

export default AllInOne;
