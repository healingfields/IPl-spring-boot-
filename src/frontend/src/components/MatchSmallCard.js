import { Link } from "react-router-dom";
const MatchSmallCard = ({ teamName, match }) => {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  return (
    <div>
      <h3>
        vs <Link to={"/team/" + otherTeam}> {otherTeam}</Link>
      </h3>
      <p>
        {match.winner} won by {match.result} {match.resultMargin}
      </p>
    </div>
  );
};
export default MatchSmallCard;
