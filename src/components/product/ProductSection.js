import CategoryContainer from "./CategoryContainer";
import BrandContainer from "./BrandContainer";
import ProductListContainer from "./ProductListContainer";


export default function ProductSection({
                                           categoryContent,
                                           brandList,
                                           brand,
                                           productList,
                                           fetchBrandName,
                                           handleCategoryClick,
                                           selectorRef
                                       }) {
    return (
        <div className="app-content">
            <CategoryContainer
                categoryContent={categoryContent}
                fetchBrandName={fetchBrandName}
                handleCategoryClick={handleCategoryClick}
                selectorRef={selectorRef}
            />
            <div className="u-s-p-y-30" id="show-product-div">
                <BrandContainer
                    brandList={brandList}
                />
                <ProductListContainer
                    brand={brand}
                    productList={productList} // 필요
                />
            </div>
        </div>
    );
}
