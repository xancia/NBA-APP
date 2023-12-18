/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import GameCard from "./GameCard"
import Nav from "./Nav"

const Games = () => {
  const {id} = useParams()
  const [gameData, setGameData] = useState(null)
  const teamData = useSelector((state)=> state.teamData)
  const [team] = teamData.filter((team => team.id == id))
  console.log(team)


  const url = `https://free-nba.p.rapidapi.com/games?page=0&per_page=25&team_ids[]=${id}&seasons[]=2023`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_KEY,
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  async function fetchGameData() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.data);
      setGameData(result.data)
    } catch (error) {
      console.error(error);
    }   
  }

  useEffect(() => {
    fetchGameData()
  }, [])
  


  return (
    <div className="flex flex-col w-full items-center bg-gradient-to-b from-white via-white via-10% to-sky-800">
      <Nav />
      <div className="flex justify-center items-center p-8">
        {team && <img className="w-40" src={team.href} alt="team pic" />}
      </div>
      <div className="max-w-screen-lg w-full h-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 text-center py-8 px-12 sm:px-36 lg:px-0">
        {gameData && gameData.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
        </div>
      </div>

    </div>
  )
}

export default Games