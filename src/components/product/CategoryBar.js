import {useRef} from "react";

export default function CategoryBar({categoryContent, setCategoryContent}) {

    const selectorRef = useRef([]);

    function handleClick(event) {
        let categoryListCopy = [...categoryContent];

        categoryContent.forEach((category, index) => {
            categoryListCopy[index].checked = false;

            if (index === Number(event.target.dataset.index)) {
                categoryListCopy[index].checked = true;
            }
            setCategoryContent(categoryListCopy);
        });

    }

    let element = categoryContent.map((category, index) => {

        if (category.checked) {
            return (
                <span key={category.name.engName} className="product-selector-container category-active"
                      ref={(el) => selectorRef.current[index] = el}>
                    <span key={category.name.engName} className="product-selector" data-index={index}
                          style={{backgroundImage: `url(${category.image})`}} onClick={handleClick}></span>
                    <br/>
                    <span className="product-name">{category.name.korName}</span>
                </span>
            );
        } else {
            return (
                <span className="product-selector-container" key={category.name.engName}
                      ref={(el) => selectorRef.current[index] = el}>
                    <span className="product-selector" data-index={index}
                          style={{backgroundImage: `url(${category.image})`}} key={category.name.engName}
                          onClick={handleClick}></span>
                <br/>
                    <span className="product-name">{category.name.korName}</span>
                </span>
            );
        }
    });

    return (
        <div className="u-s-p-y-30">
            <div className="section__intro u-s-m-b-16">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section__text-wrap" id="product-selectors">
                                <h1 className="section__heading u-c-secondary u-s-m-b-12">등록된 전체 상품</h1>
                                {element}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}