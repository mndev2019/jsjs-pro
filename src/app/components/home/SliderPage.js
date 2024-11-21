"use client";

import Image from "next/image";
import slidedata from "../../services/Slider.json";
import Slider from "react-slick";

const SliderPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 1, // Show 2 slides in a row
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        {slidedata.map((items) => (
          <div
            key={items.content}
            className="flex lg:flex-row  flex-col gap-8 items-center w-full lg:py-[50px] py-[10px] lg:px-[40px] px-[25px] "
          >
            <div className="flex lg:flex-row  flex-col  lg:gap-0 gap-[40px]">
              <div className="lg:w-1/2 w-full flex flex-col  gap-5 ">
                <h1 className="lg:text-[2.2rem] text-[22px] text-[#020000] font-bold font-libreCaslon lg:leading-[39px] leading-[26px]">
                  {items.content?.title?.text}
                </h1>
                {items.content?.description.map((item, index) => (
                  <div key={`description-${index}`}>
                    {item.text1 && (
                      <p className="text-[16px] text-[#333333] font-normal font-Montserrat text-justify">
                        <span className="block font-semibold">
                          {item.text1}
                        </span>
                        {item.text2}
                      </p>
                    )}
                    {item.text3 && (
                      <p className="text-[16px] text-[#333333] font-normal font-Montserrat ">
                        <span className="block font-semibold">
                          {item.text3}
                        </span>
                        {item.text4}
                      </p>
                    )}
                  </div>
                ))}

                <div className="lg:pt-4 ">
                  <a
                    href=""
                    className=" w-[150px] h-[50px] text-[#FFF854] bg-[#000000] flex items-center justify-center text-[16px] font-semibold font-nunito leading-[16px] px-[25px] py-[10px]"
                    style={{ borderRadius: "20px 0px 20px 0px" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 w-full flex flex-col items-center">
                <Image
                  src="/images/ngo-1.jpg"
                  width={500}
                  height={300}
                  className="rounded-[12px] object-cover w-full"
                  alt="slider-1"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPage;
