import { Link } from "react-router-dom";
import "./MatchSmallCard.scss";
const MatchSmallCard = ({ teamName, match }) => {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const isMatchWon = teamName == match.winner;
  return (
    <div className={isMatchWon ? "matchSmallCard card-won" : "matchSmallCard card-loss"}>
      <span>vs</span>
      <h1>
        <Link to={"/team/" + otherTeam}> {otherTeam}</Link>
      </h1>
      <p className="result">
        {match.winner} won by {match.result} {match.resultMargin}
      </p>
    </div>
  );
};
export default MatchSmallCard;
