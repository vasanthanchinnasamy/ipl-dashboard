import {React,useEffect,useState} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import {useParams} from 'react-router-dom';

export const MatchPage = () =>  {
    const[matches,setMatches] = useState([]);
    const{teamName,year} = useParams();

    //const teamName = 'Delhi Capitals';

    useEffect(() => {
      const fetchMatches = async () => {

        const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
        const data = await response.json();
        setMatches(data);
      };
      fetchMatches();
    } ,[]);

  return (
    <div className="MatchPage">
      <h1>Match Page</h1> 
      {matches.map(match=><MatchDetailCard match={match} teamName={teamName}></MatchDetailCard>)}     
    </div>
  );
}

