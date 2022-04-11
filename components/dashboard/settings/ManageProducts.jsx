import scrollStyle from "/components/sidebar/Navbar.module.css";
import products from "data/products";
import Product from "./Product";

const ManageProducts = () => {
  return (
    <section
      className={`w-[46.4375rem] h-[45.1875rem] overflow-x-hidden overflow-y-scroll bg-basebg-400 p-6 rounded-lg ${scrollStyle.scrollbar}`}
    >
      <section>
        <ul className="grid grid-cols-3 gap-4">
          {products.map((product, idx) => (
            <Product key={idx} index={idx} {...product} />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ManageProducts;
