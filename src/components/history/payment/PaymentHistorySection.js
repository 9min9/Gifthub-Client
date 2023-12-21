import PaymentContainer from "./PaymentContainer";

export default function PaymentHistorySection({payments, increasePage}) {
    return payments.map((payment, index, payments) => {
            return <PaymentContainer payment={payment} increasePage={increasePage} index={index} payments={payments}/>
        }
    )
}