import React from "react";

const NavLinks = () => {
  const links = [
    "Deals Today",
    "Special Prices",
    "Fresh",
    "Freezer",
    "Demos",
    "Shop",
    "Blog",
    "Pages"
  ];

  return (
    <div className="nav-links">
      {links.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase().replace(" ", "-")}`}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
