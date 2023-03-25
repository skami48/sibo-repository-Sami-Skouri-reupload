import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TestSliceSlice} TestSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestSliceSlice>} TestSliceProps
 * @param { TestSliceProps }
 */
const TestSlice = ({ slice }) => (
  <section>
    <span className="title">
      <h2>ceci est un test</h2>
    </span>

    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
        background-color: green;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default TestSlice;
