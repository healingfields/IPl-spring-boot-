import { useEffect, useState } from "react";
import TeamGrid from "../components/TeamGrid";

import "./HomePage.scss";
const HomePage = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    const res = await fetch("http://localhost:8080/teams");
    const data = await res.json();
    setTeams(data);
    console.log(data);
  };

  return (
    <div className="HomePage">
      <h1>IPL teams</h1>
      <div className="teams-section">
        {teams.map((team) => (
          <TeamGrid key={team.id} teamName={team.name} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
