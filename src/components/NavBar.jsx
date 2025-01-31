import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CategoryMenu from "./CategoryMenu";
import NavLinks from "./NavLinks";
import ContactInfo from "./ContactInfo";
import UserActions from "./UserActions";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Logo />
        <CategoryMenu />
        <SearchBar />
        <ContactInfo />
        <UserActions />
      </div>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
