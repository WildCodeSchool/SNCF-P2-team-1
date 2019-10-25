import React from "react";
import "./JourneyOptionDetailTime.css";
import clock from "../../../../../../../resources/img/clock.png";
import LiDetailsTime from "./LiDetailsTime";

class DetailsTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `${new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })}`,
      isDisplay: false,
      lastSearchtTime: ""
    };
    this.myRef = React.createRef();
  }
  changeDisplay = () => {
    this.setState({
      isDisplay: !this.state.isDisplay
    });
    this.focusTextInput();
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
  focusTextInput = () => {
    this.myRef.current.focus();
  };

  render() {
    const { text } = this.state;
    return (
      <>
        <div className="clock">
          <input
            className="input-text"
            type="text"
            value={text}
            onChange={this.onTextChange}
            ref={this.myRef}
          />
          <button className="hours-button" onClick={this.changeDisplay}>
            <img src={clock} alt="logo" />
          </button>
          {this.state.isDisplay && (
            <LiDetailsTime
              compare={this.compare}
              text={this.state.text}
              changeDisplay={this.changeDisplay}
              selectedText={this.selectedText}
            />
          )}
        </div>
      </>
    );
  }
}

export default DetailsTime;
