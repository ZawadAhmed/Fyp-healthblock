import Image from 'next/image';
import React, { Component } from 'react'
import { Footer } from "semantic-ui-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-4">
            <address>
              <figure>
                <Image src="/img/Svg/Logo Text.svg" width={200} height={200} alt="HealthBlock" title="HealthBlock" />
              </figure>
              IIUM GOMBAK, Selangor, Malaysia <br/>
              <a href="mailto:zawadwasik@gmail.com">zawadwasik@gmail.com</a>
            </address>
          </div>
          <br />
          <br />
          <div className="col-md-3 col-sm-3">
            <ul className="socil-icon-one">
              <li><a href="#" title="Github">Github</a></li>
              <li><a href="#" title="LinkedIn">LinkedIn</a></li>
            </ul>
          </div>

          <div className="clearfix"></div>
          <p>&copy; 2022 HealthBlock.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;