import { PublicRoutes } from "../../models/index";
import { RoutesWithNotFound } from "../../utilities";
import { Route } from "react-router-dom"
import { PurchaseOrders } from "./PurchaseOrders/PurchaseOrders"
import { ViewPurchaseOrders } from "./ViewPurchaseOrders/ViewPurchaseOrders"
import { Helmet } from "react-helmet";


export const Orders = () => {
    return (
        <>
            <Helmet>
                <title>Ordenes</title>
                <link rel="icon" href="/assets/orders.svg" type="image/svg+xml" />
            </Helmet>
            <RoutesWithNotFound>
                <Route path={PublicRoutes.PURCHASE_ORDERS} element={<PurchaseOrders/>}/>
                <Route path={PublicRoutes.VIEW_PURCHASE_ORDERS} element={<ViewPurchaseOrders/>}/>
            </RoutesWithNotFound>
        </>
    )
}