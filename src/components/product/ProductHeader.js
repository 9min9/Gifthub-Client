import {useEffect, useState} from "react";
import Brand from "./Brand";

export default function ProductHeader({categoryContent, brand}) {

    return (
      <div className="section__content" id="sticky-header">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="filter-category-container" id="filter-category-container">
                          <div className="filter__category-wrapper">
                              <Brand brand={"전체"}/>
                          </div>
                          {brand.map(b => <Brand key={b.brandName} brand={b.brandName}/> )}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}