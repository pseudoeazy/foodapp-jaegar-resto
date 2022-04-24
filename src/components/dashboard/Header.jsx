import Head from "next/head";
import PropTypes from "prop-types";

const Header = ({ title, pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <h1 className="text-lg font-semibold text-white">{pageTitle}</h1>
        {children}
      </header>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
