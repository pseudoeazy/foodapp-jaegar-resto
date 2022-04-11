import { useState } from "react";
import { CreditCard, Paypal, Wallet, CheckMark } from "components/icons/";
import CreditCardForm from "./CreditCardForm";
import scrollbarStyle from "@components/sidebar/Navbar.module.css";

const methods = [
  {
    icon: CreditCard,
    label: "Credit Card",
    transact: CreditCardForm,
    isEnabled: true,
  },
  {
    icon: Paypal,
    label: "Paypal",
    transact: "",
    isEnabled: false,
  },
  {
    icon: Wallet,
    label: "Cash",
    transact: "",
    isEnabled: false,
  },
];

const styles = {
  method: `
  relative
  flex
  flex-col
  items-center
  justify-center
    w-[6.3125rem]
    h-16
    my-4
    rounded-lg
    border
    `,
};

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(methods[0]);
  return (
    <section
      className={`h-[28.375rem]  overflow-x-hidden  overflow-y-scroll pb-4  mt-6 border-y border-basebg-200   ${scrollbarStyle.scrollbar}`}
    >
      <div className="mt-6">
        <h2 className="font-semibold text-white text-[1.25rem]">
          Payment Method
        </h2>
        <section>
          <div className="flex space-x-2">
            {methods.map(({ icon: Icon, transact, label, isEnabled }, idx) => (
              <div
                role="button"
                onClick={() =>
                  setSelectedMethod({
                    icon: Icon,
                    transact,
                    label,
                    isEnabled,
                  })
                }
                key={idx}
                className={`${styles.method} ${
                  selectedMethod.label === label
                    ? "text-white bg-basebg-300 border-textbg-300"
                    : "text-textbg-300 bg-basebg-400 border-basebg-300"
                }`}
              >
                {selectedMethod.label === label && (
                  <div className="absolute top-1.5 right-1.5 ">
                    <CheckMark />
                  </div>
                )}
                <Icon isHover={selectedMethod.label === label} />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {selectedMethod.isEnabled &&
            (!!selectedMethod.transact ? (
              [selectedMethod.transact].map((transact, i) => {
                const Transact = transact;
                return <Transact key={i} />;
              })
            ) : (
              <div>
                <p>Cannot Process at this time</p>
              </div>
            ))}
        </section>
      </div>
    </section>
  );
};

export default PaymentMethod;
