import './App.css';
import Header from "./components/common/Header";
import {BrowserRouter} from "react-router-dom";
import Router from "./pages/Router";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Router/>
        <Footer/>
      </BrowserRouter>
    </>)
}

export default App;
