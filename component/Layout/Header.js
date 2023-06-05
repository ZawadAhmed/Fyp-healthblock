import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import React, {useState} from "react";
import Menubar from "../MenuBar"
import Sidebar from "./sidebar";


const Header = () => {
const {sticky} = useSticky()
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className="header__transparent ">
        <div className="header__area">
          <div className={`main-header header-xy-spacing ${sticky ? "header-sticky" : ""}`} id="header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6">
                  <div className="logo-area d-flex align-items-center">
                    <div className="logo">
                      <Link href="/">
                        <img src="/logo.svg" alt="logo" />
                      </Link>
                    </div>
                  
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-7 col-md-6 col-6 d-flex align-items-center justify-content-end">
                  <div className="main-menu d-flex justify-content-end mr-15">
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <Menubar />
                    </nav>
                  </div>
                  <div className="header-right d-md-flex align-items-center">
                   
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;
