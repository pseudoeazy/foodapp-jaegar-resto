import PropTypes from "prop-types";
import { Plus, BackArrow } from "components/icons/";
import Button from "./Button";

const styles = {
  plusButton: `
  flex justify-center items-center 
  w-12 h-12 text-center 
  bg-primary  rounded-lg
  hover:border
   hover:bg-transparent
   hover:border-primary
    duration-300
    ease-in-out
    transform
    `,
  backButton: `
  h-6 w-6
  mb-4`,
};

const Header = ({ title, content, hasButton }) => {
  return (
    <header>
      <div className="flex justify-between">
        <div className=" flex-1">
          {hasButton && (
            <Button component={BackArrow} styles={styles.backButton} />
          )}
          <h1 className="text-white font-semibold text-[1.75rem]">{title}</h1>
          <p className="mt-1 text-textbg-400 font-normal text-base">
            {content}
          </p>
        </div>
        {hasButton && (
          <div className=" flex flex-col justify-center">
            <Button component={Plus} styles={styles.plusButton} />
          </div>
        )}
      </div>
    </header>
  );
};

Header.defaultProps = {
  hasButton: false,
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  hasButton: PropTypes.bool,
};

export default Header;
