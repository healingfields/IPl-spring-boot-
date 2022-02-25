import { Link } from "react-router-dom";
import "./MatchDetails.scss";
const MatchDetails = ({ teamName, match }) => {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const isMatchWon = teamName == match.winner;
  if (!match) return null;
  return (
    <div className={isMatchWon ? "matchDetails card-won" : "matchDetails card-loss"}>
      <div className="main-details">
        <span>vs</span>
        <h1>
          <Link to={"/team/" + otherTeam}> {otherTeam}</Link>
        </h1>
        <h2 className="match-date">{match.date}</h2>
        <h3 className="match-venue">at {match.venue}</h3>
        <h4 className="match-result">
          {match.winner} won by {match.result} {match.resultMargin}
        </h4>
      </div>
      <div className="additional-details">
        <h3>Player of the match</h3>
        <p>{match.playerOfMatch}</p>
        <h3>First Innings</h3>
        <p>{match.team1}</p>
        <h3>Second Innings</h3>
        <p>{match.playerOfMatch}</p>
        <h3>Umpires</h3>
        <p>
          {match.umpire1}, {match.umpire2}
        </p>
      </div>
    </div>
  );
};
export default MatchDetails;
