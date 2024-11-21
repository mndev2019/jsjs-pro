import "../../components/header/style.css";

const SideNavbar = () => {
  return (
    <div className="">
      <div className=" fixedSidebar vh-100 d-flex align-items-center bg-transparent roboto ">
        {/* {home ? ( */}
        {/* <div className={`w-full homesidebar`}>
            <h4 className={ ""}>
              ADVOCATE
              <span className="d-block">KUMAR DEEPRAJ</span>
            </h4>
            <ul className="roboto text-[#020000] ">
              <li>
                <a >
                  HOME
                </a>
              </li>
              <li>
                <a >
                  OUR STORY
                </a>
              </li>
              <li>
                <a >
                  KNOWLEDGE <span className="d-block">VAULT</span>
                </a>
              </li>
              <li>
                <a  >
                  INSIGHT HUB
                </a>
              </li>
            </ul>
          </div> */}
        {/* ) : ( */}
        <div className="flex flex-col items-center justify-center othersidebar w-full text-[#020000]">
          {" "}{/* Show alternative content for non-home pages */}
          <h4 className="">
            ADVOCATE
            <span className="d-block pt-2">KUMAR DEEPRAJ</span>
          </h4>
          <ul>
            <li>
              <a className="">HOME</a>
            </li>
            <li>
              <a className="">OUR STORY</a>
            </li>
            <li>
              <a className="">
                KNOWLEDGE <span className="d-block">VAULT</span>{" "}
              </a>
            </li>
            <li>
              <a className=""> INSIGHT HUB</a>
            </li>
          </ul>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default SideNavbar;
