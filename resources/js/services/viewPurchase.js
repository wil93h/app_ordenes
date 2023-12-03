import api from "./api"

const viewPurchase = async() =>{
    const {data:purchaseOrders} = await api.get('/order')
    let setDataOrder = []
    let uniqueOrder = []
    let orders = []
    purchaseOrders?.data.forEach(res => {
        res.forEach(res2=>{
            setDataOrder = [{id:res2.order_id,customerName:res2.customer_name,customerLastName:res2.customer_last_name,address:res2.address}]
        })
        uniqueOrder = {customer:setDataOrder?.filter((obj, index, self) =>
            index === self.findIndex((o) => o.order_id === obj.order_id)
        ),data:res};
        orders.push(uniqueOrder);
    });
    return {orders,customerGroup:purchaseOrders.order};
}
export default viewPurchase;