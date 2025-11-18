import { createBrowserRouter } from "react-router-dom";

import { App } from "../App.jsx";

import { PublicLayout } from "../layouts/PublicLayout.jsx";
import { PrivateLayout } from "../layouts/PrivateLayout.jsx";

import { PrivateRoute } from "./PrivateRoute.jsx";
import { AdminRoute } from "./AdminRoute.jsx";

import { AuthProvider } from "../contexts/auth-context.jsx";

import { Login } from "../pages/Login.jsx";
import { Signup } from "../pages/Signup.jsx";
import { Accounts } from "../pages/Accounts.jsx";
import { Transactions } from "../pages/Transactions.jsx";
import { Profile } from "../pages/Profile.jsx";
import { Admin } from "../pages/Admin.jsx";
import { Error404 } from "../pages/Error404.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AuthProvider>
                <App/>
            </AuthProvider>
        ),
        errorElement: <Error404 />,
        children: [
            // ROUTES PUBLIQUES
            {
                element: <PublicLayout />,
                children: [
                    { path: "login", element: <Login /> },
                    { path: "signup", element: <Signup /> },
                ]
            },
            // ROUTES PRIVÉES
            {
                element: ( <PrivateRoute><PrivateLayout /></PrivateRoute> ),
                children: [
                    { index: true, element: <Accounts /> },
                    { path: "transactions", element: <Transactions /> },
                    { path: "me", element: <Profile /> },
                    {
                        path: "admin",
                        element: (
                            <AdminRoute />
                        ),
                        children: [
                            { index: true, element: <Admin /> }
                        ]
                    }
                ]
            }
        ]
    }
]);
