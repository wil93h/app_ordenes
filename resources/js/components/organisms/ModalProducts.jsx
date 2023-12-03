import { Modal } from "@mui/material"
import { useFormContext,Controller } from 'react-hook-form';
import TableCustom from "../atoms/TableCustom"
import { Box750Responsive300 } from "../html/div"
import AddCustomer from "../molecules/AddCustomer"
import { ModalCustom } from "../atoms/ModalCustom";

export const ModalProducts = () => {
    const columns =  
    [
      { field: 'id', headerName: 'ID'  ,sortable: false,width: 92},
      { field: 'product', headerName: 'PRODUCTO',sortable: false,width: 300},
      { field: 'description', headerName: 'DESCRIPCIÓN' ,sortable: false,width: 350},
      { field: 'unit_measure', headerName: 'UNIDAD DE MEDIDA',sortable: false,width: 180},
      { field: 'price', headerName: 'PRECIO', type: 'number' ,sortable: false,width: 100}
    ]; 

return (

        <ModalCustom>
            <Box750Responsive300>
                <AddCustomer/>
                <TableCustom
                    columns={columns}
                    nameArray="arrayProducts"
                />
            </Box750Responsive300>
        </ModalCustom>
  )
}