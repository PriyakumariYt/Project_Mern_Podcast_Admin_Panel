import { useEffect } from "react";
import { useAuth } from "../ContextApi/TokenApi";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
    alert("logout sucessfull")
  }, [LogoutUser]);

  return <Navigate to="/login" />;
};