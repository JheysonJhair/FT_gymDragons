import AppLayout from "@/layouts/AppLayout";
import { Navigate } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { Membresias } from "@/pages/membresia/Membresia";
import ProtectedRoute from "@/components/ProtectedRoute ";

const appRouter = [
  {
    path: "/",
    element:
      <ProtectedRoute>
      <AppLayout />,
      </ProtectedRoute>,
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
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default appRouter;
