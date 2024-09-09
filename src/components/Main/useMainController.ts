import { useState } from "react";

const useMainController = () => {
  const [seeCorrectionsEnabled, setSeeCorretionsEnabled] =
    useState<boolean>(false);

  return {
    seeCorrectionsEnabled,
    setSeeCorretionsEnabled,
  };
};

export default useMainController;
