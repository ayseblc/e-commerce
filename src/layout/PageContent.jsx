import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

function PageContent() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default PageContent;