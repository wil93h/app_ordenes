import { StrictMode, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Outlet, Route } from "react-router-dom";
import { PublicRoutes } from "./models";
import { RoutesWithNotFound } from "./utilities";
import { Helmet } from "react-helmet";
import { Orders } from "./pages/Orders/Orders"
import { Dashboard } from "./pages/Dashboard/Dashboard";

// const Orders = lazy( ()=> import('./pages/Orders/Orders'));
// import ExampleComponent from './components/ExampleComponent';
ReactDOM.render(
        <>
        <Helmet>
            <title>Menú</title>
            <link rel="icon" href="/assets/menu.svg" type="image/svg+xml" />
        </Helmet>
        <Suspense fallback={<>Cargando...</>}>
            <BrowserRouter>
                    <RoutesWithNotFound>
                        <Route
                            path="/"
                            element={ <Dashboard/> }
                        />
                        <Route
                            path={`${PublicRoutes.ORDER}/*`}
                            element={<Orders/>}
                        />
                    </RoutesWithNotFound>
            </BrowserRouter>
        </Suspense>
        </>,
    document.getElementById("root")
);
