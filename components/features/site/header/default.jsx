import React from "react";
import ContactLink from "../contact-link/default";

const Header = () => (
  <header className="site-header">
    <a href="/" className="site-header__logo">Demo News</a>
    <ContactLink />
  </header>
);

Header.label = "Site header";

export default Header;
