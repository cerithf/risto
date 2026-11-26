import "../styles/component_styles/header.scss";
import { useLocation } from "react-router-dom";
const NavItem = ({
  link = "#",
  children,
}: {
  link?: string;
  children: string;
}) => {
  return (
    <li className="nav-item">
      <a href={link} className="nav-link fs-6 rounded-1 px-2 py-1">
        {children}
      </a>
    </li>
  );
};

export default function Header() {
  let titleClasses = "x-6 py-2 text-cream mb-0 font-coustard-black";
  useLocation().pathname == "/" && (titleClasses += " homepage");
  if (useLocation().pathname != "/landing")
    return (
      <header className="header d-flex flex-wrap font-coustard justify-content-center p-3 align-items-center bg-blue column-gap-4">
        <a
          href="/"
          className="d-flex align-items-center me-sm-auto link-body-emphasis text-decoration-none"
        >
          <h1 className={titleClasses}>Risto</h1>
        </a>
        <ul className="nav justify-content-center align-self-end gap-1 gap-lg-3">
          <NavItem link="/book">Book</NavItem>
          <NavItem link="/menu">Our Menu</NavItem>
          <NavItem link="/locations">Locations</NavItem>
          <NavItem link="/about">About</NavItem>
          <NavItem link="/faq">FAQs</NavItem>
          <NavItem link="/contact">Contact</NavItem>
        </ul>
      </header>
    );
}
