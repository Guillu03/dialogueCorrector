/************************************************************************************************************
 *                                                                                                          *
 * File: useButtonViewController.tsx                                                                        *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used for managing ButtonView                                                    *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useNavigate } from "react-router-dom";

const useButtonViewController = () => {
  /* React Hooks */
  const navigate = useNavigate();

  /**
   * Moves on to the component associated to the path passed as a parameter
   *
   * @param _path
   */
  const onClickNavigateToPath = (_path: string) => {
    navigate(_path);
  };

  return { onClickNavigateToPath };
};

export default useButtonViewController;
