import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class Input2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      suggestions: [],
      text: ""
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
      text: value
    }));
  };

  suggestionsSelected = x => {
    this.setState(() => ({
      text: x.name,
      suggestions: []
    }));
    this.props.newArrival(x);
  };

  renderSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return false;
    }
    return (
      <ul className="UlSuggestions">
        {suggestions.map(x => (
          <li
            className="LiSuggestions"
            key={x.shortName}
            onClick={() => this.suggestionsSelected(x)}
          >
            {x.name}
          </li>
        ))}
      </ul>
    );
  };
  render() {
    const { text } = this.state;
    return (
      <div className="test">
        <input
          value={text}
          onChange={this.onTextChange}
          type="text"
          className="form-input  form-input-go-to"
          placeholder="Gare, Station, Lieu, Adresse"
        />

        {this.renderSuggestions()}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    newArrival: x => {
      dispatch({ type: "ADD_ARRIVAL_NAME", arrival: x.name });
      dispatch({ type: "ADD_ARRIVAL_ID", id: x.id });
      dispatch({ type: "ADD_ARRIVAL_LAT", arrivalLatitude: x.coord.lat });
      dispatch({ type: "ADD_ARRIVAL_LON", arrivalLongitude: x.coord.lon });
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Input2);
