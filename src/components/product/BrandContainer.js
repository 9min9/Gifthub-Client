import Brand from "./Brand";

export default function BrandContainer({brandList, selectBrand}) {
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
                        {brandList.map(brand => (
                            <Brand
                                key={brand.brandName}
                                brand={brand.brandName}
                                checked={brand.checked}
                                brandClick={selectBrand}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
