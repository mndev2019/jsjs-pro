import Image from "next/image";
import navdatajson from "../../services/navbar.json";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center font-nunito  lg:pl-[100px] px-[30px] lg:pe-[50px] lg:h-[70px] h-[50px] w-full bg-[#000000]" >
              <div className="lg:w-[150px] lg:h-[80px] w-[100px] h-[30px] ">  <Image src={navdatajson.logo.src} alt="" width={150} height={80} className="" /></div>
                <div className="flex gap-[18px]">
                <ul className=" lg:flex hidden items-center gap-[18px] text-white  text-[16px] font-medium">
                    {navdatajson.navbar?.flatMap((item) => (
                        <li key={item.title}>
                            {item.title}
                        </li>
                    ))}
                </ul>
                <div className="bg-[#FFF854] text-[#000000] flex items-center justify-center text-[14px] font-semibold leading-[16px] lg:px-[25px] px-[15px] lg:py-[10px] py-[8px]" style={{ borderRadius: "20px 0px 20px 0px" }}>
                    <a href="">Let&apos;s Talk</a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
