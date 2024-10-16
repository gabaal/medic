import React from "react";

// const brandsData = [
//   {
//     imageSrc:
//       "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg",
//     lightImageSrc:
//       "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
//     altText: "graygrids",
//     link: "#",
//   },
//   {
//     imageSrc:
//       "https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg",
//     lightImageSrc:
//       "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
//     altText: "lineicons",
//     link: "#",
//   },
//   {
//     imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg",
//     lightImageSrc:
//       "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
//     altText: "uideck",
//     link: "#",
//   },
//   {
//     imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg",
//     lightImageSrc:
//       "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
//     altText: "ayroui",
//     link: "#",
//   },
// ];
export type SingleImageProps = {
  href: string;
  imgSrc: string;
  alt: string;
};

const Brands = () => {
  return (
    <>
      <section className="bg-slate-100 py-10 lg:py-[60px] dark:bg-dark">
        <h2 className="text-center pb-6">Trusted by</h2>
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <SingleImage
                  href="#"
                  alt="image"
                  imgSrc="https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg"
                />
                <SingleImage
                  href="#"
                  alt="image"
                  imgSrc="https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg"
                />
                <SingleImage
                  href="#"
                  alt="image"
                  imgSrc="https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg"
                />
                <SingleImage
                  href="#"
                  alt="image"
                  imgSrc="https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Brands;
const SingleImage = ({ href, imgSrc, alt }: SingleImageProps) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
      >
        <img src={imgSrc} alt={alt} className="h-10 w-full dark:hidden" />
      </a>
    </>
  );
};
