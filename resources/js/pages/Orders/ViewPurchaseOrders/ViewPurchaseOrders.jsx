import { FormProvider, useForm } from "react-hook-form";
import { array, object, string, number, boolean } from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import  viewPurchase  from "../../../services/viewPurchase";
import { Box1024, BoxMain } from "../../../components";
import Orders from "../../../components/template/Orders"
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const formSchema = object({
    customerName: string(),
    customerLastName: string(),
    customerAddress: string(),
    arrayOrder: array(),
    arrayCustomer: array(),
    arrayProducts:array(),
    modal: boolean(),
});
export const ViewPurchaseOrders = () => {

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: { 
      arrayCustomer: [],
      arrayProducts:[],
      modal:false,
    },
  });

  const [purchaseDetails, setPurchaseDetails] = useState([])

  useEffect(async () => {
    const value = await viewPurchase();
    setPurchaseDetails(value);
    methods.setValue('arrayOrder',value.orders);
    methods.setValue('arrayCustomer',value.customerGroup);
  }, [])

    return (
        <>
        <Helmet>
            <title>compras</title>
            <link rel="icon" href="/assets/view-order.svg" type="image/svg+xml" />
        </Helmet>
        <BoxMain>
            <Box1024>
                <FormProvider {...methods}>
                <form className="w-full h-full flex flex-col justify-center items-center" autoComplete="off">
                    <Orders/>
                </form>
                </FormProvider>
            </Box1024>
        </BoxMain>
        </>
    );
};
