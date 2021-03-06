import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import MenuSuggestions from "./MenuSuggestions";

class Input2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      suggestions: [],
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
      inputvalue: true
    }));
    if (value.length === 0) {
      this.setState(() => ({
        inputvalue: false
      }));
    }
    this.props.backToRegularInput();
    this.props.textarrival(value);
  };

  suggestionsSelected = x => {
    this.setState(() => ({
      suggestions: []
    }));
    this.props.newArrival(x);
  };

  clearInput = () => {
    this.setState(() => ({
      items: [],
      suggestions: [],
      inputvalue: false
    }));
    this.props.emptyArrival();
  };

  setActive = () => {
    this.setState(() => ({
      items: [],
      suggestions: []
    }));
  };

  render() {
    const { inputvalue, suggestions } = this.state;
    const { errorArrival, arrival } = this.props;
    return (
      <div className="col-lg-6 col-sm-12">
        <label htmlFor="">Aller à</label>
        <input
          onFocus={this.onTextChange}
          value={arrival}
          onChange={this.onTextChange}
          type="text"
          className={
            errorArrival
              ? "form-input form-input-go-to errorInput"
              : "form-input form-input-go-to"
          }
          placeholder={
            errorArrival
              ? "Arrivée: veuillez préciser votre demande"
              : "Gare, station, lieu, adresse"
          }
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
        {suggestions.length === 0 ? null : (
          <MenuSuggestions
            suggestions={this.state.suggestions}
            suggestionsSelected={this.suggestionsSelected}
            setActive={this.setActive}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    arrival: state.reducerRequest.arrival,
    errorArrival: state.reducerGlobal.errorArrival
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newArrival: x => {
      dispatch({ type: "ADD_ARRIVAL_NAME", arrival: x.name });
      dispatch({ type: "ADD_ARRIVAL_ID", id: x.id });
      dispatch({ type: "ADD_ARRIVAL_LAT", arrivalLatitude: x.coord.lat });
      dispatch({ type: "ADD_ARRIVAL_LON", arrivalLongitude: x.coord.lon });
    },
    emptyArrival: () => {
      dispatch({ type: "EMPTY_ARRIVAL" });
    },
    backToRegularInput: () => {
      dispatch({
        type: "ERROR_ARRIVAL",
        errorDeparture: false
      });
    },
    textarrival: x => {
      dispatch({ type: "ADD_ARRIVAL_NAME", arrival: x });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Input2);
