import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import useAuth, { authContext } from "./hooks/useAuth";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Registration/Login";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import RegisterForm from "./components/Registration/RegisterForm";

export const RequireAuth = ({ children }) => {
  const { authed } = useAuth(authContext);
  const location = useLocation();

  return authed === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            // <RequireAuth>
              <QueryClientProvider client={queryClient}>
                <Dashboard />
              </QueryClientProvider>
            // </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
};

export default App;
