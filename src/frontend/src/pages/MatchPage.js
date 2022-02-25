import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MatchDetails from "../components/MatchDetails";
import YearSelector from "../components/YearSelector";

import "./MatchPage.scss";

const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    fetchMatches();
  }, [year, teamName]);

  async function fetchMatches() {
    const res = await fetch(`http://localhost:8080/team/${teamName}/matches/?year=${year}`);
    const data = await res.json();
    setMatches(data);
    console.log(data);
  }

  if (matches.length == 0)
    return (
      <div className="MatchPage">
        <div className="year">
          <p>select a year</p>
          <YearSelector teamName={teamName} />
        </div>
        <h1>no matches</h1>;
      </div>
    );
  return (
    <div className="MatchPage">
      <div className="year">
        <p>select a year</p>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <h1>
          {teamName} matches in {year}
        </h1>
        {matches.map((match) => (
          <MatchDetails key={match.id} teamName={teamName} match={match} />
        ))}
      </div>
    </div>
  );
};
export default MatchPage;
