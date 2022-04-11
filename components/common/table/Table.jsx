import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ colums, rows, customBody }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 ">
      <TableHeader colums={colums} />
      <TableBody rows={rows} customBody={customBody} />
    </table>
  );
};
export default Table;
