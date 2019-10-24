import React from "react";
import "./JourneyOptionDetailTime.css";
import clock from "../../../../../../../resources/img/clock.png";

class JourneyOptionDetailTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `${new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })}`,
      isDisplay: false,
      lastSearchtTime: "",
      test: false
    };
  }
  changeDisplay = () => {
    this.setState({
      isDisplay: !this.state.isDisplay
    });
  };
  renderLi = () => {
    let array = [];
    for (let index = 0; index < 24; index++) {
      if (index < 10) {
        array.push(`0${index}:00`);
        array.push(`0${index}:15`);
        array.push(`0${index}:30`);
        array.push(`0${index}:45`);
      } else {
        array.push(`${index}:00`);
        array.push(`${index}:15`);
        array.push(`${index}:30`);
        array.push(`${index}:45`);
      }
    }
    return array;
  };

  renderUl = () => {
    if (this.state.isDisplay) {
      return (
        <ul className="hoursUl">
          {this.testing}
          {this.renderLi().map((time, index) => (
            <li
              className={this.compare(time, this.state.text)}
              onClick={() => this.selectedText(time)}
              key={index}
              id={`${time}`}
            >
              {time}
            </li>
          ))}
        </ul>
      );
    }
  };
  compare = (a, b) => {
    if (a === b) {
      return "hoursLi selected";
    } else {
      return "hoursLi";
    }
  };

  selectedText = x => {
    this.setState({
      isDisplay: false,
      text: x
    });
  };
  onTextChange = e => {
    const value = e.target.value;
    this.setState(() => ({
      text: value
    }));
  };

  render() {
    const { text } = this.state;
    return (
      <div className="clock">
        <input
          className="input-text"
          type="text"
          value={text}
          onChange={this.onTextChange}
          autoFocus={this.state.isDisplay}
        />
        <button className="hours-button" onClick={this.changeDisplay}>
          <img src={clock} alt="logo" />
        </button>
        {this.renderUl()}
      </div>
    );
  }
}

export default JourneyOptionDetailTime;
