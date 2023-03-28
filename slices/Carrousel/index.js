import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";
import Image from "next/image";
/**
 * @typedef {import("@prismicio/client").Content.CarrouselSlice} CarrouselSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CarrouselSlice>} CarrouselProps
 * @param { CarrouselProps }
 */
const Carrousel = ({ slice }) => {
  const [currentImage, setCurrentImage] = useState(0);
  let changeImageTime = 5000;
  let shownImage = currentImage;
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((shownImage + 1) % slice.items.length),
      changeImageTime
    );
    return () => clearInterval(interval);
  });

  return (
    <section className="CarrousselBloc">
      <div>
        <div className="CarrousselRightElement">
          <h2>{slice.items[currentImage].elementtitle}</h2>

          <PrismicRichText field={slice.items[currentImage].elementtext} />
          <div className="Buttons">
            <button
              onClick={() =>
                currentImage == 0
                  ? setCurrentImage(slice.items.length - 1)
                  : setCurrentImage(currentImage - 1)
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentImage((currentImage + 1) % slice.items.length)
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </button>
            <div className="ButtonPins">
              {slice?.items?.map((i, index) => (
                <button
                  className={
                    "ButtonPin" + (currentImage == index ? " Selected" : "")
                  }
                  onClick={() => setCurrentImage(index)}
                  key={index}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <div className="CarrousselLeftElement">
          <div className="Signature">
            <svg
              width="238"
              height="214"
              viewBox="0 0 238 214"
              fill="none"
              alt="signature"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7673 77.1204C5.9073 77.1204 3.2411 97.9098 3.2411 108.69C3.2411 128.091 13.2664 145.969 21.7477 162.801C27.5512 174.318 36.0133 192.585 31.43 205.856C28.3125 214.883 15.8984 212.435 10.1045 208.19C-8.5583 194.515 9.4963 161.868 19.5417 149.35C26.6563 140.484 35.3864 132.408 44.7891 126.01C47.9469 123.862 51.5822 122.23 54.1037 119.254C62.5907 109.239 60.3059 89.4783 58.0257 77.6117C57.1593 73.1029 54.8526 64.1388 51.2236 60.9056C50.466 60.2306 50.6231 67.6137 50.672 68.0917C51.7834 78.9525 55.3906 89.9614 57.8418 100.521C61.8009 117.577 65.4865 134.692 69.1787 151.807C71.1635 161.007 72.8923 170.187 74.2037 179.507C74.63 182.537 75.5015 191.574 75.8582 188.535C77.425 175.187 76.0639 161.458 77.6354 147.999C77.7813 146.749 79.7489 126.552 83.3344 129.511C89.4532 134.562 91.8637 143.487 96.2646 149.903C98.3188 152.897 97.9804 135.837 97.9804 134.241C97.9804 128.999 97.9804 123.758 97.9804 118.517C97.9804 118.38 97.7922 112.193 97.9804 116.06C98.2033 120.639 101.535 125.138 104.354 128.59C111.076 136.825 106.03 86.4722 108.153 96.8975C109.904 105.497 112.441 113.945 115.568 122.141C115.831 122.831 117.932 130.198 119.49 130.371C120.731 130.509 120.402 127.997 120.47 126.747C120.854 119.661 120.572 111.579 120.225 104.698C118.575 71.9959 112.496 40.2196 105.824 8.26902C105.401 6.24023 103.521 0.367509 103.679 2.43416C104.219 9.46153 107.159 17.1612 109.195 23.7468C116.932 48.781 125.762 73.575 135.852 97.7573C136.214 98.6267 137.768 104.769 139.038 100.951C140.92 95.2928 141.323 89.0151 142.102 83.1395C142.328 81.4379 143.263 64.4858 147.863 68.1531C153.242 72.4419 156.438 80.8726 158.893 87.0703C162.113 95.1975 160.822 83.2595 160.854 80.437C160.907 75.6686 159.957 68.5149 166.369 69.6272C171.47 70.512 176.287 73.3897 181.567 71.5926C189.934 68.7445 226.171 61.9467 235 60.9056"
                stroke="#E4C87F"
                strokeWidth="4"
                strokeLinecap="square"
              />
            </svg>
          </div>
          <div className="ImageContainer">
            <Image
              src={slice.items[currentImage].elementimage.url}
              alt={"image"}
              placeholder="empty"
              fill
            />
          </div>
          <p className="Big"> {slice.items[currentImage].imagetitle}</p>
          <PrismicRichText field={slice.items[currentImage].imagesubtitle} />
        </div>
      </div>
    </section>
  );
};

export default Carrousel;
