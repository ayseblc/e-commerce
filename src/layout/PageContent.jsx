
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";

function PageContent() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route  exact path="/product/:id" component={ProductDetailPage}/>
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  );
}

export default PageContent;
