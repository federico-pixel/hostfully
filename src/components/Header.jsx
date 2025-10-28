import React from "react";

export default function Header({onRequest}){
  return (
    <header className="header">
      <div className="brand">
        <h1>Tracker</h1>
        <span className="sub">Team absence dashboard</span>
      </div>
      <div className="actions">
        <button onClick={onRequest}>Request time off</button>
        <div className="user">Hostfully</div>
      </div>
    </header>
  );
}
