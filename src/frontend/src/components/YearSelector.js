import "./YearSelector.scss";
import { Link } from "react-router-dom";
const YearSelector = ({ teamName }) => {
  let years = [];
  //   const startYear = process.env.REACT_APP_DATA_START_YEAR;
  //   const endYear = process.env.REACT_APP_DATA_START_END;

  for (let i = 2008; i <= 2020; i++) {
    years.push(i);
    console.log("yes");
  }
  console.log(years);

  return (
    <div className="YearSelector">
      <ul>
        {years.map((year) => (
          <li key={year.indexOf}>
            <Link to={`/team/${teamName}/matches/${year}`}>{year}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default YearSelector;
