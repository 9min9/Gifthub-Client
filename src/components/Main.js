import "../css/custom/index.css";
import CategoryBar from "./main/CategoryBar";
import ProductContent from "./main/ProductContent";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function Main() {
  const productContentRef = useRef();

  const [categoryList, setCategoryList] = useState([]);

  // FIXME 토큰 storage에서 가져와야함
  let token = "eyJyZWdEYXRlIjoxNzAyNDU1NzIxNDA2LCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50VHlwZSI6IktBS0FPIiwidXNlcklkIjoyLCJ1c2VybmFtZSI6ImppY211QG5hdmVyLmNvbSIsImV4cCI6MTcwMjQ1OTMyMX0.yQOiF2W2Qk8Mc0DbrTW1IJ4-x-TsTEuboGGrwvnL4oU";

  useEffect(() => {
    getCategory()
  }, []);

  let getCategory = async () => {
    let categories;

    axios.get("http://localhost:8081/api/product/categories", {headers: {Authorization: token}})
      .then(function (result) {
        categories = result.data;
      });

    let categoryContent = [];

    let imagePath = "/images/categorylogo/";

    for (let categoryEngName in categories) {
      let category = {
        name: categories[categoryEngName],
        checked: categoryEngName === "ALL",
        image: imagePath + categoryEngName + ".png"
      };

      categoryContent.push(category);
    }

    return categoryContent;
  }

  return (
    <div className="app-content">
      <CategoryBar productContentRef={productContentRef} categoryList={categoryList} setCategoryList={setCategoryList}/>
      <ProductContent ref={productContentRef} categoryList={categoryList}/>
    </div>
  );
}