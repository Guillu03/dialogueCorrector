/************************************************************************************************************
 *                                                                                                          *
 * File: index.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Dialog View Components                                                                      *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { MAIN_IMAGES } from "../../../../shared/constants/images";
import "./corrections.css";

// Import Styles

// Import Components
import useCorrectionsView from "./useCorrectionsView";
import { OpenAIMessageDTO } from "../../../../shared/dtos/OpenAIDTO";

interface CorrectionsViewProps {
  messages: OpenAIMessageDTO[];
  setSeeCorrectionsEnabled: (enabled: boolean) => void;
}

/**
 * Corrections view
 *
 * @returns CorrectionsView
 */
const CorrectionsView: React.FC<CorrectionsViewProps> = ({
  messages,
  setSeeCorrectionsEnabled,
}) => {
  /* View Controller */
  const { messagesSufficientForCorrection, corrections } = useCorrectionsView(
    messages,
    setSeeCorrectionsEnabled
  );

  return (
    <>
      <div className="container-fluid">
        <div className="corrections-list-container">
          {messagesSufficientForCorrection ? (
            corrections && corrections.length > 0 ? (
              <div className="corrections-list">
                {corrections.map((correction: any, index: number) => (
                  <div key={index} className="correction-message">
                    <h3>{correction.category}</h3>
                    <p>
                      <strong>Error:</strong> {correction.error}
                    </p>
                    <p>
                      <strong>Explicación:</strong> {correction.explanation}
                    </p>
                    <p>
                      <strong>Corrección:</strong> {correction.correction}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid-item item-icon-load-alexa-loading-view">
                <img
                  src={MAIN_IMAGES.loadingIcon.imageSrc}
                  alt={MAIN_IMAGES.loadingIcon.imageAlt}
                  className="d-inline-block align-center"
                />
              </div>
            )
          ) : (
            <div className="correction-insufficient-messages">
              <h3>
                <strong>
                  No hay mensajes suficientes para poder realizar la corrección
                </strong>
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CorrectionsView;
