import { useSelector } from "react-redux"


const Home = () => {
  const teams = useSelector((state) => state.teamData)

  return (
    <div>{teams && teams[0].full_name}</div>
  )
}

export default Home