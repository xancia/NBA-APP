import { Fragment } from "react";
import SoloedTeam from './SoloedTeam'
import { useSelector } from 'react-redux';
import Nav from "./Nav";

const Teams = () => {

  const teamData = useSelector((state)=> state.teamData)
  // const gameData = useSelector((state)=> state.gameData)

  return (
    <Fragment>
    <div className="flex flex-col items-center">
      <Nav />
      <div className="max-w-screen-lg p-8">
      {teamData && (
        <div className="grid grid-cols-4 w-full gap-12">
          {teamData.map((team) => (
            <SoloedTeam
            key={team.id} 
            team={team}
            />
          ))}
        </div>
      )}
      </div>
      </div>
    </Fragment>
  );
};



export default Teams;
