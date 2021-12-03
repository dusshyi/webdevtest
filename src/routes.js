import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import PromotionDetails from "./components/PromotionDetails";

function Routes(props) {
  return (
    <Router {...props}>
      <Route exact path="/" component={App}>
        <Route path={"/promo?" + query} component={PromotionDetails} />
      </Route>
    </Router>
  );
}
export default App;
