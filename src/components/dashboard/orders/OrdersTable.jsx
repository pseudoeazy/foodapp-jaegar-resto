import { Table } from "components/common/table";
import orders from "constants/orders";
import orderColumns from "constants/orderColumns";
import Order from "./Order";

const OrdersTable = () => {
  return (
    <div>
      <Table colums={orderColumns} rows={orders} customBody={Order} />
    </div>
  );
};

export default OrdersTable;
