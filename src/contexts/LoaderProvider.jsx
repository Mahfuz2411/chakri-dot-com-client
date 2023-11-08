import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const LoaderContext = createContext(null);

const LoaderProvider = ({ children }) => {
  const [isLoadingData, setIsLoadingData] = useState(true);
  return (
    <LoaderContext.Provider value={{ isLoadingData, setIsLoadingData }}>
      {children}
    </LoaderContext.Provider>
  );
};

LoaderProvider.propTypes = {
  children: PropTypes.node,
};

export default LoaderProvider;
