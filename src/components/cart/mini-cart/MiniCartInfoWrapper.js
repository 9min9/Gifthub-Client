export default function MiniCartInfoWrapper({productName, gifticonId, gifticonPrice}) {
    return <div className="mini-product__info-wrapper">
                            <span className="mini-product__name">
                                <a href="product-detail.html">{productName}</a></span>
        <input type="hidden" name="gifticonIds" value={gifticonId}/>
        <span className="mini-product__quantity">1</span>
        <span className="mini-product__price">{gifticonPrice}</span>
    </div>
}

