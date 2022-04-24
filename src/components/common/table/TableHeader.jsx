const TableHeader = ({ colums }) => (
  <thead className="text-white rounded-t-lg">
    <tr>
      {colums.map((column) => (
        <th
          key={column.accessor}
          scope="col"
          className="px-6 py-3 text-left text-xs font-secondary font-medium text-gray-500 uppercase tracking-wider"
        >
          {column.label}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
