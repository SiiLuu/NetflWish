import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, [handleShow]);

  return (
    <div
      style={{ backgroundColor: show && "#141414" }}
      className="fixed top-0 z-50 w-full p-5 flex justify-between h-20 ease-in-out transition-all duration-500"
    >
      <img
        className="w-28 object-contain fixed left-7 p-2"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="w-11 object-contain fixed right-7"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div>
  );
};

export default Navbar;
