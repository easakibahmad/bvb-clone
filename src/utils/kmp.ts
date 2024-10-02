const computeLPSArray = (pattern: string): number[] => {
  const lps: number[] = new Array(pattern.length).fill(0);
  let len = 0; // Length of the previous longest prefix suffix
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1]; // Fall back to the previous longest prefix suffix
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
};

const kmpSearch = (text: string, pattern: string): number[] => {
  const lps = computeLPSArray(pattern);
  const results: number[] = [];
  let i = 0; // Index for text
  let j = 0; // Index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      results.push(i - j); // Pattern found
      j = lps[j - 1]; // Get the next position from the LPS array
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1]; // Use LPS to skip
      } else {
        i++;
      }
    }
  }
  return results;
};

export { computeLPSArray, kmpSearch };
