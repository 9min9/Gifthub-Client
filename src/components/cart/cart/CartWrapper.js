export default function CartWrapper({productName, productId, gifticonPrice, cartId, trashHandleClick}) {
    return <tr>
        <td>
            <div className="table-p__box">
                <div className="table-p__img-wrap">
                    <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt=""/>
                </div>
                <div className="table-p__info">
                    <span className="table-p__name">
                        <a href="product-detail.html">{productName}</a>
                        <input type="hidden" name="gifticonIds" value={productId} readOnly={true}/>
                    </span>
                </div>
            </div>
        </td>
        <td>
            <span className="table-p__price">{gifticonPrice}</span></td>
        <td>
            <div className="table-p__input-counter-wrap">
                <div className="input-counter">
                    <span className="input-counter__minus fas fa-minus"></span>
                    <input className="input-counter__text input-counter--text-primary-style" type="text" value="1"
                           data-min="1" data-max="1000" value={1} readOnly={true}/>
                    <span className="input-counter__plus fas fa-plus"></span>
                </div>
            </div>
        </td>
        <td>
            <div className="table-p__del-wrap">
                <a className="far fa-trash-alt table-p__delete-link" id={"delete-" + cartId}
                   onClick={trashHandleClick}></a>
            </div>
        </td>
    </tr>
};