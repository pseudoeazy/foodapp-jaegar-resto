import Product from "@components/featuredlist/Product";
import products from "@data/products";
import orderType from "constants/orderType";

const Products = () => {
  return (
    <div className="w-full min-h-screen mt-6 ">
      <section className="flex justify-between items-center ">
        <h2 className="text-white font-semibold text-[20px]">Choose Dishes</h2>
        <select className="w-[6.25rem] h-12 rounded-lg bg-basebg-400 p-3.5 text-white border border-basebg-200 text-sm font-medium">
          {orderType.map(({ label, value }, idx) => (
            <option key={idx} value={value}>
              {label}
            </option>
          ))}
        </select>
      </section>
      <section className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-x-7 gap-y-6 mt-6 ">
          {products.map((product, idx) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
