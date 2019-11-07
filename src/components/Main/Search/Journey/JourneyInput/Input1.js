import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Input1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      suggestions: [],
      text: "",
      inputvalue: false
    };
  }

  getPlaces = y => {
    if (y.length === 0) {
      return false;
    }
    axios
      .get(`/api/places?search=${y}`, {})
      .then(data => {
        console.log(data.data);
        this.setState({
          suggestions: data.data.places.map(x => x)
        });
      })
      .catch(err => console.error(err));
  };

  onTextChange = e => {
    const value = e.target.value;
    this.getPlaces(value);
    let suggestions = [];
    if (value.length > 0) {
      suggestions = this.state.items;
    }
    this.setState(() => ({
      suggestions,
      text: value,
      inputvalue: true
    }));
    if (value.length === 0) {
      this.setState(() => ({
        inputvalue: false
      }));
    }
  };

  suggestionsSelected = x => {
    this.setState(() => ({
      text: x.name,
      suggestions: []
    }));
    this.props.newDeparture(x);
  };

  clearInput = () => {
    this.setState(() => ({
      text: "",
      items: [],
      suggestions: [],
      inputvalue: false
    }));
  };

  renderSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return false;
    }
    return (
      <ul className="UlSuggestions">
        {suggestions.map((x, index) => (
          <li
            className="LiSuggestions"
            key={index}
            onClick={() => this.suggestionsSelected(x)}
          >
            {x.name}
          </li>
        ))}
      </ul>
    );
  };
  render() {
    const { text, inputvalue } = this.state;
    return (
      <div className="col-lg-6 col-sm-12">
        <label htmlFor="">Partir de</label>
        <input
          value={text}
          onChange={this.onTextChange}
          type="text"
          className="form-input form-input-go-from"
          placeholder="Gare, station, lieu, adresse"
        />
        <button
          className={
            inputvalue ? "delete-input delete-input-active" : "delete-input"
          }
          id="button1"
          onClick={this.clearInput}
        >
          <i>
            <FontAwesomeIcon icon={faTimes} />
          </i>
        </button>

        {this.renderSuggestions()}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    newDeparture: x => {
      dispatch({ type: "ADD_DEPARTURE_NAME", departure: x.name });
      dispatch({ type: "ADD_DEPARTURE_ID", id: x.id });
      dispatch({ type: "ADD_DEPARTURE_LAT", departureLatitude: x.coord.lat });
      dispatch({
        type: "ADD_DEPARTURE_LON",
        departureLongitude: x.coord.lon
      });
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Input1);
