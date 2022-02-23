import "./App.css";
import TeamPage from "./pages/TeamPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/team/:teamName" element={<TeamPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
