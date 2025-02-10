import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./Components/Loader/Loading";

const Layout = lazy(() => import("./Layout/Layout"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Transfer = lazy(() => import("./Pages/Transfers/Transfer"));
const Games = lazy(() => import("./Pages/Games/Games"));
const Payments = lazy(() => import("./Pages/Payments/Payments"));
const Tickets = lazy(() => import("./Pages/Tickets/Tickets"));
const Wallet = lazy(() => import("./Pages/Wallet/Wallet"));
const Messages = lazy(() => import("./Pages/Messages/Messages"));
const Notifications = lazy(() => import("./Pages/Notifications/Notifications"));
const Settings = lazy(() => import("./Pages/Settings/Settings"));
const Login = lazy(() => import("./Components/Login/Login"));
const PublicRoute = lazy(() => import("./Router/PublicRoutes"));
const PrivateRoute = lazy(() => import("./Router/PrivateRoutes"));

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("user")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("user"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/");
  };

  const DelayedComponent = ({ children, delay = 2000 }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return show ? children : <Loading />;
  };

  return (
    <Routes>
      <Route element={<PublicRoute isAuthenticated={isAuthenticated} />}>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
      </Route>

      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route
          path="/dashboard"
          element={
            <Layout handleLogout={handleLogout}>
              <Suspense>
                <DelayedComponent>
                  <Dashboard />
                </DelayedComponent>
              </Suspense>
            </Layout>
          }
        />
        <Route
          path="/accounts"
          element={
            <Layout handleLogout={handleLogout}>
              <Transfer />
            </Layout>
          }
        />
        <Route
          path="/transfers"
          element={
            <Layout handleLogout={handleLogout}>
              <Transfer />
            </Layout>
          }
        />
        <Route
          path="/payments"
          element={
            <Layout handleLogout={handleLogout}>
              <Payments />
            </Layout>
          }
        />
        <Route
          path="/games"
          element={
            <Layout handleLogout={handleLogout}>
              <Games />
            </Layout>
          }
        />
        <Route
          path="/tickets"
          element={
            <Layout handleLogout={handleLogout}>
              <Tickets />
            </Layout>
          }
        />
        <Route
          path="/wallet"
          element={
            <Layout handleLogout={handleLogout}>
              <Wallet />
            </Layout>
          }
        />
        <Route
          path="/messages"
          element={
            <Layout handleLogout={handleLogout}>
              <Messages />
            </Layout>
          }
        />
        <Route
          path="/notifications"
          element={
            <Layout handleLogout={handleLogout}>
              <Notifications />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout handleLogout={handleLogout}>
              <Settings />
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
}
