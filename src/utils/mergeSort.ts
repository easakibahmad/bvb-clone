const mergeSort = (array: number[]): number[] => {
    if (array.length <= 1) return array;
  
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
  
    return merge(left, right);
  };
  
  const merge = (left: number[], right: number[]): number[] => {
    const sortedArray: number[] = [];
    let leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        sortedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        sortedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return [...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
  };

  export {mergeSort}