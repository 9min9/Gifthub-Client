import PaymentContainer from "./PaymentContainer";

export default function PaymentHistorySection({orders}) {
    return orders.map((order) => {
            return <PaymentContainer order={order}/>
        }
    )
}