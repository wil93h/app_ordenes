import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { array, date, object, SchemaOf, string, number } from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import  CreateOrder  from "../../../components/template/CreateOrder";
import  api  from "../../../services/api";
import { Box1024, BoxMain } from "../../../components";


const formSchema = object({
    customerName: string().required("El nombre es requerido"),
    customerLastName: string().required("El apellido es requerido"),
    customerAddress: string().required("La dirección es requerido"),
    price: number()
        .positive("El valor debe de ser positivo"),
    product: string(),
    productDescription: string(),
    unitMeasure: string(),
    mapTable: array().of(object({
      id: number().required('El ID es requerido'),
      product: string().required('El producto es requerido'),
      productDescription: string().required('La descripción es requerida'),
      unitMeasure: string().required('La unidad de medida es requerida'),
      price: number().required('El precio es requerido').positive('El precio debe ser positivo'),
    })),
});
export const PurchaseOrders = () => {
    const methods = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: { mapTable: [] },
    });
    const  sendData = async() => {
       const result =  await api.post('/order', methods.getValues())
      console.log('send',methods.getValues(),result)
    }
    return (
        <BoxMain>
            <Box1024>
                <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(sendData)} className="w-full h-full flex flex-col justify-center items-center" autoComplete="off">
                    <CreateOrder />
                </form>
                </FormProvider>
            </Box1024>
        </BoxMain>
    );
};
