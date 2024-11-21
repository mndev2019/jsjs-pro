"use client";
import { useState } from "react";
import data from "../../services/discription-data.json";
import Link from "next/link";
import "../home/style.css";

const MainDiscription = () => {
  const [selectedItem, setSelectedItem] = useState(data[0]._id); // Default to the first item
  const selectedItemData = data.find((item) => item._id === selectedItem);
  console.log("data come from ", selectedItemData);
  return (
    <div className="w-full ">
      <div className=" bg-white ">
        <div className="service-area-4 lg:py-[150px] py-[50px] practisearea">
          <div className="service-topwrap-3 text-center pt-[50px]">
            <h2 className="subtitle font-bold font-libreCaslon text-[2rem]">
              Our Expertise, Services, and{" "}
              <span className="block">Practice Areas.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-12 items-center justify-center">
            <div className="lg:col-span-4 col-12">
              <div className="w-full flex flex-col items-center justify-center px-5 leftcol p-5">
                <ul className="w-[60%] text-center">
                  {data.map((item) => (
                    <li
                      key={item._id}
                      className={`mb-3 p-2 roboto ${
                        selectedItem === item._id ? "active" : ""
                      }`}
                      onClick={() => setSelectedItem(item._id)} // Update selected item on click
                      style={{ cursor: "pointer" }}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-6 col-12">
              {selectedItemData && ( // Only render if the selected item data is available
                <div
                  className="w-100 rightcol position-relative img-fluid"
                  style={{
                    backgroundImage: `url(${selectedItemData.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="practisetext position-relative">
                    <h2 className="practicetitle animate__animated animate__bounce roboto">
                      {selectedItemData.title}
                    </h2>
                    <p
                      className="practiseareasubtitle roboto text-white"
                      style={{ textAlign: "justify" }}
                    >
                      {selectedItemData.short_description}
                    </p>
                    {/* <Link to={`expertise/${selectedItemData.url}`}>
                                    <div className='practisetextcircle mt-2'>
                                        <ArrowRightOutlined />
                                    </div>
                                </Link> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDiscription;
