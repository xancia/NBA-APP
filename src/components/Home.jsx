import { useSelector } from "react-redux"


const Home = () => {
  const teams = useSelector((state) => state.teamData)

  return (
    <div>{teams && <img src={teams[0].href}/>}
          </div>
  )
}

export default Home