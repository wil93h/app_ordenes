
import { BoxForm } from "../html/div"
import AddProduct from "../molecules/AddProduct"
import AddCustomer from "../molecules/AddCustomer"
import ButtonCustom  from "../atoms/ButtonCustom";
import TableCustom  from "../atoms/TableCustom";

export const CreateOrder = () => {
  
  const columns =  
    [
      { field: 'id', headerName: 'ID'  ,sortable: false,width: 92},
      { field: 'product', headerName: 'PRODUCTO',sortable: false,width: 300},
      { field: 'productDescription', headerName: 'DESCRIPCIÓN' ,sortable: false,width: 350},
      { field: 'unitMeasure', headerName: 'UNIDAD DE MEDIDA',sortable: false,width: 180},
      { field: 'price', headerName: 'PRECIO', type: 'number' ,sortable: false,width: 100}
    ]; 
    
    return (
    <BoxForm>
        <AddCustomer/>
        <AddProduct/>
        <TableCustom
          columns = {columns}
          nameArray="mapTable"
        />
        <ButtonCustom
          label="GUARDAR"
          type="submit"
        />
    </BoxForm>
    
  )
}
export default CreateOrder