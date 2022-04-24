const TableBody = ({ rows, customBody: CustomBody }) => {
  return (
    <tbody className="font-primary bg-transparent">
      {CustomBody
        ? rows?.map((row, i) => <CustomBody key={i} row={row} />)
        : rows?.map((row, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full `}
                >
                  {row}
                </span>
              </td>
            </tr>
          ))}
    </tbody>
  );
};
export default TableBody;
