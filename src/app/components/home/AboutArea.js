import Image from "next/image";
import "../home/style.css";

const AboutArea = () => {
  const quotesdata = {
    quotes:
      "A Lawyer’s professional ethics bars him from judging his clients. One has to go by the documents and is obliged to provide the best tailored strategy in the interest for his client.",
    objective:
      "To provide unwavering advocacy and expert legal guidance, ensuring justice and protection of rights for every client, while upholding the highest ethical standards and fostering trust through transparent communication and compassionate support.",
    purpose:
      "Our commitment extends beyond mere representation. We strive to build lasting relationships based on trust, integrity, and transparency. Whether one is facing a legal challenge, seeking advice, or looking to protect their rights, we are here to guide every step of the way."
  };

  return (
    <div>
      <div className="about-area-3   px-3 aboutarea bg-white">
        <div className="">
          <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 gap-[50px] align-items-center firstrow lg:px-[30px] lg:pt-[80px] lg:pb-[100px] py-[50px] px-[10px]">
            <div
              className="relative lg:col-span-5 md:col-span-1 col-span-1 pt-[50px] "
              data-aos="zoom-in"
            >
              <div className="w-full leftcol ">
                <div className="leftcolinner">
                  {/* <div className="lg:w-[100px] lg:h-[50px] w-[40px] h-[0px] "> */}{" "}
                  <Image
                    width={100}
                    height={50}
                    src="/images/quote.png"
                    alt="image"
                    className="object-cover lg:w-[100px] lg:h-[50px] w-[80px]  " // Ensures the image scales correctly within the circular container
                  />
                  {/* </div> */}
                  <h5 className="pt-1 lg:text-[20px] text-[16px] text-[#05264E] lg:leading-[34px] leading-[25px] font-normal font-libreCaslon black">
                    {quotesdata.quotes}
                  </h5>
                  <h4 className="black lg:py-2 pb-1 mt-3 font-Montserrat font-bold lg:text-[21px] text-[18px] text-[#05264E] ">
                    Kumar Deepraj
                  </h4>
                </div>
              </div>
              <div className="flex  items-center justify-center absolute lg:bottom-[-90px] lg:left-[170px] bottom-[-65px] left-[135px] lg:w-[120px] lg:h-[120px] w-[90px] h-[90px] border-[2px] border-[#000000] rounded-full overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src="/images/passport.jpg"
                  alt="image"
                  className="object-cover w-full h-full " // Ensures the image scales correctly within the circular container
                />
              </div>
            </div>
            <div className="lg:col-span-7 md:col-span-1 col-span-1">
              <div className="about-right-3">
                <div className="aboutinnerheading  py-3">
                  <h3 className="font-bold font-libreCaslon lg:text-[1.5rem] text-[20px] firstheading tracking-wider">
                    OBJECTIVE
                  </h3>
                  <p className="font-normal font-Montserrat text-[16px]lg:leading-[26px] leading-[22px] text-[#333]">
                    {quotesdata.objective}
                  </p>
                </div>
                <div className="aboutinner aboutinnerheading font-bold font-libreCaslon lg:text-[1.5rem] text-[20px] pb-3 tracking-wider">
                  <h3 className="">PURPOSE</h3>
                  <p className="font-normal font-Montserrat text-[16px] lg:leading-[26px] leading-[22px] text-[#333]">
                    {quotesdata.purpose}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
