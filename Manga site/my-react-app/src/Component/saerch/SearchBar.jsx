import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`https://api.jikan.moe/v4/manga?q=${value}&limit=10`)
      .then((response) => response.json())
      .then((json) => {
      
        setResults(json.data);
      });
  };

   function handleChange  (e)  {
   return setInput(e.target.value);
    
    
  }

  const handleKeyDown = () => {
    
   
    fetchData(input)
    
  }
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" onClick={handleKeyDown} />
      <input
      type="text"
        placeholder="Type to search..."
        value={input}
        onChange={  handleChange}
        onKeyDown={event => {
          if (event.key === 'Enter') {
           { handleKeyDown()}
          }
        }}
      />
    </div>
  );
};
