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
      <div className="">
      {teamData && (
        <div className="flex justify-evenly flex-wrap items-center p-3 gap-5">
          {teamData.map((team) => (
            <SoloedTeam
            key={team.id} 
            team={team}
            />
          ))}
        </div>
      )}
      </div>
    </Fragment>
  );
};



export default Teams;
