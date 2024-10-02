import React, { useState } from "react";
import { kmpSearch } from "../../utils/KMPAlgo/kmp";
import "./KMPAlgo.css";

const KMPAlgo: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [pattern, setPattern] = useState<string>("");
  const [results, setResults] = useState<number[]>([]);
  const [highlightedText, setHighlightedText] = useState<JSX.Element | null>(
    null
  );

  const handleSearch = () => {
    const foundIndexes = kmpSearch(text, pattern);
    setResults(foundIndexes);
    setHighlightedText(highlightMatches(text, pattern, foundIndexes)); // Update highlighted text here
  };

  // Function to highlight matches in the text
  const highlightMatches = (
    text: string,
    pattern: string,
    indices: number[]
  ) => {
    if (indices.length === 0) return null; // Return null if no matches

    const parts: JSX.Element[] = [];
    let lastIndex = 0;

    indices.forEach((index) => {
      if (lastIndex < index) {
        parts.push(
          <span key={`text-${lastIndex}`}>
            {text.substring(lastIndex, index)}
          </span>
        );
      }

      parts.push(
        <span key={`match-${index}`} className="kmp__highlight">
          {text.substring(index, index + pattern.length)}
        </span>
      );

      lastIndex = index + pattern.length;
    });

    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${lastIndex}`}>{text.substring(lastIndex)}</span>
      );
    }

    return <span>{parts}</span>; // Return the parts wrapped in a span
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
        <div className="kmp__highlighted-text">{highlightedText}</div>
      </div>
    </div>
  );
};

export default KMPAlgo;
