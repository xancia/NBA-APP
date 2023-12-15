import { Fragment } from "react";
import SoloedTeam from './SoloedTeam'
import { useSelector } from 'react-redux';
import Nav from "./Nav";

const Teams = () => {

  const teamData = useSelector((state)=> state.teamData)
  // const gameData = useSelector((state)=> state.gameData)

  return (
    <Fragment>
      <Nav />
      <hr />

      {teamData && (
        <>
          {teamData.map((team) => (
            <SoloedTeam
            key={team.id} 
            team={team}
            />
          ))}
        </>
      )}
    </Fragment>
  );
};



export default Teams;
