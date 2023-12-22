export default function GifticonItemInfo(props) {
    const {id, content, error} = props;

    let spanId = "gifticon-product-" + id;
    let errorId = "gifticon-product-error-" + id;

    return (
        <>
            {content ? (
                <span key={spanId} className="w-r__category">{content}</span>
            ) : (<span key={errorId} style={{color: 'red'}}>{error}</span>
            )}
        </>
    )
}