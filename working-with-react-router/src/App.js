import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="">
      <Header />

      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
