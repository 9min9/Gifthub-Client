import CategoryComponent from "./CategoryComponent";

export default function CategoryContainer({
                                              categoryContent,
                                              handleCategoryClick,
                                              selectorRef
                                          }) {
    return (
        <div className="u-s-p-y-30">
            <div className="section__intro u-s-m-b-16">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section__text-wrap" id="product-selectors">
                                <h1 className="section__heading u-c-secondary u-s-m-b-12">등록된 전체 상품</h1>
                                {categoryContent.map((category, index) =>
                                    <CategoryComponent
                                        key={category.name.engName}
                                        category={category}
                                        index={index}
                                        selectorRef={selectorRef}
                                        handleCategoryClick={handleCategoryClick}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}