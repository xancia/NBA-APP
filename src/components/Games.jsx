import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Games = () => {
  const {id} = useParams()
  const teamData = useSelector((state)=> state.teamData)
  const [team] = teamData.filter((team => team.id == id))
  console.log(team)

  return (
    <div>{team && team.full_name}</div>
  )
}

export default Games