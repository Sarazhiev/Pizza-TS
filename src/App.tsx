import './scss/app.scss'
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import PizzaProduct from "./components/PizzaProduct/PizzaProduct";
import Layout from "./Layout/Layout";





function App() {


    return (
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                            <Route path='' element={<Home/>}/>
                            <Route path='cart' element={<Cart/>}/>
                            <Route path='pizza/:id' element={<PizzaProduct/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Route>

                    </Routes>
    );
}

export default App;
