/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SoloedTeam({ team }) {
  const [reveal, setReveal] = useState(false);

  function handleReveal() {
    setReveal(!reveal);
  }

  return (
    <div className="w-44 h-full" onClick={handleReveal}>
      <div className="flex flex-col items-center">
        <img src={team.href} alt="Fix me" className=" w-32" />
      </div>
      {reveal && (
        <Link key={team.id} to={`/teams/${team.id}`}>
          <div className="bg-gray-600 rounded-md text-white w-40 mx-auto hover:scale-105 duration-100 mt-1 py-2">
            <div className="text-center font-bold">{team.full_name}</div>
            <div className="flex flex-col text-sm items-center ">
              <div>City: {team.city}</div>
              <div>Conference: {team.conference}</div>
              <div>Division: {team.division}</div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
