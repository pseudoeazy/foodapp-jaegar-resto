import DishMenuButton from "./DishMenuButton";

const menus = [
  {
    label: "Hot Dishes",
    value: "hot-dishes",
  },
  {
    label: "Cold Dishes",
    value: "cold-dishes",
  },
  {
    label: "Soup",
    value: "soup",
  },
  {
    label: "Grill",
    value: "grill",
  },
  {
    label: "Appetizer",
    value: "appetizer",
  },
  {
    label: "Dessert",
    value: "dessert",
  },
];

const DishMenu = () => {
  return (
    <section className="flex h-8  mt-6">
      <ul className="flex space-x-8 text-white">
        {menus.map(({ label, value }, idx) => (
          <li key={idx}>
            <DishMenuButton value={value} label={label} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DishMenu;
