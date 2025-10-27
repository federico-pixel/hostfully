import React from "react";
import { format, addDays } from "date-fns";

function Day({d}){
  return <div className="day"><div className="date">{format(d,"MMM d")}</div></div>;
}

export default function CalendarMock(){
  const days = Array.from({length:14}).map((_,i)=> addDays(new Date(), i));
  return (
    <div className="calendar">
      <h3>Calendar</h3>
      <div className="grid">
        {days.map((d,i)=>(<Day key={i} d={d} />))}
      </div>
    </div>
  );
}
