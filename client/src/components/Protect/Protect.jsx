import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authCtx } from "../../features/auth-ctx";
import axios from "axios";

const Protect = ({ children }) => {
  const authMgr = useContext(authCtx);
  const nav = useNavigate();
  const validateCookie = async () => {
    await axios
      .get("/api/v1/auth/validate")
      .then((serverRes) => {
        authMgr.setCurrentUser(serverRes.data);
        authMgr.setIsAuth(true);
      })
      .catch((err) => {
        authMgr.setIsAuth(false);
        nav("/");
      });
  };

  useEffect(() => {
    validateCookie();
  }, []);

  if (authMgr.isAuth) {
    return children;
  } else {
    <Navigate to={"/"} />;
  }
};

export default Protect;
