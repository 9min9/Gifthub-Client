import ImageContent from "./ImageContent";
import useIntersectionObserver from "../useIntersectionObserver";
import {useEffect, useRef} from "react";

function ProductCard({product, index, products, increasePage}) {
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
                    {/*    모달*/}
                    <a className="aspect aspect--bg-grey aspect--square u-d-block">
                        <img className="aspect__img" src="/images/noproductimage/no-image-departmentstore.png"/>
                    </a>
                    <ImageContent
                        product={product}
                    />
                    {/*{product.brandName} <br/>*/}
                    {/*{product.name}*/}
                </div>
            </div>

        );
    } else {
        return (
            <div className="col-lg-3 col-md-6 u-s-m-b-30 product-wrapper">
                <div className="product-o product-o--radius product-o--hover-off u-h-100">
                    {/*    모달*/}
                    <a className="aspect aspect--bg-grey aspect--square u-d-block" onClick={handleOpenModalClick}>
                        <img className="aspect__img" src="/images/noproductimage/no-image-departmentstore.png"/>
                    </a>
                    <ImageContent
                        product={product}
                    />
                    {/*{product.brandName} <br/>*/}
                    {/*{product.name}*/}
                </div>
            </div>

        );
    }
}

export default ProductCard;