export default function OrderSummaryTable({totalPrice}) {
    return (<table class="o-summary__table">
        <tbody>
        <tr>
            <td>최종 금액</td>
            <td id="grand-total">{totalPrice}</td>
        </tr>
        </tbody>
    </table>);
}