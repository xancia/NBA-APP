/* eslint-disable react/prop-types */

const GameCard = ({game}) => {
    let splitdate = game.date.split('T')[0]
    splitdate = splitdate.split('-').map(e => e[0] == '0' ? e.slice(1) : e);
    splitdate = splitdate[1] + '/' + splitdate[2] + '/' + splitdate[0];

  return (
    <div className="shadow-lg rounded-lg shadow-orange-500 bg-white p-2">
        
            <p className="font-bold">{splitdate}</p>
            <p className="font-bold border-b-2">Score</p>
        <div className="mt-2">
            
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