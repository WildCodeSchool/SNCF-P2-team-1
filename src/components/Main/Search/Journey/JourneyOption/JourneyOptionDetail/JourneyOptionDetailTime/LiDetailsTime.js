import React from "react";

class LiDetailsTime extends React.Component {
  constructor(props) {
    super(props);
    this.myRefUl = React.createRef();
    console.log(props);
  }

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
  componentDidMount() {
    const minutes = ["45", "15", "30"];
    if (!minutes.includes(this.props.text.split(":").pop())) {
      window.location.href = `#${this.props.text.substring(0, 2)}:00`;
    } else {
      window.location.href = `#${this.props.text}`;
    }
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }
  handleClick = e => {
    if (!this.myRefUl.current.contains(e.target)) {
      this.props.changeDisplay();
    }
  };
  render() {
    return (
      <ul className="hoursUl" ref={this.myRefUl}>
        {this.renderLi().map((time, index) => (
          <li
            className={this.props.compare(time, this.props.text)}
            onClick={() => this.props.selectedText(time)}
            key={index}
            id={`${time}`}
          >
            {time}
          </li>
        ))}
      </ul>
    );
  }
}

export default LiDetailsTime;
