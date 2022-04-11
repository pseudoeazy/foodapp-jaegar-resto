import Layout from "@components/Layout";
import Header from "components/dashboard/Header";
import SubMenu from "components/dashboard/settings/SubMenu";
import { Navbar } from "@components/sidebar/";

export default function Settings() {
  return (
    <Layout>
      <Navbar />
      <main className="flex-1 min-h-screen p-6  bg-basebg-200">
        <Header title="Settings | Jaegar Resto">
          <SubMenu />
        </Header>
      </main>
    </Layout>
  );
}
