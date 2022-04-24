const menus = [
  {
    label: "Dine In",
  },
  {
    label: "To Go",
  },
  {
    label: "Delivery",
  },
];

const Header = () => {
  return (
    <header className="font-primary">
      <h2 className="font-semibold text-white">Orders #34562</h2>
      <nav className="flex space-x-0.5 w-[13.375rem] h-[2.125rem] mt-6">
        {menus.map(({ label }, idx) => (
          <div
            key={idx}
            className={`flex justify-center items-center text-center text-sm font-semibold w-[4.125rem] h-full rounded-lg ${
              idx === 0
                ? "bg-primary text-white"
                : "text-primary border border-basebg-200"
            }`}
          >
            {label}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
