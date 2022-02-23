const MatchDetails = ({ match }) => {
  if (!match) return null;
  return (
    <div>
      <h2>Latest matches</h2>
      <h3>
        {match.team1} vs {match.team2}
      </h3>
    </div>
  );
};
export default MatchDetails;
