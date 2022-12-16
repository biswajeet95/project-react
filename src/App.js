import "./App.scss";
// react router v6
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import {
  Home,
  CategoryProduct,
  ProductSingle,
  Cart,
  Search,
  Registration,
  Login,
  ChartPage,
} from "./pages/index";
import Protected from "./Protected";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Protected Component={Home} />} />
            <Route path="/product/:id" element={<ProductSingle />} />
            {/* category wise product listing route */}
            <Route path="/category/:category" element={<CategoryProduct />} />
            {/* cart */}
            <Route path="/cart" element={<Cart />} />
            {/* searched products */}
            <Route path="/search/:searchTerm" element={<Search />} />
            <Route path="/chartPage" element={<ChartPage />} />
          </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
