import { useFormContext } from "react-hook-form";
import ButtonCustom from "../atoms/ButtonCustom";
import TableCustomSelect from "../atoms/TableCustomSelect";
import { BoxForm } from "../html/div"
import { ModalProducts } from "../organisms/ModalProducts";

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
        console.log("🚀 ~ file: Orders.jsx:16 ~ selection ~ e:", data)
        const order = watch('arrayOrder')?.find(res => res?.customer[0].id == data.id)
        if(order){
            const { address, customerLastName, customerName, id } = order?.customer[0]
            setValue('arrayProducts',order.data)
            setValue('customerName', customerName)
            setValue('customerLastName', customerLastName)
            setValue('customerAddress', address)
            setValue('modal',true)
            console.log("🚀 ~ file: Orders.jsx:17 ~ Orders ~ getValues:", getValues())

        }

        console.log("🚀 ~ file: Orders.jsx:20 ~ selection ~ order:", order)
        
    }
    return (
        <BoxForm>
            <TableCustomSelect
                columns = {columns}
                nameArray="arrayCustomer"
                selection = {selection}
            />
            <ModalProducts />
            {/* <ButtonCustom label="GUARDAR" type="submit" classN="p-2 mt-5" /> */}
        </BoxForm>
    );
};
export default Orders;
