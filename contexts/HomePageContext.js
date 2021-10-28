import React, { createContext, useContext, useReducer } from "react";

//Context

export const HomePageContext = createContext();

//Contants

const INSCREASE_VALUE = "app/HomePage/INSCREASE_VALUE";
const DECREASE_VALUE = "app/HomePage/DECREASE_VALUE";

const homePageReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case INSCREASE_VALUE:
      return {
        ...state,
        ...payload,
      };
    case DECREASE_VALUE:
      return {
        ...state,
        ...payload,
      };
    default:
      break;
  }
};

const HomePageContextWrapper = ({ children }) => {
  //State
  const initialStates = {
    value: 1,
  };
  const [{ value }, dispatch] = useReducer(homePageReducer, initialStates);

  //Action
  const onIncreaseValue = (value) => {
    dispatch({
      type: INSCREASE_VALUE,
      payload: { value },
    });
  };

  const onDecreaseValue = (value) => {
    dispatch({
      type: DECREASE_VALUE,
      payload: { value },
    });
  };

  //Hanlder
  const inscreaseValue = () => {
    onIncreaseValue(++value);
  };

  const decreaseValue = () => {
    onDecreaseValue(--value);
  };

  return (
    <HomePageContext.Provider
      value={{
        inscreaseValue,
        decreaseValue,
        value,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageState = () => useContext(HomePageContext);

export default HomePageContextWrapper;
