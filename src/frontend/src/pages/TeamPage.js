import MatchSmallCard from "../components/MatchSmallCard";
import MatchDetails from "../components/MatchDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./TeamPage.scss";
import { PieChart } from "react-minimal-pie-chart";
const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    fetchMatches();
  }, [teamName]);

  async function fetchMatches() {
    const res = await fetch(`http://localhost:8080/team/${teamName}`);
    const data = await res.json();
    setTeam(data);
    console.log(data);
  }

  if (!team || !team.name) return <h1>Team not Found</h1>;
  return (
    <div className="teamPage">
      <div className="team-name-section">
        <h1>{team.name}</h1>
      </div>
      <div className="wins-losses-sections">
        losses / wins
        <PieChart
          data={[
            { title: "Wins", value: team.totalWins, color: "#1b4b36" },
            { title: "Two", value: team.totalMatches - team.totalWins, color: "#cf0a2c" }
          ]}
        />
        ;
      </div>
      <div className="latest-match-section">
        <h2>Latest match</h2>
        <MatchDetails teamName={team.name} match={team.matches[0]} />
      </div>
      {team.matches.slice(1).map((m) => (
        <MatchSmallCard teamName={team.name} match={m} key={m.id} />
      ))}
      <div className="more-link">
        <a>more </a>
      </div>
    </div>
  );
};
export default TeamPage;
