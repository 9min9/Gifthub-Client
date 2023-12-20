import BrandComponent from "./BrandComponent";

export default function BrandContainer({brandList}) {
    console.log(brandList);

    return <div className="section__content" id="sticky-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="filter-category-container" id="filter-category-container">
                        <BrandComponent
                            brand={"전체"}
                            checked={true}
                            // brandClick={selectBrand}
                        />
                        {brandList.map(brand => (
                            <BrandComponent
                                key={brand.brandName}
                                brand={brand.brandName}
                                checked={brand.checked}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
