import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
    return (
        <>
     <section className="banner-area fix p-relative">
         <div className="banner-bg"   style={{backgroundImage: `url(/img/banner/Bannar0.jpg)`}}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                     <div className="hero-content">
                        <span>HealthBlock </span>
                        <h2 className="hero-title mb-35">Ensure that your medical records are safe</h2>
                        <p>Pleasse install Metamask wallet to proceed or simply connect to your wallet</p>
                        <div className="tp-banner-btn">
                           <Link href="/" className="tp-btn">Connect  Wallet</Link>
                        </div>
                     </div>
                  </div>
                  <div className="banner-shape d-none d-lg-block">
                     <img src="/assets/img/banner/banner-shape-01.png" alt="banner-shape" className="b-shape" />
                  </div>
               </div>
            </div>
         </div>
      </section>
        </>
    );
};

export default HeroBanner;