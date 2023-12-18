import {useEffect, useRef, useState} from "react";
import Category from "./Category";
import axios from "axios";

export default function CategoryContainer({category, categoryContent, selectCategoryContent, selectCategory, selectBrandList}) {

    const selectorRef = useRef([]);
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
    // useEffect(() => {
    //     fetchBrandName();
    // }, [categoryContent]);
    useEffect(() => {
        fetchBrandName();
    },
        // [categoryContent],
        [selectedCategoryIndex]);

    const fetchBrandName =  async () => {
        if (categoryContent.length > 0) {
            let brandLists = [];

            selectCategory(categoryContent.filter((category) => category.checked)[0].name.engName.replaceAll("/", "-").toLowerCase());
            let url = "http://localhost:8081/api/product/" + category + "/brands";

            console.log("category(categoryContainer) : " +category)

             await axios
                .get(url)
                .then((result) => {
                    for (let r of result.data) {
                        brandLists.push({brandName: r, checked: false});
                    }
                });
            selectBrandList(brandLists);
        }
    }


    function handleCategoryClick(event){
        const selectedIndex = Number(event.target.dataset.index);
        const updatedCategoryList = categoryContent.map((category, index) => ({
            ...category,
            checked: index === selectedIndex
        }));
        selectCategoryContent(updatedCategoryList);
        setSelectedCategoryIndex(selectedIndex);
    }

    return (
        <div className="u-s-p-y-30">
            <div className="section__intro u-s-m-b-16">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section__text-wrap" id="product-selectors">
                                <h1 className="section__heading u-c-secondary u-s-m-b-12">등록된 전체 상품</h1>
                                {categoryContent.map((category, index) =>
                                    <Category
                                        key={category.name.engName}
                                        category={category}
                                        index={index}
                                        selectorRef={selectorRef}
                                        handleCategoryClick={handleCategoryClick}
                                        isSelected={index === selectedCategoryIndex}
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