import React, { useRef, useEffect } from "react";

const MenuSuggestions = ({ suggestions, suggestionsSelected, setActive }) => {
  const refUl = useRef();
  useEffect(() => {
    // add when mounted
    document.addEventListener("click", handleClick2);
    return () => {
      document.removeEventListener("click", handleClick2);
    };
  });
  const handleClick2 = e => {
    if (!refUl.current.contains(e.target)) {
      setActive();
    }
  };

  return (
    <ul className={"UlSuggestions"} ref={refUl}>
      {suggestions.map((x, index) => (
        <li
          className="LiSuggestions"
          key={index}
          onClick={() => suggestionsSelected(x)}
        >
          {x.name}
        </li>
      ))}
    </ul>
  );
};

export default MenuSuggestions;
