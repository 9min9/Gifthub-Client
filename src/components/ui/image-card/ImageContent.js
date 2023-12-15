function ImageContent(props) {
    return (
        <div>
            <span className="product-o__category">{props.brandName}브랜드네임</span>
            <span className="product-o__name">{props.name}상품명</span>
        </div>
    );
}

export default ImageContent;