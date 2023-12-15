import React, { useState,useEffect} from "react"


const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rapidApiKey = '3558788312msh9e2a10b42f82567p197369jsn4412d29a977e'
        const response = await fetch('https://free-nba.p.rapidapi.com/games', {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'free-nba.p.rapidapi.com',
            'x-rapidapi-key': rapidApiKey,
          },
        });

        const data = await response.json();
        setGames(data.data);
      } catch (error) {
        console.error('Error');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <h1>NBA Games</h1>
    <ul>
      {games.map((game) => (
        <li key={game.id}>
          {game.home_team.full_name} vs {game.visitor_team.full_name}
          
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Games