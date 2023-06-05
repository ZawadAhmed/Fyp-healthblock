import Link from "next/link";
import React from "react";

// footer two content data
const footer_two_content = [
  {
    id: 1,
    title: "About",
    cls: "col-xl-3",
    footer_col: "footer-2-col-2",
    ml: "ml-90",
    links: [
      { name: "About Us", link: "/about" },
      { name: "Blog", link: "/blog" },
    ],
  },
  {
    id: 2,
    title: "Support",
    cls: "col-xl-2",
    footer_col: "footer-2-col-3",
    ml: "",
    links: [
      { name: "Contact us", link: "/contact" },
      { name: "Online Chat", link: "/contact" },
      { name: "Whatsapp", link: "/" },
    ],
  },
];

// social_links
const social_links = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },

  {
    link: "",
    target: "_blank",
    icon: "fa-brands fa-twitter", 
    name: "Twitter",
  },

  {
    link: "http://whatsapp.com",
    target: "_blank",
    icon: "fa-brands fa-whatsapp",
    name: "Twitter",
  },
];

// footer bottom data
const footer_bottom = [
  { name: "Privacy policy", link: "/" },
  { name: "Terms of Use", link: "/" },
];


const FooterTwo = () => {
  return (
    <>
      <footer>
        <div
          className="footer-bg theme-bg-secondary"
          style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
        >
          <div className="f-border-bottom pt-115 pb-60">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <div className="footer-widget footer-widget-white footer-2-col-1 mb-55">
                    <div className="footer-widget__text mb-35">
                      <h3 className="footer-widget__title">
                        <Link href="/">
                          <img src="/"
                            alt="logo"
                          />
                        </Link>
                      </h3>
                    </div>
                    <p>
                      Ensure that your medical records are safe and sound
                    </p>
                    <div className="footer-widget-info-list">
                      <ul>
                        <li>
                          <div className="footer-widget-info d-flex">
                            <div className="footer-widget-info-icon">
                              <i className="fi fi-rr-phone-call"></i>
                            </div>
                            <div className="footer-widget-info-text ml-10">
                              <label>Phone</label>
                              <a href="tel:(6017) 555-0555">(6017) 555-0555</a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="footer-widget-info d-flex">
                            <div className="footer-widget-info-icon">
                              <i className="fi fi-rr-envelope"></i>
                            </div>
                            <div className="footer-widget-info-text ml-10">
                              <label>Email</label>
                              <a href=" Healthblock@gmail.com">
                                HealthBlock@gmail.com
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="footer-widget-info d-flex align-items-center">
                            <div className="footer-widget-info-icon">
                              <i className="fi fi-rr-marker"></i>
                            </div>
                            <div className="footer-widget-info-text ml-10">
                              <label>Address</label>
                              <a href="#">
                                IIUM GOMBAK, Jalan Gombak, 53100 Selangor.
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {footer_two_content.map((item, i) => (
                  <div
                    key={i}
                    className={`${item.cls} col-lg-2 col-md-6 col-6`}
                  >
                    <div
                      className={`footer-widget footer-widget-white ${item.footer_col} ${item?.ml} mb-55`}
                    >
                      <div className="footer-widget__text mb-35">
                        <h3 className="footer-widget__title">{item.title}</h3>
                      </div>
                      <div className="footer-widget__link">
                        <ul>
                          {item.links.map((sub_item, i) => (
                            <li key={i}>
                              <Link href={sub_item.link}>{sub_item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-xl-3 col-lg-4 col-md-6 col-10">
                  <div className="footer-widget footer-widget-white footer-2-col-4 ml-30 mb-55">
                    <div className="footer-widget__text mb-35">
                      <h3 className="footer-widget__title">Social Media</h3>
                    </div>
                    <p>
                      Reach us for any inquiries and assistance needed!
                    </p>
                    <div className="footer-widget__social d-flex align-items-center">
                      {social_links.map((link, i) => (
                        <a key={i} href={link.link} target={link.target}>
                          <i className={link.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f-copyright pt-60 pb-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="f-copyright__dom">
                    <span>
                      HealthBlock© {new Date().getFullYear()}, All Rights Reserved
                    </span>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                  <div className="f-copyright__list f-bottom-list">
                    <ul className="d-flex align-items-center">
                      {footer_bottom.map((item, i) => (
                        <li key={i}>
                          <Link href={item.link}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
