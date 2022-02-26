import "./TeamGrid.scss";
import { Link } from "react-router-dom";
const TeamGrid = ({ teamName }) => {
  return (
    <div className="TeamGrid">
      <p>
        <Link to={`team/${teamName}`}> {teamName}</Link>
      </p>
    </div>
  );
};
export default TeamGrid;
