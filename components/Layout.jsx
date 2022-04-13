import { useContext } from "react";
import AppContext from "context/AppContext";

const Layout = ({ children, popUp: PopUp }) => {
  const { appSettings } = useContext(AppContext);
  const { isContinueToPayment } = appSettings;

  return (
    <div className="relative w-[74.625rem] mx-auto scroll-smooth">
      {isContinueToPayment && <PopUp />}
      <div className="relative flex w-[74.625rem] mx-auto scroll-smooth">
        {children}
      </div>
    </div>
  );
};

export default Layout;
