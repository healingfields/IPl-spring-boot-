import MatchSmallCard from "../components/MatchSmallCard";
import MatchDetails from "../components/MatchDetails";
import { useState, useEffect } from "react";
const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  useEffect(() => {
    fetchMatches();
  }, []);
  async function fetchMatches() {
    const res = await fetch("http://localhost:8080/team/Royal%20Challengers%20Bangalore");
    const data = await res.json();
    setTeam(data);
    console.log(data);
  }
  return (
    <div>
      <h1>{team.name}</h1>
      <MatchDetails match={team.matches[0]} />
      {team.matches.slice(1).map((m) => (
        <MatchSmallCard match={m} key={m.id} />
      ))}
    </div>
  );
};
export default TeamPage;
