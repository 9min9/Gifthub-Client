import CategoryContainer from "./CategoryContainer";
import BrandContainer from "./BrandContainer";
import ProductListContainer from "./ProductListContainer";


export default function ProductSection({
                                           categoryContent,
                                           brandList,
                                           productList,
                                           fetchBrandName,
                                           handleCategoryClick,
                                           selectorRef,
                                           handleBrandClick,
                                           handleSearchChange,
                                           searchInput,
                                           handleSearchKeyUp,
                                           increasePage,
                                           priceList,
                                           fetchPriceList,
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
                    handleBrandClick={handleBrandClick}
                />
                <ProductListContainer
                    productList={productList} // 필요
                    handleSearchChange={handleSearchChange}
                    searchInput={searchInput}
                    handleSearchKeyUp={handleSearchKeyUp}
                    increasePage={increasePage}
                    priceList={priceList}
                    fetchPriceList={fetchPriceList}
                />
            </div>
        </div>
    );
}
