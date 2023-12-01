import { StrictMode, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Outlet, Route } from "react-router-dom";
import { PublicRoutes } from "./models";
import { RoutesWithNotFound } from "./utilities";
import { Helmet } from "react-helmet";
import { Orders } from "./pages/Orders/Orders"
// const Orders = lazy( ()=> import('./pages/Orders/Orders'));
// import ExampleComponent from './components/ExampleComponent';
ReactDOM.render(
    <StrictMode>
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
                            element={<h1>hola dash</h1>}
                        />
                        <Route
                            path={`${PublicRoutes.ORDER}/*`}
                            element={<Orders/>}
                        />
                    </RoutesWithNotFound>
            </BrowserRouter>
        </Suspense>
        </>
    </StrictMode>,
    document.getElementById("root")
);
