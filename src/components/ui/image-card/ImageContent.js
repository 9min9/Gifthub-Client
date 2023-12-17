function ImageContent({productName, brandName}) {
    return (
        <div>
            <span className="product-o__category">{brandName}브랜드네임</span>
            <span className="product-o__name">{productName}상품명</span>
        </div>
    );
}

export default ImageContent;