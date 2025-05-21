import "./assets/tailwind.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./components/Loading";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customer = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/error400"));
const Error401 = React.lazy(() => import("./pages/error401"));
const Error403 = React.lazy(() => import("./pages/error403"));
const MainLayout2 = React.lazy(() => import("./layouts/MainLayout2"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Users = React.lazy(() => import("./pages/Users"));
const Dashboard2 = React.lazy(() => import("./pages/Dashboard2"));
const About = React.lazy(() => import("./pages/About"));
const Topproduct = React.lazy(() => import("./pages/Topproduct"));
const Testimoni = React.lazy(() => import("./pages/Testimoni"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout2 />}>
            <Route path="/" element={<Dashboard2 />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/error400" element={<Error400 />} />
            <Route path="/error401" element={<Error401 />} />
            <Route path="/error403" element={<Error403 />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/Topproduct" element={<Topproduct />} />
            <Route path="/Testimoni" element={<Testimoni />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>
        </Routes>
    </Suspense>
  );
}

export default App;
