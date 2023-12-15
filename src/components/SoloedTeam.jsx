import React, { useState } from "react";

export default function SoloedTeam({ team, index }) {
  const [reveal, setReveal] = useState(false);
  function handleReveal() {
    setReveal(!reveal);
  }
  return (
    <div onClick={handleReveal} className="Team">
      <div>{team.full_name}</div>
      {/* <div>{team.abbreviation}</div> */}
      {reveal && (
          <>
          <img src="" alt="Fix me" />
          <div>{team.city}</div>
          <div>{team.conference}</div>
          <div>{team.division}</div>
        </>
      )}
      <hr />
    </div>
  );
}
//         "id": 1,
//         "abbreviation": "ATL",
//         "city": "Atlanta",
//         "conference": "East",
//         "division": "Southeast",
//         "full_name": "Atlanta Hawks",
//         "name": "Hawks"