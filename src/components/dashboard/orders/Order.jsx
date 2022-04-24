import { useEffect, useState } from "react";
import { getOrderStatuses } from "services/orderStatus";

const Order = ({ row }) => {
  const [statuses, setStatuses] = useState([]);
  const orderStatus = statuses[row?.status] ?? {};

  useEffect(() => {
    getOrderStatuses()
      .then((status) => {
        setStatuses(status);
      })
      .catch((err) => {
        setStatuses([]);
      });
  }, []);

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
        {orderStatus?.title ?? null}
      </td>
    </tr>
  );
};
export default Order;
