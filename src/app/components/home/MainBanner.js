import Image from "next/image";

const MainBanner = () => {
  return (
    <div>
      <div className="relative w-full ">
        <Image
          src="/images/banner-img.jpg"
          width={1400}
          height={500}
          alt="image"
          className="w-full h-full object-contain"
        />
        <div className="flex flex-col items-center justify-center absolute lg:bottom-[55px] bottom-[20px] left-0 text-white w-full text-center">
          <h1 className="font-bold  lg:text-[2.5rem] md:text-[2rem] text-[16px] lg:leading-[92px] leading-[24px] font-libreCaslon ">
            SINGER / JOURNALISM PRESIDENT
          </h1>
          <h2 className=" lg:block hidden lg:text-[20px] md:text-[18px] text-[11px] font-bold lg:leading-[45px] leading-[20px]  font-libreCaslon ">
            {" "}
            UNIQUE BLEND OF MUSICAL TALENT AND MEDIA ADVOCACY
          </h2>
          <p className="lg:text-[20px] md:text-[18px] text-[11px] font-normal lg:leading-[45px] md:leading-[40px] leading-[20px] text-[#DCDCDC] font-Montserrat">
            Powerful voice and captivating stage presence presence,
          </p>
          <div className="lg:pt-4 pt-2">
            <a
              href=""
              className=" lg:w-[130px] lg:h-[50px]  md:w-[130px] md:h-[50px] w-[90px] h-[32px] bg-[#FFF854] text-[#000000] flex items-center justify-center lg:text-[16px] text-[14px] font-semibold font-nunito leading-[16px]   "
              style={{ borderRadius: "20px 0px 20px 0px" }}
            >
             Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
