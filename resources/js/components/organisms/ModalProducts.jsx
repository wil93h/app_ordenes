import TableCustom from "../atoms/TableCustom";
import AddCustomer from "../molecules/AddCustomer";
import { ModalCustom } from "../atoms/ModalCustom";
import { H1Title } from "../html/font";
import ButtonCustom from "../atoms/ButtonCustom";
import { useFormContext } from "react-hook-form";

export const ModalProducts = () => {
    const columns = [
        { field: "id", headerName: "ID", sortable: false, width: 50 },
        {
            field: "product",
            headerName: "PRODUCTO",
            sortable: false,
            width: 200,
        },
        {
            field: "description",
            headerName: "DESCRIPCIÓN",
            sortable: false,
            width: 300,
        },
        {
            field: "unit_measure",
            headerName: "UNIDAD DE MEDIDA",
            sortable: false,
            width: 116,
        },
        {
            field: "price",
            headerName: "PRECIO",
            type: "number",
            sortable: false,
            width: 100,
        },
    ];
    const {watch,setValue} = useFormContext();
    const hableClose = () => {
        setValue('modal',!watch('modal'));
    }
    return (
        <ModalCustom>
            <div className="flex h-screen items-center justify-center ">
                <div className="container  max-w-screen-md flex flex-col items-center">
                    <H1Title label="ORDEN DE COMPRA" />
                    <AddCustomer />
                    <TableCustom columns={columns} nameArray="arrayProducts" />
                    <div className="pt-5">
                        <ButtonCustom
                            label={"CERRAR"}
                            handle= {hableClose}
                        />
                    </div>
                </div>
            </div>
        </ModalCustom>
    );
};
