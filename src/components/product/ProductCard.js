import ImageContent from "../ui/image-card/ImageContent";
import useIntersectionObserver from "../ui/useIntersectionObserver";
import {useEffect, useRef} from "react";

function ProductCard({product, index, products, increasePage, handleOpenModalClick}) {
    let lastCardRef = useRef(null);

    let [observe, unobserve] = useIntersectionObserver(() => {
        increasePage();
    });

    useEffect(() => {
        if (lastCardRef.current) {
            unobserve(lastCardRef.current);
            observe(lastCardRef.current);
        }
    }, []);

    if (index === products.length - 1) {
        return (
            <div className="col-lg-3 col-md-6 u-s-m-b-30 product-wrapper" ref={lastCardRef}>
                <div className="product-o product-o--radius product-o--hover-off u-h-100">
                    <a className="aspect aspect--bg-grey aspect--square u-d-block">
                        <img className="aspect__img"
                             src={`/images/noproductimage/${product.category.replaceAll("-", "_").toUpperCase()}.png`}
                             onClick={handleOpenModalClick} data-product-name={product.name}
                             data-product-id={product.id}/>
                    </a>
                    <ImageContent
                        product={product}
                    />
                </div>
            </div>

        );
    } else {
        return (
            <div className="col-lg-3 col-md-6 u-s-m-b-30 product-wrapper">
                <div className="product-o product-o--radius product-o--hover-off u-h-100">
                    <a className="aspect aspect--bg-grey aspect--square u-d-block" onClick={handleOpenModalClick}>
                        <img className="aspect__img"
                             src={`/images/noproductimage/${product.category.replaceAll("-", "_")}.png`}
                             data-product-name={product.name} data-product-id={product.id}/>
                    </a>
                    <ImageContent
                        product={product}
                    />
                </div>
            </div>

        );
    }
}

export default ProductCard;