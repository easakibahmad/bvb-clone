import { KMPAlgo, NQueens, MergeSort } from "../../components";
import { algoRoutes } from "../../constants";

export const algo = [
  {
    path: algoRoutes.KMP_ALGO,
    element: <KMPAlgo />,
  },
  {
    path: algoRoutes.N_QUEENS,
    element: <NQueens />,
  },
  {
    path: algoRoutes.MERGE_SORT,
    element: <MergeSort />,
  },
];
