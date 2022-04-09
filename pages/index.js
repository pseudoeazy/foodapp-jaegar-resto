import Layout from "@components/Layout";
import { Navbar, Cart } from "@components/sidebar/";

export default function Index() {
  return (
    <Layout>
      <Navbar />
      <main className="flex-1 min-h-screen border-2 border-green-600">1</main>
      <Cart />
    </Layout>
  );
}
