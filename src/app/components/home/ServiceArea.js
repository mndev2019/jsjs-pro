"use client";
import Image from "next/image"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "../home/ServiceArea.js"

const ServiceArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 2,  // Show 2 slides in a row
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024, // For tablets and medium screens
            settings: {
                slidesToShow: 2, // Show 2 slides at a time on tablet
            }
        },
        {
            breakpoint: 768, // For mobile screens in landscape mode
            settings: {
                slidesToShow: 2, // Show 1 slide at a time on mobile landscape
            }
        },
        {
            breakpoint: 480, // For small mobile screens
            settings: {
                slidesToShow: 1, // Show 1 slide at a time on small devices
            }
        }
    ]
};

  const data = [
    {
      id: 1,
      title: "Personal Injury Law",
      image: "/images/image-slide1.jpg",
      icon: "/images/icon-1.png",
      description: "A brief summary of the Personal Injury Law and its key aspects.",
    },
    {
      id: 2,
      title: "DUI Defense Law",
      image: "/images/image-slide2.jpg",
      icon: "/images/icon-2.png",
      description: "A brief summary of DUI Defense Law and its key aspects.",
    },
    {
      id: 3,
      title: "Family Law",
      image: "/images/image-slide3.jpg",
      icon: "/images/icon-3.png",
      description: "A brief summary of Family Law and its key aspects.",
    },
    {
      id: 4,
      title: "Criminal Defense",
      image: "/images/image-slide1.jpg",
      icon: "/images/icon-3.png",
      description: "A brief summary of Criminal Defense Law and its key aspects.",
    },
  ];

  return (
    <div>
      <div className="w-full service-area-3 lg:py-[100px] py-[50px] position-relative aboutus lg:px-10 px-[25px] bg-[#000000] ">
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-10">
            <div className="lg:col-span-4 md:col-span-4 col-span-1">
              <div className="service-left-4 text-start">
                <h2 className="subtitle font-bold font-libreCaslon lg:leading-[43px] leading-[30px] lg:text-[2rem] text-[22px] text-white lg:py-3 py-2">Insightful Legal Updates</h2>
                <h6 className=" font-bold font-Montserrat lg:leading-[28px] leading-[24px] lg:text-[20px] text-[18px] text-[#fff854]">Key Judgments from India’s Highest Courts</h6>
                <div>
                  <p className="font-normal font-Montserrat text-white text-[16px] lg:py-3 py-2">
                    Discover the pulse of justice with our engaging summaries of
                    the latest judgments from the High Courts across the Country
                    and Supreme Court of India. We distil complex rulings into
                    clear insights, highlighting their significance and impact
                    across various legal domains. Stay informed and empowered as
                    you navigate the ever-evolving landscape of Indian law.
                  </p>
                  <Link href="/insight-hub">
                    <div className="flex items-center justify-center lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] rounded-full bg-white hover:bg-[#fff854] lg:text-[1.5rem] text-[1rem] hover:text-[#0C1A1A] text-black  mt-2">
                      <FaArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 md:col-span-8 col-span-1 fade-slide bottom w-full " data-delay="0.4">
              <div className="service-right-4 w-full">
                <Slider {...settings}>
                  {data.map((itm) => (
                    <div key={itm.id} className="px-3 w-full">
                      <div className="service-item-3">
                     <div className="w-full h-full">   <Image  src={itm.image} alt={itm.title} width={150} height={150} className="w-full h-[300px] object-cover " /></div>
                        <div className="service-text">
                          <div className="service-iconwrap-3">
                            <Image width={50} height={50} src={itm.icon} alt={itm.title} className="" />
                          </div>
                          <h3 className="text-start font-monsterrat font-bold text-[#fff854] hover:text-[#FFFFFF]">
                            <a className="service-title-3" href="case-detail.html">
                              {itm.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;

