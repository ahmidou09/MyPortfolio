import React, { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import useIsMobile from "../../hooks/useIsMobile";

function Navbar() {
  const isMobile = useIsMobile();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300
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
