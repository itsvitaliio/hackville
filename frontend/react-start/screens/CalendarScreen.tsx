import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Business Project",
      },
      {
        start: moment().add(5, "days").toDate(),
        end: moment().add(8, "days").toDate(),
        title: "Math Homework",
      },
      {
        start: moment().add(9, "days").toDate(),
        end: moment().add(9, "days").toDate(),
        title: "Computer Science Test",
      },
      {
        start: moment().subtract(9, "days").toDate(),
        end: moment().subtract(7, "days").toDate(),
        title: "Computer Science Review",
      },
      {
        start: moment().subtract(13, "days").toDate(),
        end: moment().subtract(3, "days").toDate(),
        title: "English Paper",
      },
      {
        start: moment().subtract(5, "days").toDate(),
        end: moment().subtract(3, "days").toDate(),
        title: "Math Homework",
      },
      {
        start: moment().add(3, "days").toDate(),
        end: moment().add(5, "days").toDate(),
        title: "Math Test",
      },
    ],
  };

  onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: [...state.events] };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default App;
