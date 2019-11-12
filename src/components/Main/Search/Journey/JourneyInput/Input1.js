import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import MenuSuggestions from "./MenuSuggestions";

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
    this.setState(() => ({
      text: value,
      inputvalue: true
    }));
    if (value.length === 0) {
      this.setState(() => ({
        inputvalue: false
      }));
    }
    this.props.backToRegularInput();
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
    this.props.emptyDeparture();
  };
  setActive = () => {
    this.setState(() => ({
      items: [],
      suggestions: []
    }));
  };

  render() {
    const { text, inputvalue, suggestions } = this.state;
    const { errorDeparture } = this.props;
    return (
      <div className="col-lg-6 col-sm-12">
        <label htmlFor="">Partir de</label>
        <input
          onClick={() => this.props.emptyDeparture()}
          onFocus={this.onTextChange}
          value={text}
          onChange={this.onTextChange}
          type="text"
          className={
            errorDeparture
              ? "form-input form-input-go-from errorInput"
              : "form-input form-input-go-from"
          }
          placeholder={
            errorDeparture
              ? "Départ: veuillez préciser votre demande"
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
    errorDeparture: state.reducerGlobal.errorDeparture
  };
};
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
    },
    emptyDeparture: () => {
      dispatch({ type: "EMPTY_DEPARTURE", empty: null });
    },
    backToRegularInput: () => {
      dispatch({
        type: "ERROR_DEPARTURE",
        errorDeparture: false
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input1);
