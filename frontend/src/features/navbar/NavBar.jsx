import React, { useState, useEffect } from "react";
import DesktopNavbar from "./DesktopNavbar";
import useIsMobile from "../../hooks/useIsMobile";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const isMobile = useIsMobile();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100
        ? setShowMobileNavbar(true)
        : setShowMobileNavbar(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <>
          <DesktopNavbar />
          {showMobileNavbar && <MobileNavbar />}
        </>
      )}
    </>
  );
}

export default Navbar;
