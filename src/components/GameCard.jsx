/* eslint-disable react/prop-types */

const GameCard = ({game}) => {
  return (
    <div className="shadow-lg rounded-lg shadow-orange-500 bg-white p-2">
        
            {game.date.split('T')[0]}
        <div className="mt-4">
            <p>{game.home_team.full_name}</p>
            {game.home_team_score}
        </div>

        <div className="mt-2">
            <p>{game.visitor_team.full_name}</p>
            {game.visitor_team_score}
        </div>
        
        
    </div>
  )
}

export default GameCard