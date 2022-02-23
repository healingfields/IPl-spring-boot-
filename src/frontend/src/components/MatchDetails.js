import { Link } from "react-router-dom";
const MatchDetails = ({ teamName, match }) => {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  if (!match) return null;
  return (
    <div>
      <h4>Latest matches</h4>
      <h1>
        vs
        <Link to={"/team/" + otherTeam}> {otherTeam}</Link>
      </h1>
      <h2>{match.date}</h2>
      <h3>at {match.venue}</h3>
      <h4>
        {match.winner} won by {match.result} {match.resultMargin}
      </h4>
    </div>
  );
};
export default MatchDetails;
