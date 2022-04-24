import moment from "moment";

const DateFormatter = ({ dateString }) => {
  return (
    <time dateTime={dateString}>{moment().format("dddd MM MMM, YYYY")}</time>
  );
};

export default DateFormatter;
