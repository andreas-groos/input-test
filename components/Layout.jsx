import React, { useEffect } from "react";
import PropTypes from "prop-types";

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    console.log("SCROLL TO TOP");
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }
};

function Layout({ children, fullScreen = true, className = "", isFocused }) {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className={isFocused ? "layout-wrapper no-height" : "layout-wrapper"}>
      <div className={`layout ${fullScreen ? "fullscreen" : ""} ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
