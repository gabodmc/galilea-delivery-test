import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>{`© ${year} Demo News. All rights reserved.`}</p>
    </footer>
  );
};

Footer.label = "Site footer";

export default Footer;
