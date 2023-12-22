import OrderContainer from "./OrderContainer";

export default function OrderHistorySection({orders, increasePage}) {
    return orders.map((order, index, orders) => {
        return <OrderContainer order={order} increasePage={increasePage} index={index} orders={orders}/>;
    })
}