import Layout from "@components/Layout";
import Header from "components/dashboard/Header";
import SubMenu from "components/dashboard/settings/SubMenu";
import ManageProducts from "components/dashboard/settings/ManageProducts";
import { Navbar } from "@components/sidebar/";

export default function Settings() {
  return (
    <Layout>
      <Navbar />
      <main className="flex-1 flex space-x-6 min-h-screen p-6  bg-basebg-200">
        <Header
          title="Manage Products - Settings | Jaegar Resto"
          pageTitle="Settings"
        >
          <SubMenu />
        </Header>
        <ManageProducts />
      </main>
    </Layout>
  );
}
