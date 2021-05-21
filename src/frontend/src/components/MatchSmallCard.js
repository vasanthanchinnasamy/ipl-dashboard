import {React} from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({match,teamName}) =>  {
  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
  const otherTeamRoute  = `/teams/${otherTeam}`;
  return (
    <div className="MatchSmallCard">
      <p> vs <Link to={otherTeamRoute}>{otherTeam}</Link></p>
      <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}

