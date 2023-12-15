import {useEffect, useState} from "react";
import axios from "axios";

export default function ProductHeader({categoryContent}) {
    let brandDivs;
    const [brand, setBrand] = useState([]);

    useEffect(() => {
        getBrandName();
    }, [categoryContent]);

    const getBrandName = () => {
        console.log("ProductHeader | getBrandName")
        console.log(categoryContent)

        if (categoryContent.length > 0) {
            let token = "eyJyZWdEYXRlIjoxNzAyNDU1NzIxNDA2LCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50VHlwZSI6IktBS0FPIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6ImppY211QG5hdmVyLmNvbSIsImV4cCI6MTcwMjQ1OTMyMX0.yQOiF2W2Qk8Mc0DbrTW1IJ4-x-TsTEuboGGrwvnL4oU";
            let category = categoryContent.filter((category) => category.checked)[0].name.engName.replaceAll("/", "-").toLowerCase();
            console.log(category)

            let url = "http://localhost:8081/api/product/" + category + "/brands";
            axios
                .get(url, {headers: {Authorization: token,}})
                .then((result) => {

                    brandDivs = result.data.map((brand) => {

                        return(
                            <div className="filter__category-wrapper">
                                <button className="btn filter__btn filter__btn--style-1 brand-filter total-filter" type="button" data-filter="*">{brand}</button>
                            </div>
                        )
                    });
                });
        }
    }

    return (
        <div className="section__content" id="sticky-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="filter-category-container" id="filter-category-container">
                            <div className="filter__category-wrapper">
                                <button
                                    className="btn filter__btn filter__btn--style-1 js-checked brand-filter total-filter"
                                    type="button"
                                    data-filter="*">전체
                                </button>
                            </div>
                            {brandDivs}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}