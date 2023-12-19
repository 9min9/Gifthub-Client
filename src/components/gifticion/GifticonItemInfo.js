

export default function GifticonItemInfo(props) {
    const {id, content, error} = props;

    let spanId = "gifticon-product-" +id;
    let errorId = "gifticon-product-error-" +id;

    return(
        <div className="gl-inline">
            <span key={spanId} className="w-r__category">{content}</span>
            {/*<span id="gifticon-product-error-16" className="u-s-m-x-10" style={{color: 'red'}}>상품 이름이 존재하지 않습니다.</span>*/}
            <span key={errorId} className="u-s-m-x-10"></span>
        </div>
    )
}