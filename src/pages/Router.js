import {Route, Routes} from "react-router-dom";
import App from "../App";
import Header from "../components/common/Header";
import Main from "./Main";

export default function Router() {
    return (
      <Routes>
          <Route exact path="/" element={<Main/>}></Route>
          <Route path="/payments" element={<Main/>}></Route>
          <Route path="/mypage" element={<Main/>}></Route>
          <Route path="/gifticon/add" element={<Main/>}></Route>
          <Route path="/user/my-gifticon" element={<Main/>}></Route>
          <Route path="/carts" element={<Main/>}></Route>
          <Route path="/payment/checkout" element={<Main/>}></Route>
      </Routes>
    );
}