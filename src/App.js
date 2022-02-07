import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import TopNav from "./components/TopNav/TopNav";
import ProductList from "./pages/Products/ProductList/ProductList";
import SingleProduct from "./pages/Products/SingleProduct/SingleProduct";
import NewProduct from "./pages/Products/NewProduct/NewProduct";
import CategoryList from "./pages/Categories/CategoryList/CategoryList";
import SingleCategory from "./pages/Categories/SingleCategory/SingleCategory";
import NewCategory from "./pages/Categories/NewCategory/NewCategory";
import UserList from "./pages/Users/UserList/UserList";
import SingleUser from "./pages/Users/SingleUser/SingleUser";
import NewUser from "./pages/Users/NewUser/NewUser";
import SaleList from "./pages/Sales/SaleList/SaleList";
import SingleSale from "./pages/Sales/SingleSale/SingleSale";
import NewSale from "./pages/Sales/NewSale/NewSale";
import CartList from "./pages/Carts/CartList/CartList";
import SingleCart from "./pages/Carts/SingleCart/SingleCart";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <React.Fragment>
          <TopNav />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <SingleUser />
          </Route>
          <Route path="/new-user">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <SingleProduct />
          </Route>
          <Route path="/new-product">
            <NewProduct />
          </Route>
          <Route path="/categories">
            <CategoryList />
          </Route>
          <Route path="/category/:catId">
            <SingleCategory />
          </Route>
          <Route path="/new-category">
            <NewCategory />
          </Route>
          <Route path="/carts">
            <CartList />
          </Route>
          <Route path="/cart/:cartId">
            <SingleCart />
          </Route>
          <Route path="/sales">
            <SaleList />
          </Route>
          <Route path="/sale/:saleId">
            <SingleSale />
          </Route>
          <Route path="/new-sale">
            <NewSale />
          </Route>
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
