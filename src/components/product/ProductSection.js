import {useEffect, useRef, useState} from "react";
import axios from "axios";
import CategoryContainer from "./CategoryContainer";
import BrandContainer from "./BrandContainer";
import ProductListContainer from "./ProductListContainer";
import Brand from "./Brand";


export default function ProductSection() {
    const productContentRef = useRef();

    const [brand, setBrand] = useState("");
    const [brandList, setBrandList] = useState([]);

    const [categoryList, setCategoryList] = useState([]);
    const [categoryContent, setCategoryContent] = useState([]);
    const [productList, setProductList] = useState([]);

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

    useEffect(() => {
        fetchProductListByBrand();
    }, [brand]);

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

    const fetchProductListByBrand = async () => {
        // console.log(brand);
        await axios.get(`http://localhost:8081/api/product/brands/${brand}`)
            .then(function (res) {
                setProductList(res.data);
            })
            .catch(function (e) {
                console.log(e);
            })
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
    const selectProductList = (productList) => {
        setProductList(productList);
    }

    return (
        <div className="app-content">
            <CategoryContainer
                categoryContent={categoryContent}
                selectCategoryContent={selectCategoryContent}
            />
            <div className="u-s-p-y-30" id="show-product-div">
                <BrandContainer brand={brandList} callbackfn={b =>
                    <Brand
                        key={b.brandName}
                        brand={b.brandName}
                        checked={b.checked}
                        brandClick={selectBrand}
                    />}
                />
                <ProductListContainer
                    categoryContent={categoryContent}
                    brand={brand}
                    productList={productList} // 필요
                    selectBrandList={selectBrandList}
                    selectBrand={selectBrand}
                    selectProductList={selectProductList}
                />
            </div>
        </div>
    );
}
