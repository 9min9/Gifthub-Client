import Brand from "./Brand";
import * as PropTypes from "prop-types";

export default function BrandContainer(props) {
    return <div className="section__content" id="sticky-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="filter-category-container" id="filter-category-container">
                        <Brand
                            brand={"전체"}
                            checked={true}
                            // brandClick={selectBrand}
                        />
                        {props.brand.map(props.callbackfn)}
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
BrandContainer.propTypes = {
    brand: PropTypes.arrayOf(PropTypes.any),
    callbackfn: PropTypes.func
};
