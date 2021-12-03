import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PromotionList from "./components/PromotionList";
import PromotionDetails from "./components/PromotionDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<PromotionList />} />
          <Route path={"/:promo"} element={<PromotionDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
