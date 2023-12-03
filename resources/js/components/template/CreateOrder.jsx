
import { BoxForm } from "../html/div"
import AddProduct from "../molecules/AddProduct"
import AddCustomer from "../molecules/AddCustomer"
import ButtonCustom  from "../atoms/ButtonCustom";
import TableCustom  from "../atoms/TableCustom";
import { H1Title } from "../html/font";

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
        <H1Title
          label={"ORDEN DE COMPRA"}
          
        />
        <AddCustomer/>
        <AddProduct/>
        <TableCustom
          columns = {columns}
          nameArray="mapTable"
        />
        <ButtonCustom
          label="GUARDAR"
          type="submit"
          classN="p-2 mt-5"
        />
    </BoxForm>
    
  )
}
export default CreateOrder