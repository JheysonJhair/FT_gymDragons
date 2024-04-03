import AppLayout from "@/layouts/AppLayout";
import { Navigate } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { Prueba } from "@/pages/Prueba";
import ProtectedRoute from "@/components/ProtectedRoute ";

const appRouter = [
  {
    path: "/",
    element:
      //<ProtectedRoute>
      <AppLayout />,
     // </ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/prueba",
        element: <Prueba />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default appRouter;
