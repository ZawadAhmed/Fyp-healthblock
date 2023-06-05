import Link from "next/link";
import React from "react";


// about info
const about_info = {
    about_title: "About US",
    sub_title:"Safer Record Management",
    des: <>Welcome to our blockchain-based healthcare platform! We are dedicated to utilizing the latest in blockchain technology to revolutionize the way healthcare information is stored and shared. 
    Our platform is secure, transparent, and efficient, allowing healthcare providers and patients to easily access and manage their health data. Thank you for choosing us as your partner in health.
    </>,
    about_btn: "Read More"
}

const {img_1, img_2, img_3, about_title, sub_title, des, about_btn} = about_info

const AboutArea = () => {
  return (
    <>
      <section
        className="tp-about-area pt-120 pb-90 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
              <div className="tp-about-content pb-30 ml-80">
                <div className="section-title mb-55">
                  <span className="tp-sub-title mb-20">{about_title}</span>
                  <h2 className="tp-section-title mb-15">
                   {sub_title}
                  </h2>
                  <p>
                    {des}
                  </p>
                </div>

                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default AboutArea;
