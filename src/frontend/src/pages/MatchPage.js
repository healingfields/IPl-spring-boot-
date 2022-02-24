import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MatchDetails from "../components/MatchDetails";
const TeamPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    const res = await fetch(`http://localhost:8080/team/${teamName}/matches/?year=${year}`);
    const data = await res.json();
    setMatches(data);
    console.log(data);
  }

  if (matches.length == 0) return <h1>no matches</h1>;
  return (
    <div>
      {matches.map((match) => (
        <MatchDetails key={match.id} teamName={teamName} match={match} />
      ))}
    </div>
  );
};
export default TeamPage;
