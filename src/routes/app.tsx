import AppLayout from "@/layouts/AppLayout";
import { Navigate } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { Membresias } from "@/pages/membresia/Membresia";
import ProtectedRoute from "@/components/ProtectedRoute ";
import { Clientes } from "@/modules/clientes/pages/Cliente";
import { NuevoCliente } from "@/modules/clientes/pages/NuevoCliente";

const appRouter = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
      <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/operaciones/membresiaspagos/",
        element: <Membresias />,
      },
      {
        path: "/area/clientes/",
        element: <Clientes />,
      },
      {
        path: "/area/newcliente/",
        element: <NuevoCliente />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default appRouter;
