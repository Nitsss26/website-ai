import React from "react";
import Image from "next/image";
import Link from "next/link";

type Brand = {
  imageSrc: string;
  lightImageSrc: string;
  altText: string;
  link: string;
};

const brandsData: Brand[] = [
  {
    imageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/graygrids.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/graygrids-white.svg",
    altText: "graygrids",
    link: "#",
  },
  {
    imageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/lineicons.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/lineIcons-white.svg",
    altText: "lineicons",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/assets/images/marketing/brands/uideck.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/uideck-white.svg",
    altText: "uideck",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/assets/images/marketing/brands/ayroui.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/assets/images/marketing/brands/ayroui-white.svg",
    altText: "ayroui",
    link: "#",
  },
];

export default function BrandsSection() {
  return (
    <section className="bg-[#020617] py-20 lg:py-[120px] dark:bg-dark ]">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-3xl font-bold text-white dark:text-white md:text-4xl">
          Trusted by the best
        </h2>
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type SingleImageProps = {
  brand: Brand;
};

const SingleImage: React.FC<SingleImageProps> = ({ brand }) => {
  const { link, imageSrc, lightImageSrc, altText } = brand;
  return (
    <>
      <Link
        href={link}
        className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
        <Image
          src={imageSrc}
          alt={altText}
          width={150}
          height={40}
          className="h-10 w-full dark:hidden"
        />
        <Image
          src={lightImageSrc}
          alt={altText}
          width={150}
          height={40}
          className="hidden h-10 w-full dark:block"
        />
      </Link>
    </>
  );
};
