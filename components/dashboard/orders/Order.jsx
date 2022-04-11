import status from "constants/orderStatus";
const Order = ({ row }) => {
  const orderStatus = status[row?.status];
  return (
    <tr className="text-white">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <span className="text-sm text-gray-500"></span>
          <span className="">{row?.customer?.name}</span>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full `}
        >
          {row?.menu}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full `}
        >
          {row?.amount}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {orderStatus?.title ?? status["1"]?.title}
      </td>
    </tr>
  );
};
export default Order;
