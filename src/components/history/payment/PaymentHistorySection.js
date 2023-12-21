import PaymentContainer from "./PaymentContainer";

export default function PaymentHistorySection({payments}) {
    return payments.map((payment) => {
            return <PaymentContainer payment={payment}/>
        }
    )
}