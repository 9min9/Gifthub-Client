import PrimaryBtn from "../ui/button/PrimaryBtn";

export default function ImageModalTableContainer({contentList, handleAddToCartClick}) {
    return <table>
        {contentList.map((content) => {
            return <tr>
                <td>{content.price}</td>
                <td>{content.due}</td>
                <td>
                    <PrimaryBtn innerText={"장바구니로"} id={content.id} _onClick={handleAddToCartClick}/>
                </td>
            </tr>;
        })}
    </table>
};