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

/**
 * Generic view of a menu
 *
 * @param MenuProps
 * @returns MenuView
 */
const DialogView: React.FC = () => {
  /* View Controller */
  const { isLoading, isSpeechOn, isDialogBlocked, handleOnTouchStartEvent } =
    useDialogController();
  //useTest1();
  //useTest2();

  return (
    <>
      <div className="container-fluid" onTouchStart={handleOnTouchStartEvent}>
        <div className="container-menu">
          <div className="grid-container">
            {isSpeechOn ? (
              <div className="grid-item item-avatar">
                <img
                  src={MAIN_IMAGES.avatarSpeakingIcon.imageSrc}
                  alt={MAIN_IMAGES.avatarSpeakingIcon.imageAlt}
                  className="d-inline-block align-center"
                />
              </div>
            ) : (
              <div className="grid-item item-avatar">
                <img
                  src={MAIN_IMAGES.avatarNotSpeakingIcon.imageSrc}
                  alt={MAIN_IMAGES.avatarNotSpeakingIcon.imageAlt}
                  className="d-inline-block align-center"
                />
              </div>
            )}
            <div className="grid-item item-input-wrapper-menu-view">
              {isLoading ? (
                <div className="grid-item item-icon-load-alexa-loading-view">
                  <img
                    src={MAIN_IMAGES.loadingIcon.imageSrc}
                    alt={MAIN_IMAGES.loadingIcon.imageAlt}
                    className="d-inline-block align-center"
                  />
                </div>
              ) : isDialogBlocked ? (
                <div className="grid-item item-waiting-text-alexa-loading-view item-waiting-text-alexa-loading-view-animation">
                  Guardando datos. Por favor, espere un momento...
                </div>
              ) : (
                <InputGroup size="lg" className="mb-3">
                  <Form.Control
                    placeholder="¿En qué te puedo ayudar?"
                    aria-label="¿En qué te puedo ayudar?"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    id="save-debug-btn"
                    path=""
                    classStyle=""
                    type="submit"
                  >
                    Enviar
                  </Button>
                </InputGroup>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogView;
