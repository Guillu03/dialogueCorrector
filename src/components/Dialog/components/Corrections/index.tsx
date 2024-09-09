/************************************************************************************************************
 *                                                                                                          *
 * File: index.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Dialog View Components                                                                      *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { MAIN_IMAGES } from "../../../../shared/constants/images";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
  const { corrections } = useCorrectionsView(
    messages,
    setSeeCorrectionsEnabled
  );

  return (
    <>
      <div className="container-fluid">
        <div className="container-menu">
          <div className="grid-container">
            {" "}
            <div>
              {corrections.length > 0 ? (
                // Mostrar correcciones si están disponibles
                <div>{corrections}</div>
              ) : (
                // Mostrar el ícono de carga si no hay correcciones
                <div className="grid-item item-icon-load-alexa-loading-view">
                  <img
                    src={MAIN_IMAGES.loadingIcon.imageSrc}
                    alt={MAIN_IMAGES.loadingIcon.imageAlt}
                    className="d-inline-block align-center"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorrectionsView;
