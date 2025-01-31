import React from "react";
import { UserIcon, CartIcon } from "./Icons";

const UserActions = () => {
  return (
    <div className="user-actions">
      <UserIcon />
      <div className="cart">
        <CartIcon />
        <span className="cart-amount">$2,500.99</span>
      </div>
    </div>
  );
};

export default UserActions;
