import { useFormContext } from "react-hook-form";
import { BoxForm } from "../html/div"
import { ModalProducts } from "../organisms/ModalProducts";
import { H1Title } from "../html/font";
import TableCustom from "../atoms/TableCustom";

const columns =  
[
  { field: 'id', headerName: 'ID'  ,sortable: false,width: 92},
  { field: 'customer_name', headerName: 'NOMBRE' ,sortable: false,width: 350},
  { field: 'customer_last_name', headerName: 'APELLIDO',sortable: false,width: 300},
  { field: 'address', headerName: 'DIRECCIÓN',sortable: false,width: 180},
  { field: 'total_price', headerName: 'PRECIO TOTAL', type: 'number' ,sortable: false,width: 100}
]; 
export const Orders = () => {
    const {watch, setValue,getValues } = useFormContext();
    const selection = (data) => {
        const order = watch('arrayOrder')?.find(res => res?.customer[0].id == data.id)
        if(order){
            const { address, customerLastName, customerName, id } = order?.customer[0]
            setValue('arrayProducts',order.data)
            setValue('customerName', customerName)
            setValue('customerLastName', customerLastName)
            setValue('customerAddress', address)
            setValue('modal',true)
        }
    }
    return (
        <BoxForm>
            <H1Title 
                label="ORDENES"
            />
            <TableCustom
                columns = {columns}
                nameArray="arrayCustomer"
                selection = {selection}
            />
            <ModalProducts />
        </BoxForm>
    );
};
export default Orders;
