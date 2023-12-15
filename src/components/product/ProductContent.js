import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";
import {useEffect, useState} from "react";
import axios from "axios";
import Brand from "./Brand";

export default function ProductContent({categoryContent}) {

  const [brand, setBrand] = useState([]);

  useEffect(() => {
    getBrandName();
  }, [categoryContent]);

  const getBrandName = () => {
    console.log("ProductHeader | getBrandName")
    console.log(categoryContent)

    if (categoryContent.length > 0) {
      let brandList = [];

      let token = "eyJyZWdEYXRlIjoxNzAyNDU1NzIxNDA2LCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50VHlwZSI6IktBS0FPIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6ImppY211QG5hdmVyLmNvbSIsImV4cCI6MTcwMjQ1OTMyMX0.yQOiF2W2Qk8Mc0DbrTW1IJ4-x-TsTEuboGGrwvnL4oU";
      let category = categoryContent.filter((category) => category.checked)[0].name.engName.replaceAll("/", "-").toLowerCase();

      let url = "http://localhost:8081/api/product/" + category + "/brands";

      axios
        .get(url, {headers: {Authorization: token,}})
        .then((result) => {
          for (let r of result.data) {
            brandList.push({brandName: r, checked: false});
          }
        });

      setBrand(brandList);
    }
  }

    return (
        <div className="u-s-p-y-30" id="show-product-div">
            <ProductHeader categoryContent={categoryContent} brand={brand}/>
            <ProductList/>
        </div>
    );
}