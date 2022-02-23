import MatchSmallCard from "../components/MatchSmallCard";
import MatchDetails from "../components/MatchDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
    <div>
      <h1>{team.name}</h1>
      <MatchDetails teamName={team.name} match={team.matches[0]} />
      {team.matches.slice(1).map((m) => (
        <MatchSmallCard teamName={team.name} match={m} key={m.id} />
      ))}
    </div>
  );
};
export default TeamPage;
