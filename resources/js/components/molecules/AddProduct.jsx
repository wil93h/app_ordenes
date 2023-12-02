import { Add } from "@mui/icons-material";
import  TextFieldCustom from "../atoms/TextFieldCustom";
import  ButtonCustom from "../atoms/ButtonCustom";
import { useForm,useWatch,useFieldArray } from 'react-hook-form';

export const AddProduct = () => {
    const { fields, append } = useFieldArray({
        name: 'mapTable',
      });    
    console.log("🚀 ~ file: AddProduct.jsx:11 ~ AddProduct ~ fields:", fields)

      const addProduct = ()=>{
        append( { id: fields.length, product: 'John Doe', productDescription: '123',unitMeasure:'lb' , price:'1.2' })
      }
    return (
        <div className="p-2 flex items-center space-x-4">
            <div className="w-3/12">
            <TextFieldCustom
                label="PRODUCTO"
                name="product"
            />
            </div>
            <div className="w-2/6">
            <TextFieldCustom
                label="DESCRIPCIÓN"
                name="productDescription"

            />
            </div>
            <div className="w-1/10">
            <TextFieldCustom
                label="UNIDAD DE MEDIDA"
                name="unitMeasure"

            />
            </div>
            <div className="w-1/10">
            <TextFieldCustom
                label="PRECIO"
                name="price"
                type = "number"
            />
            </div>
            <div className="w-2/10">
            <ButtonCustom
                label="AGREGAR"
                handle={addProduct}
                startIcon={<Add />}
                colorChoose={2}
            />
            </div>
        </div>
    );
};
export default AddProduct
