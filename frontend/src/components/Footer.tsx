import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/component_styles/footer.scss";
import { useLocation } from "react-router-dom";

const NavItem = ({
  link = "#",
  children,
}: {
  link?: string;
  children: string;
}) => {
  return (
    <li className="nav-item mb-2">
      <a href={link} className="nav-link p-0 text-white">
        {children}
      </a>
    </li>
  );
};

const SocialIcon = ({
  link = "#",
  children,
}: {
  link?: string;
  children: string;
}) => {
  return (
    <li className="ms-3">
      <a className="link-body-emphasis" href={link} aria-label={children}>
        <i className={`bi bi-${children.toLowerCase()} text-white`} />
      </a>
    </li>
  );
};

export default function Footer() {
  if (useLocation().pathname != "/landing")
    return (
      <>
        <footer
          className="footer mt-auto py-5 bg-blue "
          style={{ padding: "120px" }}
        >
          <div className="row mx-3">
            <div className="col-0 col-md-1"></div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="font-coustard">Section</h5>
              <ul className="nav flex-column">
                <NavItem link="/">Home</NavItem>
                <NavItem link="/menu">Menu</NavItem>
                <NavItem>Pricing</NavItem>
                <NavItem>FAQs</NavItem>
                <NavItem>About</NavItem>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="font-coustard">Section</h5>
              <ul className="nav flex-column">
                <NavItem link="/">Home</NavItem>
                <NavItem link="/menu">Menu</NavItem>
                <NavItem>Pricing</NavItem>
                <NavItem>FAQs</NavItem>
                <NavItem>About</NavItem>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 className="font-coustard">
                  Subscribe to our{" "}
                  <small className="fs-6 opacity-75">non-existent</small>{" "}
                  newsletter
                </h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label className="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn bg-yellow font-coustard" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
              <div className="mt-3">
                <h5 className="font-coustard">
                  Download our{" "}
                  <small className="fs-6 opacity-75">non-existent</small> app
                </h5>
                <div className="d-flex gap-2">
                  <img
                    src="src/assets/download-app/apple_app_store.svg"
                    className="social-badge"
                  />
                  <img
                    src="src/assets/download-app/google_play_store.svg"
                    className="social-badge"
                  />
                </div>
              </div>
            </div>
            <div className="col-0 col-md-1"></div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2026 Risto Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex socials">
              <SocialIcon>Facebook</SocialIcon>
              <SocialIcon>Instagram</SocialIcon>
              <SocialIcon>TikTok</SocialIcon>
              <SocialIcon>YouTube</SocialIcon>
            </ul>
          </div>
        </footer>
      </>
    );
}
