import React from "react";
import "./JourneyOptionDetailTime.css";
import clock from "../../../../../../../resources/img/clock.png";
import LiDetailsTime from "./LiDetailsTime";
import { connect } from "react-redux";

class DetailsTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      isDisplay: false
    });
    this.props.newTime(x);
  };
  onTextChange = e => {
    const value = e.target.value;
    this.props.newTime(value);
  };
  focusTextInput = () => {
    this.myRef.current.focus();
  };

  controlTextOnInput = e => {
    const ref = this.myRef.current;
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    console.log(e.target);
    //si on clique ailleur et que le regex nest pas valide, la valeur devient l'heure actuelle
    if (
      !ref.contains(e.target) &&
      !regex.test(ref.defaultValue) &&
      !this.state.isDisplay
    ) {
      this.props.newTime(
        `${new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })}`
      );
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.controlTextOnInput);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.controlTextOnInput);
  }
  render() {
    const { time } = this.props;
    return (
      <>
        <div className="clock col-lg-4 col-6 my-3">
          <input
            className="input-text"
            type="text"
            value={time}
            onChange={this.onTextChange}
            ref={this.myRef}
          />
          <button className="hours-button" onClick={this.changeDisplay}>
            <img src={clock} alt="logo" />
          </button>
          {this.state.isDisplay && (
            <LiDetailsTime
              compare={this.compare}
              text={this.props.time}
              changeDisplay={this.changeDisplay}
              selectedText={this.selectedText}
              controlTextOnInput={this.controlTextOnInput}
            />
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    time: state.reducerRequest.time
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newTime: x => {
      dispatch({ type: "ADD_TIME", time: x });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsTime);
