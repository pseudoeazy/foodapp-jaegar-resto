import { useReducer } from "react";

const intialSettings = {
  isContinueToPayment: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "CONTIUE_TO_PAYMENT":
      return { ...state, isContinueToPayment: !state.isContinueToPayment };

    default:
      return state;
  }
};

export default function useAppSettings() {
  const [appSettings, setAppSettings] = useReducer(userReducer, intialSettings);

  return {
    appSettings,
    setAppSettings,
  };
}
