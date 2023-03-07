import Parse from "parse";
// reference links:
// initialize: https://www.back4app.com/docs/react/quickstart
// direct api: https://dashboard.back4app.com/apidocs/yvp9fTFAKgjR2gwk6CgU9B9gTEQzofWnHoY7HEAn#Events-reading-objects
// enable live query: https://blog.back4app.com/building-a-real-time-react-application-with-parse/

/*
class Event {
  title;
  location;
  date;
  startTime;
  constructor(title, location, date, startTime, endTime) {
    this.title = title;
    this.location = location;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}*/
export const getAllEvents = async () => {
  const Events = Parse.Object.extend("Events");
  // console.log("Events:", Events);
  const query = new Parse.Query(Events);
  console.log("query:", query);
  return await query.find().then((results) => {
    return results;
  });
};
