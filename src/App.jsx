import React, { useMemo, useState } from "react";
import UsersPage from "./pages/UsersPage";
import "./styles.css";

export default function App(){
  const [route, setRoute] = useState("users"); // simple local “routing”

  return (
    <div className="vt-shell">
      <aside className="vt-sidebar">
        <div className="vt-logo">
          <img src="/favicon.ico" width="20" height="20" alt="logo"/>
          Vacation Tracker
          <span className="vt-badge">Demo</span>
        </div>

        <button className="vt-cta" onClick={()=>alert("Request flow (demo)")}>
          Request Leave ⚡
        </button>

        <nav className="vt-nav">
          <a href="#dashboard" onClick={(e)=>{e.preventDefault(); setRoute("dashboard");}} className={route==="dashboard"?"active":""}>Dashboard</a>
          <a href="#calendar" onClick={(e)=>{e.preventDefault(); setRoute("calendar");}} className={route==="calendar"?"active":""}>Calendar</a>
          <a href="#wallchart" onClick={(e)=>{e.preventDefault(); setRoute("wallchart");}} className={route==="wallchart"?"active":""}>Wallchart</a>
          <div style={{margin:"6px 0 4px 12px",fontSize:12,color:"var(--muted)",textTransform:"uppercase"}}>Team & approval flows</div>
          <a href="#users" onClick={(e)=>{e.preventDefault(); setRoute("users");}} className={route==="users"?"active":""}>Users</a>
          <a href="#notifications" onClick={(e)=>{e.preventDefault(); setRoute("notifications");}} className={route==="notifications"?"active":""}>Team Notifications</a>
          <a href="#holidays" onClick={(e)=>{e.preventDefault(); setRoute("holidays");}} className={route==="holidays"?"active":""}>Holidays</a>
          <a href="#profile" onClick={(e)=>{e.preventDefault(); setRoute("profile");}} className={route==="profile"?"active":""}>My Profile</a>
        </nav>

        <div style={{marginTop:"auto", fontSize:12, color:"var(--muted)"}}>
          Federico Dominguez<br/>Hostfully
        </div>
      </aside>

      <main className="vt-main">
        <div className="vt-topbar">
          <div style={{fontWeight:700}}>USERS</div>
          <div className="vt-user">Hostfully</div>
        </div>

        <div className="vt-content">
          {route==="users" ? <UsersPage/> : (
            <div className="vt-card">This is a demo placeholder for “{route}”.</div>
          )}
        </div>
      </main>
    </div>
  );
}
