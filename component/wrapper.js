
//import React, {useEffect} from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Wrapper = ({ children }) => {
  

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
