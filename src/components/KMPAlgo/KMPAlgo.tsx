import React, { useState } from "react";

import { kmpSearch } from "../../utils/KMPAlgo/kmp";

import "./KMPAlgo.css";

const KMPAlgo: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [pattern, setPattern] = useState<string>("");
  const [results, setResults] = useState<number[]>([]);

  const handleSearch = () => {
    const foundIndexes = kmpSearch(text, pattern);
    setResults(foundIndexes);
  };

  return (
    <div className="kmp__container">
      <h1>KMP String Search</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter pattern"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="kmp__results">
        {results.length > 0 ? (
          <h2>Pattern found at indices: {results.join(", ")}</h2>
        ) : (
          <h2>No matches found</h2>
        )}
      </div>
    </div>
  );
};

export default KMPAlgo;
