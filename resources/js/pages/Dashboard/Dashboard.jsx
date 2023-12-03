import Purchase from "../../assets/purchase.svg";
import View from "../../assets/view.svg";
import { Box1024, BoxForm, BoxMain } from "../../components";
import CardCustom from "../../components/atoms/CardCustom";
import { H1Title } from "../../components/html/font";
import { PublicRoutes } from "../../models/index";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const RUTA = `/${PublicRoutes.ORDER}`;

    const CARD_SOLICITUDES = [
        {
            key: 0,
            img: Purchase,
            text: "CREAR ORDEN DE COMPRA",
            route: RUTA + `/${PublicRoutes.PURCHASE_ORDERS}`,
        },
        {
            key: 1,
            img: View,
            text: "VER ORDENES DE COMPRA",
            route: RUTA + `/${PublicRoutes.VIEW_PURCHASE_ORDERS}`,
        },
    ];
    const navigate = useNavigate();

    return (
        <BoxMain>
            <Box1024>
                <BoxForm>
                    <H1Title label={"MENÚ"} />
                    <div className="flex p-4 xs:!py-12">
                        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 ">
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
                </BoxForm>
            </Box1024>
        </BoxMain>
    );
};
