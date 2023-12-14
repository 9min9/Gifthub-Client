export default function Footer() {
  return (
    <>
      <div className="outer-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="outer-footer__content u-s-m-b-40">

                <span className="outer-footer__content-title">Contact Us</span>
                <div className="outer-footer__text-wrap"><i className="fas fa-home"></i>

                  <span>4247 Ashford Drive Virginia VA-20006 USA</span></div>
                <div className="outer-footer__text-wrap"><i className="fas fa-phone-volume"></i>

                  <span>(+0) 900 901 904</span></div>
                <div className="outer-footer__text-wrap"><i className="far fa-envelope"></i>

                  <span>contact@domain.com</span></div>
                <div className="outer-footer__social">
                  <ul>
                    <li>

                      <a className="s-fb--color-hover" href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li>

                      <a className="s-tw--color-hover" href="#"><i className="fab fa-twitter"></i></a></li>
                    <li>

                      <a className="s-youtube--color-hover" href="#"><i className="fab fa-youtube"></i></a></li>
                    <li>

                      <a className="s-insta--color-hover" href="#"><i className="fab fa-instagram"></i></a></li>
                    <li>

                      <a className="s-gplus--color-hover" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="outer-footer__content u-s-m-b-40">

                    <span className="outer-footer__content-title">Information</span>
                    <div className="outer-footer__list-wrap">
                      <ul>
                        <li>

                          <a href="cart.html">Cart</a></li>
                        <li>

                          <a href="dashboard.html">Account</a></li>
                        <li>

                          <a href="shop-side-version-2.html">Manufacturer</a></li>
                        <li>

                          <a href="dash-payment-option.html">Finance</a></li>
                        <li>

                          <a href="shop-side-version-2.html">Shop</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="outer-footer__content u-s-m-b-40">
                    <div className="outer-footer__list-wrap">

                      <span className="outer-footer__content-title">Our Company</span>
                      <ul>
                        <li>

                          <a href="about.html">About us</a></li>
                        <li>

                          <a href="contact.html">Contact Us</a></li>
                        <li>

                          <a href="index.html">Sitemap</a></li>
                        <li>

                          <a href="dash-my-order.html">Delivery</a></li>
                        <li>

                          <a href="shop-side-version-2.html">Store</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="outer-footer__content">

                <span className="outer-footer__content-title">Join our Newsletter</span>
                <form className="newsletter">
                  <div className="u-s-m-b-15">
                    <div className="radio-box newsletter__radio">

                      <input type="radio" id="male" name="gender"/>
                      <div className="radio-box__state radio-box__state--primary">

                        <label className="radio-box__label" htmlFor="male">Male</label>
                      </div>
                    </div>
                    <div className="radio-box newsletter__radio">

                      <input type="radio" id="female" name="gender"/>
                      <div className="radio-box__state radio-box__state--primary">

                        <label className="radio-box__label" htmlFor="female">Female</label></div>
                    </div>
                  </div>
                  <div className="newsletter__group">

                    <label htmlFor="newsletter"></label>

                    <input className="input-text input-text--only-white" type="text" id="newsletter"
                           placeholder="Enter your Email"/>

                    <button className="btn btn--e-brand newsletter__btn" type="submit">SUBSCRIBE</button>
                  </div>

                  <span className="newsletter__text">Subscribe to the mailing list to receive updates on promotions, new arrivals, discount and coupons.</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="lower-footer__content">
                <div className="lower-footer__copyright">

                  <span>Copyright © 2018</span>

                  <a href="index.html">Reshop</a>

                  <span>All Right Reserved</span></div>
                <div className="lower-footer__payment">
                  <ul>
                    <li><i className="fab fa-cc-stripe"></i></li>
                    <li><i className="fab fa-cc-paypal"></i></li>
                    <li><i className="fab fa-cc-mastercard"></i></li>
                    <li><i className="fab fa-cc-visa"></i></li>
                    <li><i className="fab fa-cc-discover"></i></li>
                    <li><i className="fab fa-cc-amex"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}