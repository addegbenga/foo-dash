import React from "react";
import mask1 from "../img/mask1.svg";
import mask2 from "../img/mask2.svg";
import mask3 from "../img/mask3.svg";
import mask4 from "../img/mask4.svg";

export default function Landing() {
  return (
    <section className="landing-section">
      <section className="landing-intro-container">
        <div className="landing-intro-wrapper">
          <h6> FOODASH</h6>
          <h1>Why stay hungry when you can order from Foodash</h1>
          <p>Download the Foodash app now on</p>
          <div className="landing-intro-btn">
            <button className="btn-playstore">Playstore</button>
            <button className="btn-appstore">App store</button>
          </div>
        </div>
      </section>
      <div className="landing-mockup1">
        <img src={mask1} alt="mask" />
      </div>
      <div className="account-container">
        <h1 className="account-title">How the app works</h1>
        <div className="account-wrapper">
          <div className="account-reg-container">
            <h2>Create an account</h2>
            <h1>Create/login to an existing account to get started</h1>
            <p>An account is created with your email and a desired password</p>
          </div>
          <div className="mask2">
            <img src={mask2} alt="mockup" />
          </div>
        </div>
      </div>
      <div className="account-container">
        {/* <h1 className="account-title">Explore while shopping</h1> */}
        <div className="account-wrapper">
          <div className="account-reg-container">
            <h2>Explore while shopping</h2>
            <h1>Shop for your favorites meal as e dey hot.</h1>
            <p>
              Shop for your favorite meals or drinks and enjoy while doing it.
            </p>
          </div>
          <div className="mask2">
            <img src={mask3} alt="mockup" />
          </div>
        </div>
      </div>
      <div className="account-container">
        <div className="account-wrapper">
          <div className="account-reg-container">
            <h2>Checkout</h2>
            <h1>When you done check out and get it delivered.</h1>
            <p>When you done check out and get it delivered with ease.</p>
          </div>
          <div className="mask2">
            <img src={mask4} alt="mockup" />
          </div>
        </div>
      </div>
      <div className="download-container">
        <h1>Download the app now.</h1>
        <p>Most calendars are designed for teams. </p>
        <div className="download-btn">
          <button className="buy-now-btn">Buy now</button>
          <button className="try-btn">Try for free</button>
        </div>
      </div>
      <div className="footer-container">
        <ul>
          <li><i className="fab fa-twitter fa-lg"></i></li>
          <li><i className="fab fa-facebook fa-lg"></i></li>
          <li><i className="fab fa-linkedin fa-lg"></i></li>
        </ul>
        <p>Just type what's on your mind and we'll </p>
      </div>
    </section>
  );
}
