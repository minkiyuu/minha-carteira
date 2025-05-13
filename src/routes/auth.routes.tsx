import React from "react";

import { Navigate, Routes, Route } from "react-router-dom";

import SignIn from "../pages/SingIn";

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />

    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AuthRoutes;
