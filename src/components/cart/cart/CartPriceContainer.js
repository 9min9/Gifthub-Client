import PrimaryBtn from "../../ui/button/PrimaryBtn";

export default function CartPriceContainer({original, totalPrice, checkoutHandleClick}) {
    return <div className="section__content">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                    <div className="row" style={{flexDirection: "row-reverse"}}>
                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                            <div className="f-cart__pad-box">
                                <div className="u-s-m-b-30">
                                    <table className="f-cart__table">
                                        <tbody>
                                        <tr>
                                            <td>원가</td>
                                            <td id="original">{original}</td>
                                        </tr>
                                        <tr>
                                            <td>할인금액</td>
                                            <td id="discount-price">{original - totalPrice}</td>
                                        </tr>
                                        <tr>
                                            <td>판매가</td>
                                            <td id="sale-price">{totalPrice}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <PrimaryBtn innerText={"CHECKOUT"} _onClick={checkoutHandleClick}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};