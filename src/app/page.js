import Image from "next/image";
import MainBanner from "./components/home/MainBanner";
import SliderPage from "./components/home/SliderPage";
import MainDiscription from "./components/home/MainDiscription";
import AboutArea from "./components/home/AboutArea";
import ServiceArea from "./components/home/ServiceArea";

export default function Home() {
  return (
   <>
    <MainBanner/>
    {/* <MainDiscription/> */}
    <AboutArea/>
    <ServiceArea/>
    <SliderPage/>
   </>
  );
}
