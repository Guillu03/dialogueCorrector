/************************************************************************************************************
 *                                                                                                          *
 * File: index.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Dialog View Components                                                                      *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Import Styles
import "./speech.css";
import { MAIN_IMAGES } from "../../../../shared/constants/images";
import Button from "../../../../shared/components/Button";

// Import Components

interface SpeechViewProps {
  isLoading: boolean;
  isSpeechOn: boolean;
  handleOnTouchStartEvent: () => void;
  handleSeeCorrectionsOnTouchEvent: (enabled: boolean) => void;
}

/**
 * Generic view of a menu
 *
 * @param MenuProps
 * @returns MenuView
 */
const DialogView: React.FC<SpeechViewProps> = ({
  isLoading,
  isSpeechOn,
  handleOnTouchStartEvent,
  handleSeeCorrectionsOnTouchEvent,
}) => {
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
              ) : (
                <div className="item-button-speech-view ">
                  <Button
                    id="start"
                    path="/seeCorrections"
                    onClick={handleSeeCorrectionsOnTouchEvent}
                    classStyle="btn-primary item-button"
                    type="button"
                  >
                    Ver correcciones
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogView;
