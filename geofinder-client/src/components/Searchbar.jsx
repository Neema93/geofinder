import { useState } from "react";

const SearchBar = ({ setLocation }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Search location..."
        onChange={(event) => setInput(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;