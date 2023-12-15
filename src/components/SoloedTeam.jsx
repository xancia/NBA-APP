/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SoloedTeam({ team }) {
  const [reveal, setReveal] = useState(false);

  function handleReveal() {
    setReveal(!reveal);
  }

  return (
    <div onClick={handleReveal}>
      <div className="flex justify-center gap-4">
        <img src={team.href} alt="Fix me" className="h-20" />
        <div>{team.full_name}</div>
      </div>
      {/* <div>{team.abbreviation}</div> */}
      {reveal && (
        <Link key={team.abbreviation} to={`/teams/${team.abbreviation}`}>
          <div className="flex justify-center flex-row bg-gray-200 gap-8">
            <div>Cit: {team.city}</div>
            <div>Conference: {team.conference}</div>
            <div>Division: {team.division}</div>
          </div>
        </Link>
      )}
      <hr />
    </div>
  );
}
