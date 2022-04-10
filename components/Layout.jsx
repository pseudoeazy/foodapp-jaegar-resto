const Layout = ({ children, popUp: PopUp }) => (
  <div className="relative w-[74.625rem] mx-auto scroll-smooth">
    {PopUp && <PopUp />}
    <div className="relative flex w-[74.625rem] mx-auto scroll-smooth">
      {children}
    </div>
  </div>
);

export default Layout;
