function ImageContent({product}) {
    return (
        <div>
            <span className="product-o__category">{product.brandName}</span>
            <span className="product-o__name">{product.name}</span>
        </div>
    );
}

export default ImageContent;