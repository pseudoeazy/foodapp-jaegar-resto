import { updateOrderStatus } from "services/orderStatus";
const statuses = [
  {
    title: "pending",
    value: 1,
    color: "bg-yellow",
  },
  { title: "preparing", value: 2, color: "bg-yellow-300" },
  {
    title: "completed",
    value: 3,
    color: "bg-green-300",
  },
  {
    title: "cancelled",
    value: 4,
    color: "bg-red-600",
  },
];

export const generateOrderStatus = async () => {
  statuses.forEach(async (status) => {
    await updateOrderStatus(status);
  });
};
