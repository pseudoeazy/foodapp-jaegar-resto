const formStyles = {
  input: `    
    transition
      duration-500
      ease-in-out
      transform
      border border-basebg-200
      rounded-lg
      bg-formbg
      focus:outline-none
      focus:border-transparent
      focus:ring-2
      focus:ring-white
      focus:ring-offset-2
      focus:ring-offset-formbg`,
  cardName: `
      w-full 
      h-12
      p-3.5
      text-base `,
};
const CreditCardForm = () => {
  return (
    <form className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label htmlFor="cardHolder" className="text-white text-sm font-medium">
          Cardholder Name
        </label>
        <input
          placeholder="Levi Ackerman"
          className={`${formStyles.input} ${formStyles.cardName}`}
        />
      </div>
      <div>
        <label htmlFor="cardNo" className="text-white text-sm font-medium">
          Card Number
        </label>
        <input
          placeholder="2564 1421 0897 1244"
          className={`${formStyles.input} ${formStyles.cardName}`}
        />
      </div>
      <div className="flex">
        <div className="flex-1 mr-[0.8125rem]">
          <label
            htmlFor="expiryDate"
            className="text-white text-sm font-medium"
          >
            Expiration Date
          </label>
          <input
            placeholder="02/2022"
            className={`w-[9.75rem] h-12 p-3.5 ${formStyles.input} `}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="cvv" className="text-white text-sm font-medium">
            CVV
          </label>
          <input
            type="password"
            placeholder=""
            className={`w-[9.75rem] h-12 p-3.5 ${formStyles.input} `}
          />
        </div>
      </div>
    </form>
  );
};

export default CreditCardForm;
