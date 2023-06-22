import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { grid } from "./grid";
import { wheel } from "./wheel";

const useStore = create(
  devtools((set, get) => ({
    contractAddress: "0x4ddEE71A512758DC26A869dAB36ECd0B33c0a8CC",

    wheel: wheel(set, get),
    grid: grid(set, get),

    errors: [],
    setErrors: (errors) => set({ errors: errors }),
  }))
);

export default useStore;
