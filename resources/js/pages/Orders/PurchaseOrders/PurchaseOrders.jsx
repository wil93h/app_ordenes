import { FormProvider, useForm } from "react-hook-form";
import { array, object, string, number } from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import  CreateOrder  from "../../../components/template/CreateOrder";
import  api  from "../../../services/api";
import { Box1024, BoxMain } from "../../../components";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


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
    const sendData = async() => {
        Swal.fire({
            title: `<h1 style="color:#E0E5F1" >GUARDANDO ORDEN</h1>`,
            allowEscapeKey: false,
            allowOutsideClick: false,
            background:'#3C4557'
        })

        const result =  await api.post('/order', methods.getValues())
        console.log('send',methods.getValues(),result)
        methods.reset();
        Swal.fire({
            title: `<h1 style="color:#E0E5F1" >${result.data?.message}</h1>`,
            allowEscapeKey: false,
            allowOutsideClick: false,
            icon: "success",
            showConfirmButton: false,
            timer: 4000,
            background:'#3C4557'
        });
    }
    return (
        <>
        <Helmet>
            <title>ordenes de compra</title>
            <link rel="icon" href="/assets/create-order.svg" type="image/svg+xml" />
        </Helmet>
        <BoxMain>
            <Box1024>
                <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(sendData)} className="w-full h-full flex flex-col justify-center items-center" autoComplete="off">
                    <CreateOrder />
                </form>
                </FormProvider>
            </Box1024>
        </BoxMain>
        </>
    );
};
