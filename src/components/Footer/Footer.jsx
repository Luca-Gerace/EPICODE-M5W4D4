import { useContext } from "react";
import Context from "../../modules/Context";

function Footer() {
  
  // Theme prop
  const { theme } = useContext(Context);
  
  return (
    <footer className={`d-flex bg-theme-${theme} mt-4 py-4 shadow-lg`}>
      <span className="m-auto p-2">
        <strong>EPIBOOK</strong> - Copyright {new Date().getFullYear()}
      </span>
    </footer>
  );
}

export default Footer;