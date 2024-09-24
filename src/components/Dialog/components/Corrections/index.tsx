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
  const {
    messagesWithoutSystemEntries,
    messagesSufficientForCorrection,
    corrections,
  } = useCorrectionsView(messages, setSeeCorrectionsEnabled);

  return (
    <>
      <div className="container-fluid">
        <div className="corrections-list-container">
          {messagesSufficientForCorrection ? (
            corrections && corrections.length > 0 ? (
              <div>
                <div className="item-list">
                  <h2 className="header">Correcciones</h2>
                  {corrections.map((correction: any, index: number) => (
                    <div key={index} className="item-message">
                      <h3 className="subheader">{correction.category}</h3>
                      <p className="paragraph">
                        <strong>Error: </strong> {correction.error}
                      </p>
                      <p className="paragraph">
                        <strong>Explicación: </strong> {correction.explanation}
                      </p>
                      <p className="paragraph">
                        <strong>Corrección: </strong> {correction.correction}
                      </p>
                    </div>
                  ))}
                </div>
                <hr className="divider" />
                <div className="item-list">
                  <h2 className="header">Diálogo</h2>
                  {messagesWithoutSystemEntries.map((message, index) => (
                    <div key={index} className="item-message">
                      <p className="paragraph">
                        <strong>Rol: </strong>
                        {message.role}
                      </p>
                      <p className="paragraph">
                        <strong>Contenido: </strong> {message.content}
                      </p>
                    </div>
                  ))}
                </div>
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
              <h3 className="subheader">
                <strong className="paragraph">
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
