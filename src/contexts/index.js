import React  from 'react';

const MainNavContext = React.createContext([]);
const useMainRoutes = () => React.useContext(MainNavContext);

const MainNavProvider = (props) => {
  const { routes } = props
  return (
    <MainNavContext.Provider value={{routes}} {...props} />
  )
}

export {
  MainNavProvider, useMainRoutes
}
