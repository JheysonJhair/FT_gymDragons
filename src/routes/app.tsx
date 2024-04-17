import AppLayout from "@/layouts/AppLayout";
import { Navigate } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { Membresias } from "@/pages/membresia/Membresia";
import ProtectedRoute from "@/components/ProtectedRoute ";
import { Clientes } from "@/modules/clientes/pages/Cliente";
import { NuevoCliente } from "@/modules/clientes/pages/NuevoCliente";
import { User } from "@/modules/user/pages/User";
import { NewUser } from "@/modules/user/pages/NewUser";
import { Productos } from "@/modules/products/pages/Products";
import { NuevoProducto } from "@/modules/products/pages/NewProduct";
import { DetallesProducto } from "@/modules/products/pages/DetailProduct";
import { MarcarAsistencia } from "@/modules/asistencias/pages/MarcarAsistencia";

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
        path: "/area/productos/",
        element: <Productos />,
      },
      {
        path: "/area/newproducto/",
        element: <NuevoProducto />,
      },
      {
        path: "/area/detailproducto/",
        element: <DetallesProducto />,
      },
      {
        path: "/area/marcarasistencia/",
        element: <MarcarAsistencia />,
      },
      {
        path: "/area/detailproducto/",
        element: <DetallesProducto />,
      },
      {
        path: "/area/usuarios/",
        element: <User />,
      },
      {
        path: "/area/newusuario/",
        element: <NewUser />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default appRouter;
