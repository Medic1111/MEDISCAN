import { createContext, useState } from "react";

export const authCtx = createContext({
  isAuth: false,
  setIsAuth: () => {},
  currentUser: {},
  setCurrentUser: () => {},
});

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  return (
    <authCtx.Provider
      value={{
        isAuth,
        setIsAuth,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </authCtx.Provider>
  );
};

export default AuthProvider;
