import Layout from "@components/Layout";
import Header from "components/dashboard/Header";
import { Navbar } from "@components/sidebar/";
import DateFormatter from "components/common/DateFormatter";
import ManageOrders from "components/dashboard/orders/ManageOrders";

export default function Dashboard() {
  return (
    <Layout>
      <Navbar />
      <main className="flex-1 flex space-x-6 min-h-screen p-6  bg-basebg-200">
        <Header title="Dashboard | Jaegar Resto" pageTitle="Dashboard">
          <div className="mt-1 mb-6 font-normal text-textbg-300 text-base">
            <DateFormatter dateString={new Date().toLocaleDateString()} />
          </div>
          <ManageOrders />
        </Header>
      </main>
    </Layout>
  );
}
