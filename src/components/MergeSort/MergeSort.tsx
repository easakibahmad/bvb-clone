import { useState } from "react";

import { mergeSort } from "../../utils/mergeSort";

import "./MergeSort.css"

const MergeSort: React.FC = () => {
    const [input, setInput] = useState('');
    const [sortedArray, setSortedArray] = useState<number[]>([]);
  
    const handleSort = () => {
      const inputArray = input.split(',').map(num => parseInt(num.trim(), 10));
      if (inputArray.some(isNaN)) {
        alert('Please enter a valid list of numbers separated by commas.');
        return;
      }
      const result = mergeSort(inputArray);
      setSortedArray(result);
    };
  
    return (
      <div className="merge-sort__container">
        <h2>Merge Sort</h2>
        <input 
          type="text" 
          placeholder="Enter numbers separated by commas" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="merge-sort__input"
        />
        <button className="merge-sort__btn" onClick={handleSort}>Sort</button>
        
        {sortedArray.length > 0 && (
          <div className="merge-sort__sorted">
            <h3>Sorted Array:</h3>
            <p className="">{sortedArray.join('----')}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default MergeSort;