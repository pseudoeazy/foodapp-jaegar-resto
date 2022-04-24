import { createContext, useContext, useReducer } from "react";

const intialSettings = {
  isContinueToPayment: false,
};

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "CONTIUE_TO_PAYMENT":
      return { ...state, isContinueToPayment: !state.isContinueToPayment };

    default:
      return state;
  }
};

export default function AppProvider({ children }) {
  const [appSettings, setAppSettings] = useReducer(appReducer, intialSettings);

  return (
    <AppContext.Provider
      value={{
        appSettings,
        setAppSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useApp = () => useContext(AppContext);
