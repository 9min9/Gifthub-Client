import Brand from "./Brand";

export default function ProductHeader({brand}) {
    return (
        <div className="section__content" id="sticky-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="filter-category-container" id="filter-category-container">
                            <Brand brand={"전체"} checked={true}/>
                            {brand.map(b => <Brand key={b.brandName} brand={b.brandName} checked={b.checked}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}