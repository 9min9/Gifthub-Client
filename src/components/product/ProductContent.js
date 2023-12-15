import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";

export default function ProductContent({categoryContent}) {

    return (
        <div className="u-s-p-y-30" id="show-product-div">
            <ProductHeader categoryContent={categoryContent}/><ProductList/>
        </div>
    );
}