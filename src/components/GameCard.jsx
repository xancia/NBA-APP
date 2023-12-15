/* eslint-disable react/prop-types */

const GameCard = ({game}) => {
  return (
    <div className="">
        
            {game.date}
        <div>
            {game.home_team.full_name}
            {game.home_team_score}
        </div>

        <div>
            {game.visitor_team.full_name}
            {game.visitor_team_score}
        </div>
        
        
    </div>
  )
}

export default GameCard