import Head from "next/head";

const Header = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {children}
      </Head>
      <header></header>
    </>
  );
};

export default Header;
