import React from "react";

const MenuSuggestions = () => {
  return (
    <ul className="UlSuggestions" ref={this.myRef}>
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

export default MenuSuggestions;
