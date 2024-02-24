import { Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "../pages";
import ProtectedRoutesWrapper from "./ProtectedRoutesWrapper";
import AuthRoutesWrapper from "./AuthRoutesWrapper";

const router = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutesWrapper />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route element={<AuthRoutesWrapper />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default router;
