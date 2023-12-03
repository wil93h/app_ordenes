import ButtonCustom from "../atoms/ButtonCustom";
import TableCustomSelect from "../atoms/TableCustomSelect";
import { BoxForm } from "../html/div"

const columns =  
[
  { field: 'id', headerName: 'ID'  ,sortable: false,width: 92},
  { field: 'customer_name', headerName: 'NOMBRE' ,sortable: false,width: 350},
  { field: 'customer_last_name', headerName: 'APELLIDO',sortable: false,width: 300},
  { field: 'address', headerName: 'DIRECCIÓN',sortable: false,width: 180},
  { field: 'total_price', headerName: 'PRECIO TOTAL', type: 'number' ,sortable: false,width: 100}
]; 
const selection = (e) => {
    console.log("🚀 ~ file: Orders.jsx:16 ~ selection ~ e:", e)

}

export const Orders = () => {
    return (
        <BoxForm>
            <TableCustomSelect
                columns = {columns}
                nameArray="arrayCustomer"
                selection = {selection}
            />
            {/* <ButtonCustom label="GUARDAR" type="submit" classN="p-2 mt-5" /> */}
        </BoxForm>
    );
};
export default Orders;
