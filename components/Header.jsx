import Head from "next/head";
import DishMenu from "./menus/DishMenu";
import withHover from "./hoc/withHover";
import { Search } from "./icons";

const styles = {
  input: `
    flex
    items-center
    justify-center
    placeholder:text-textbg-200 text-white
    transition
    duration-500
    ease-in-out
    transform
    rounded-lg
    bg-formbg
    focus:outline-none
    focus:border-transparent
    focus:ring-2
    focus:ring-white
    focus:ring-offset-2
    focus:ring-offset-formbg
   `,

  button: `
   
   w-full h-12 mt-[2.625rem] 
   mb-6 rounded-lg bg-primary 
   text-sm font-semibold 
   text-basebg-100 
   hover:text-primary 
   hover:bg-transparent
   hover:border-primary
   hover:shadow-lg
    duration-500
    ease-in-out
    transform
    border border-basebg-200`,
};

const HoverComponent = withHover(Search);

const Header = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {children}
      </Head>
      <header>
        <div className="flex justify-between">
          <div className=" flex-1">
            <h1 className="text-white font-semibold text-[1.75rem]">
              Jaegar Resto
            </h1>
            <p className="mt-1 text-textbg-400 font-normal text-base">
              Tuesday, 2 Feb 2021
            </p>
          </div>
          <div className=" flex flex-col justify-center">
            <form className="flex w-[13.75rem] h-12 bg-formbg border border-basebg-200 rounded-lg ">
              <HoverComponent isButton customStyles="py-3.5 pl-3.5 mr-1" />
              <input
                className={`${styles.input} flex h-full py-3.5 pr-3.5 pl-1`}
                placeholder="Search for food, coffe, etc.."
              />
            </form>
          </div>
        </div>
        <DishMenu />
      </header>
    </>
  );
};

export default Header;
