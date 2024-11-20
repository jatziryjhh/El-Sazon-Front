import { BrowserRouter, useRoutes } from "react-router-dom";
import Header from "./components/header";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Inicio from "./app/home/home";
import Layout from "./components/layout/layout";
import Login from "./app/login/login";
import GerenteHome from "./app/gerente/gerenteHome";
import Ventas from "./app/gerente/ventas/ventas";
import CrearProductos from "./app/gerente/gestion/productos";
import Cobro from "./app/empleado/cobro/cobro";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Inicio /> },
    { path: "*", element: <ErrorPage /> },
    { path: "/login", element: <Login /> },
    { path: "/gerente", element: <GerenteHome /> },
    { path: "/gerente/ventas", element: <Ventas /> },
    { path: "/gerente/productos/crear", element: <CrearProductos /> },
    { path: "/empleado/cobro", element: <Cobro /> },
  ]);
  return routes;
};

export default function App() {
  return (
    <BrowserRouter>
      <Root />
      <Header titulo="El Sazon" />
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}
