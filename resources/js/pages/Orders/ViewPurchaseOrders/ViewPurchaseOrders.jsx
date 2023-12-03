import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { array, date, object, SchemaOf, string, number } from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import  CreateOrder  from "../../../components/template/CreateOrder";
import  viewPurchase  from "../../../services/viewPurchase";
import { Box1024, BoxMain } from "../../../components";
import { Helmet } from "react-helmet";
import ButtonCustom from "../../../components/atoms/ButtonCustom";
import { useEffect, useState } from "react";


const formSchema = object({
    customerName: string(),
    customerLastName: string(),
    customerAddress: string(),
    
    mapTable: array().of(object({
      id: number(),
      product: string(),
      productDescription: string(),
      unitMeasure: string(),
      price: number(),
    })),
});
export const ViewPurchaseOrders = () => {
    const values = viewPurchase();
    
    const methods = useForm({
        resolver: yupResolver(formSchema),
        defaultValues: { mapTable: [] },
    });
    const  sendData = async() => {
        // const result =  await api.post('/order', methods.getValues())
        // console.log('send',methods.getValues(),result)
        // methods.reset();
        
    }
    return (
        <>
        <Helmet>
            <title>compras</title>
            <link rel="icon" href="/assets/view-order.svg" type="image/svg+xml" />
        </Helmet>
        <BoxMain>
            <Box1024>
                <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(sendData)} className="w-full h-full flex flex-col justify-center items-center" autoComplete="off">
                    <ButtonCustom
                      label="GUARDAR"
                      type="submit"
                      classN="p-2 mt-5"
                    />
                </form>
                </FormProvider>
            </Box1024>
        </BoxMain>
        </>
    );
};
