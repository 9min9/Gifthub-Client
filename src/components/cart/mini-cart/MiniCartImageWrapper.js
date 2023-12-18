export default function MiniCartImageWrapper({src}) {
    return <div className="mini-product__image-wrapper">
        <a className="mini-product__link" href="product-detail.html">
            <img className="u-img-fluid" src={src}
                 alt=""/></a>
    </div>
}