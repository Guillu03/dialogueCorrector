/************************************************************************************************************
 *                                                                                                          *
 * File: index.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Dialog View Components                                                                      *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { MAIN_IMAGES } from "../../shared/constants/images";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Import Styles
import "./dialog.css";

// Import Components
import Button from "../../shared/components/Button";
import useDialogController from "./useDialogController";
import useTest1 from "./__tests__/useTest";
import useTest2 from "../../shared/hooks/tests/useTest";
import CorrectionsView from "./components/Corrections";
import Speech from "./components/Speech";

/**
 * Generic view of a menu
 *
 * @param MenuProps
 * @returns MenuView
 */
const DialogView = () => {
  /* View Controller */
  const {
    messages,
    seeCorrectionsEnabled,
    isLoading,
    isSpeechOn,
    handleOnTouchStartEvent,
    handleSeeCorrectionsOnTouchEvent,
    setSeeCorretionsEnabled,
  } = useDialogController();
  //useTest1();
  //useTest2();

  return (
    <>
      {seeCorrectionsEnabled ? (
        <CorrectionsView
          messages={messages}
          setSeeCorrectionsEnabled={setSeeCorretionsEnabled}
        />
      ) : (
        <Speech
          isLoading={isLoading}
          isSpeechOn={isSpeechOn}
          handleOnTouchStartEvent={handleOnTouchStartEvent}
          handleSeeCorrectionsOnTouchEvent={handleSeeCorrectionsOnTouchEvent}
        />
      )}
    </>
  );
};

export default DialogView;
