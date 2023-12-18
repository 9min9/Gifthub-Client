import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../ui/image-card/ProductCard";
import Brand from "./Brand";
import BrandContainer from "./BrandContainer";



export default function ProductContent({categoryContent}) {
    let token = "eyJyZWdEYXRlIjoxNzAyNDU1NzIxNDA2LCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50VHlwZSI6IktBS0FPIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6ImppY211QG5hdmVyLmNvbSIsImV4cCI6MTcwMjQ1OTMyMX0.yQOiF2W2Qk8Mc0DbrTW1IJ4-x-TsTEuboGGrwvnL4oU";
    const [brand, setBrand] = useState();
    const [category, setCategory] = useState("all");
    const [brandList, setBrandList] = useState([]);
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        fetchBrandName();
    }, [categoryContent]);

    useEffect(() => {
        fetchProductListByBrand();
    }, [brand]);

    useEffect(() => {
        fetchProductListByCategory();
    }, [category]);

    const fetchProductListByBrand = async () => {
        console.log(brand);
        await axios.get(`http://localhost:8081/api/product/brands/${brand}`)
            .then(function (res){
                setProductList(res.data)
            })
            .catch(function (e){
                console.log(e)
            })
    }

    const selectBrand = (brandName) => {
        setBrand(brandName);
    }

    const fetchBrandName = async () => {
        if (categoryContent.length > 0) {
            let brandLists = [];

            setCategory(categoryContent.filter((category) => category.checked)[0].name.engName.replaceAll("/", "-").toLowerCase());
            let url = "http://localhost:8081/api/product/" + category + "/brands";


            await axios
                .get(url, {headers: {Authorization: token,}})
                .then((result) => {
                    for (let r of result.data) {
                        brandLists.push({brandName: r, checked: false});
                    }
                });
            setBrandList(brandLists);
        }
    }

    const fetchProductListByCategory = () => {
        axios.get(`http://localhost:8081/api/product/category/${category}`)
            .then(function (res){
                setProductList(res.data);
            })
            .catch(function (e){
                console.log(e)
            })
    }

    return (
        <div className="u-s-p-y-30" id="show-product-div">

            <BrandContainer brand={brandList} callbackfn={b =>
                <Brand
                    key={b.brandName}
                    brand={b.brandName}
                    checked={b.checked}
                    brandClick={selectBrand}
                />}
            />

            <div className="section__content" id="product-area-div">
                <div className="container">
                    <div className="u-s-p-y-20" style={{display: "flex", justifyContent: "end",}}>
                        <form className="main-form">
                            <InputWithLabel id="main-search" placeholder="검색"/>
                            <button className="btn btn--icon fas fa-search main-search-button" type="submit"></button>
                        </form>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="u-s-m-t-30">
                                <div id="row-product-div" className="row">
                                    {
                                        productList.map(product => (
                                            <ProductCard
                                                key={product.id}
                                                product={product}
                                                // onClick={handleProductClick()}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



function InputWithLabel({id, placeholder}) {
    return <>
        <label htmlFor={id}></label>
        <input className="input-text input-text--border-radius input-text--style-1" type="text"
               id={id} placeholder={placeholder}/>
    </>;
}