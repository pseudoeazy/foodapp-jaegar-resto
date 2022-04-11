import Head from "next/head";
const Header = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>{children}</header>
    </>
  );
};

export default Header;
