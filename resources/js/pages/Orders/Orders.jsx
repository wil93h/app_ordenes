import { PublicRoutes } from "../../models/index";
import { RoutesWithNotFound } from "../../utilities";
import { lazy } from "react"
import { Route } from "react-router-dom"
import { PurchaseOrders } from "./PurchaseOrders/PurchaseOrders"
import { ViewPurchaseOrders } from "./ViewPurchaseOrders/ViewPurchaseOrders"

export const Orders = () => {
    return (
        <RoutesWithNotFound>
            <Route path={PublicRoutes.MAIN} element={<h1 className="">Ordenes</h1>}/>
            <Route path={PublicRoutes.PURCHASE_ORDERS} element={<PurchaseOrders/>}/>
            <Route path={PublicRoutes.VIEW_PURCHASE_ORDERS} element={<ViewPurchaseOrders/>}/>
        </RoutesWithNotFound>
    )
}