import OrderContainer from "./OrderContainer";

export default function OrderHistorySection({orders}) {
    return orders.map((order) => {
        return <OrderContainer order={order}/>
    })
}