import { Fragment } from "react";
import SoloedTeam from './SoloedTeam'
import { useSelector } from 'react-redux';

const Teams = () => {

  const teamData = useSelector((state)=> state.teamData)
  // const gameData = useSelector((state)=> state.gameData)

  return (
    <div>Teams</div>
  )
}

export default Teams