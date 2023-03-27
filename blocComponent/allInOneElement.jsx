import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
const check =
  "https://images.prismic.io/siborepos/2b48f42c-f24d-43c0-9ef4-b97a4adc2d2b_Check.png?auto=compress,format";

export default function AllinOneElement({ sliceitem }) {
  return (
    <div className={"AllIneOneElement"}>
      <div className="ImageContainer">
        <Image
          src={sliceitem.image.url}
          alt={sliceitem.image.alt}
          placeholder="empty"
          width={578}
          height={430}
        />
      </div>
      <div className="Content">
        <div className="Title ">
          <Image
            src={sliceitem.imagetext.url}
            alt={sliceitem.imagetext.alt}
            placeholder="empty"
            width={64}
            height={64}
          />
          <h3 className="BlackColor">{sliceitem.title}</h3>
        </div>
        <div className="BlackColor">
          <PrismicRichText field={sliceitem.description} />
        </div>

        {sliceitem.pins ? (
          <div className="Pins">
            {sliceitem.buttonitem00 ? (
              <div className="pin0">
                <Image
                  src={check}
                  alt={"check"}
                  placeholder="empty"
                  width={24}
                  height={24}
                />
                <h5 className="BlackColor">{sliceitem.item00}</h5>
              </div>
            ) : (
              <></>
            )}
            {sliceitem.buttonitem01 ? (
              <div className="pin1">
                <Image
                  src={check}
                  alt={"check"}
                  placeholder="empty"
                  width={24}
                  height={24}
                />
                <h5 className="BlackColor">{sliceitem.item01}</h5>
              </div>
            ) : (
              <></>
            )}
            {sliceitem.buttonitem02 ? (
              <div className="pin2">
                <Image
                  src={check}
                  alt={"check"}
                  placeholder="empty"
                  width={24}
                  height={24}
                />
                <h5 className="BlackColor">{sliceitem.item02}</h5>
              </div>
            ) : (
              <></>
            )}
            {sliceitem.buttonitem03 ? (
              <div className="pin3">
                <Image
                  src={check}
                  alt={"check"}
                  placeholder="empty"
                  width={24}
                  height={24}
                />
                <h5 className="BlackColor">{sliceitem.item03}</h5>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        <Link className="CTA-Medium style2" href={sliceitem.button}>
          <div>{sliceitem.bottontext}</div>
        </Link>
      </div>
    </div>
  );
}
