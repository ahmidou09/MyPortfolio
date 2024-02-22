import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import useIsMobile from "../../hooks/useIsMobile";

function Navbar() {
  const isMobile = useIsMobile();
  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
}

export default Navbar;
