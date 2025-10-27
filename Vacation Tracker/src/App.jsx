import React, {useState} from "react";
import Header from "./components/Header";
import CalendarMock from "./components/CalendarMock";
import TeamList from "./components/TeamList";

export default function App(){
  const [showRequestModal, setShowRequestModal] = useState(false);

  return (
    <div className="app">
      <Header onRequest={() => setShowRequestModal(true)} />
      <div className="container">
        <div className="left">
          <TeamList />
        </div>
        <div className="right">
          <CalendarMock />
        </div>
      </div>

      {showRequestModal && (
        <div className="modal">
          <div className="modal-inner">
            <h3>Request time off</h3>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Request submitted (demo)'); setShowRequestModal(false)}}>
              <label>Type</label>
              <select><option>Vacation</option><option>Sick</option></select>
              <label>From</label>
              <input type="date" required />
              <label>To</label>
              <input type="date" required />
              <div className="row">
                <button type="submit">Submit</button>
                <button type="button" onClick={()=>setShowRequestModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
