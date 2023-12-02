import Purchase from "../../assets/purchase.svg";
import View from "../../assets/view.svg";
import { Box1024, BoxMain } from "../../components";
import CardCustom from "../../components/atoms/CardCustom";
import { PublicRoutes } from "../../models/index";
import { To, useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const RUTA = `/${PublicRoutes.ORDER}`;

    const CARD_SOLICITUDES = [
        {
            key: 0,
            img: Purchase,
            text: "Crear orden de compra",
            route: RUTA + `/${PublicRoutes.PURCHASE_ORDERS}`,
        },
        {
            key: 1,
            img: View,
            text: "Ver Ordenes de compra",
            route: RUTA + `/${PublicRoutes.VIEW_PURCHASE_ORDERS}`,
        },
    ];
    const navigate = useNavigate();

    return (
        <BoxMain>
            <Box1024>
                <div className="flex p-4">
                    <div className="w-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ">
                        {CARD_SOLICITUDES.map((card) => (
                            <CardCustom
                                key={card.key}
                                img={card.img}
                                title={card.text}
                                handle={(e) => {
                                    e.preventDefault();
                                    navigate(card.route);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </Box1024>
        </BoxMain>
    );
};
