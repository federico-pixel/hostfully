import React from "react";

const members = [
  {name:"Alice", role:"Product", status:"In office"},
  {name:"Federico", role:"Revenue Operations", status:"Out - Vacation"},
  {name:"Pilar", role:"CS", status:"In office"}
];

export default function TeamList(){
  return (
    <aside className="team">
      <h3>Team</h3>
      <ul>
        {members.map((m,i)=>(
          <li key={i}>
            <strong>{m.name}</strong>
            <div>{m.role}</div>
            <div className={`status ${m.status.includes('Out') ? 'away' : ''}`}>{m.status}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
