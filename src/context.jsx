// create a context object(warehouse) which consists of:
// provider
// consumer (useContext)
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
// you've created a React context named AppContext using the React.createContext() method. In React, the createContext function is used to create a context object, which consists of a Provider and a Consumer. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

const API = "https://jsonplaceholder.typicode.com/todos";

const initialState = {
  name: "",
  image: "",
  services: [],
};


const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const homePage = () => {
    return dispatch({
      type: "Home_Update",
      payload: {
        name: "kuldeep",
        image: "/images/hero.jpeg",
      },
    });
  };
  const aboutPage = () => {
    return dispatch({
      type: "About_Update",
      payload: {
        name: "kd",
        image: "/images/hero.svg",
      },
    });
  };

  // to call api

  const services = async (url) => {
    try {
      const stringData = await fetch(url);
      const jsonData = await stringData.json();
      dispatch({ type: "services", payload: jsonData });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    services(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, homePage, aboutPage }}>
      {children}
    </AppContext.Provider>
  );
  //   return <AppContext.Provider value={{name:"kd"}}>{children}</AppContext.Provider>; here value is the default value for the context  .
};

//global custom hook
const useGlobalCustomHook = () => {
  return useContext(AppContext);
};

// export { AppContext, AppProvider, useGlobalCustomHook };
export { AppProvider, useGlobalCustomHook };
