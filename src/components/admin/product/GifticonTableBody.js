import DashTextButton from "../../ui/button/DashTextButton";

export default function GifticonTableBody({item}) {

    return (
        <tr>
            <th>{item.productName}</th>
            <th>{item.brandName}</th>
            <th>{item.userName}</th>
            <th>{item.modifiedDate}</th>
            <th><DashTextButton innerText={"확인"}></DashTextButton></th>
        </tr>
    );
}