import "./App.scss";
import TeamPage from "./pages/TeamPage";
import MatchPage from "./pages/MatchPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/team/:teamName/matches/:year" element={<MatchPage />}></Route>
          <Route path="/team/:teamName" element={<TeamPage />}></Route>
          <Route path="" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
