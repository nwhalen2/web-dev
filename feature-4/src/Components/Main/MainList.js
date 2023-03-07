import React, { useEffect, useState } from "react";
import { getAllEvents } from "/src/Services/Events";

const MainList = () => {
  const [events, setEvents] = useState([]);
  /*
  if (!postCheck) {
    createUser(1, "John", "Mayer", "jmayer@gmail.com", "wonderland");
    postCheck = true;
  }
*/
  useEffect(() => {
    getAllEvents().then((events) => {
      setEvents(events);
    });
  }, []);

  return (
    <div>
      <hr />
      This is the main list component.
      <ul>
        {events.map((event) => (
          <li key={event.get("id")}>
            {event.get("title")}, {event.get("location")}: {event.get("date")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainList;
