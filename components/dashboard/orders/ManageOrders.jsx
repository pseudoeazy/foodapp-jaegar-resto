import Summary from "./Summary";
import OrdersTable from "./OrdersTable";
import scrollStyle from "/components/sidebar/Navbar.module.css";

const ManageOrders = () => {
  return (
    <section className="w-[40.375rem] min-h-screen  ">
      <section className="flex space-x-6 h-[8.9375rem]">
        <Summary />
        <Summary />
        <Summary />
      </section>
      <section
        className={`w-[40.375rem] h-[31.625rem] mt-6 rounded-lg bg-basebg-400  ${scrollStyle.scrollbar}`}
      >
        <OrdersTable />
      </section>
    </section>
  );
};

export default ManageOrders;
