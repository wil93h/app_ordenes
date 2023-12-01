import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NotFound = lazy(() => import('../pages/NotFound/NotFound'));


const RoutesWithNotFound = ({ children }) => {
  return (
    <Routes>
        { children }
        <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}
export default RoutesWithNotFound