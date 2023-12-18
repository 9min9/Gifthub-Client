import {useEffect, useRef, useState} from "react";
import axios from "axios";
import CategoryContainer from "./CategoryContainer";
import ProductContent from "./ProductContent";
import BrandContainer from "./BrandContainer";
import Brand from "./Brand";


export default function ProductSection() {
    const productContentRef = useRef();

    const [brand, setBrand] = useState("");
    const [brandList, setBrandList] = useState([]);

    const [categoryList, setCategoryList] = useState([]);
    const [categoryContent, setCategoryContent] = useState([]);

// FIXME 토큰 storage에서 가져와야함
    let token = "eyJyZWdEYXRlIjoxNzAyNDU1NzIxNDA2LCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50VHlwZSI6IktBS0FPIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6ImppY211QG5hdmVyLmNvbSIsImV4cCI6MTcwMjQ1OTMyMX0.yQOiF2W2Qk8Mc0DbrTW1IJ4-x-TsTEuboGGrwvnL4oU";

//DOM이 road 되었을 때 getCategory 호출
    useEffect(() => {
        getCategory();
    }, []);

//categoryList가 변경되었을 때 setCategoryContent
    useEffect(() => {
        setContent();
    }, [categoryList])

    const getCategory = () => {
        axios.get("http://localhost:8081/api/product/categories", {headers: {Authorization: token}})
            .then(function (result) {
                setCategoryList(result.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const setContent = () => {
        const imagePath = `/images/categorylogo/`;
        let updatedCategoryContent = categoryList.map(category => ({
            name: category,
            checked: category.engName === "ALL",
            image: imagePath + category.engName + ".png"
        }));
        setCategoryContent(updatedCategoryContent);
    }

    const selectBrand = (brandName) => {
        setBrand(brandName);
    }

    const selectBrandList = (brandList) => {
        setBrandList(brandList);
    }

    const selectCategoryContent = (category) => {
        setCategoryContent(category);
    }

    return (
        <div className="app-content">
            <CategoryContainer
                productContentRef={productContentRef}
                categoryContent={categoryContent}
                selectCategoryContent={selectCategoryContent}
            />
            <ProductContent
                categoryContent={categoryContent}
                brand={brand}
                brandList={brandList}
                selectBrandList={selectBrandList}
                selectBrand={selectBrand}
            />
        </div>
    );
}
