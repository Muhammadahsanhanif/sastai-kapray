import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home";
import Signup from "./pages/signup";
import Products from "./pages/product";
import LoginForm from "./pages/login";
import Header from "./component/header";
import Productdetail from "./pages/productdeatil";
import Footer from "./component/footer";








function Routingweb() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:title/id/:id" element={<Productdetail/>}/>





            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routingweb;