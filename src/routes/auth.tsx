import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/modules/auth/pages/Login";
import ForgotPassword from "@/modules/auth/pages/ForgotPassword";
import ResetPassword from "@/modules/auth/pages/ResetPassword";
import { Register } from "@/modules/auth/pages/Register";
import { Membresias } from "@/pages/membresia/Membresia";

const createAuthRoute = (element: React.ReactNode) => (
  <AuthLayout>{element}</AuthLayout>
);

const authRouter = [
  {
    path: "/login",
    element: createAuthRoute(<Login />),
  },
  {
    path: "/register",
    element: createAuthRoute(<Membresias />),
  },
  {
    path: "/forgot-password",
    element: createAuthRoute(<ForgotPassword />),
  },
  {
    path: "/reset-password",
    element: createAuthRoute(<ResetPassword />),
  },
];

export default authRouter;
