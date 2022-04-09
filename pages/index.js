import Layout from "@components/Layout";
import Header from "@components/Header";
import Products from "@components/featuredlist/Products";
import { Navbar, Cart } from "@components/sidebar/";

export default function Index() {
  return (
    <Layout>
      <Navbar />
      <main className="flex-1 min-h-screen p-6  bg-basebg-200">
        <Header title="Food POS Dark theme Tablet Device| Jaegar Resto" />
        <Products />
      </main>
      <Cart />
    </Layout>
  );
}
