/************************************************************************************************************
 *                                                                                                          *
 * File: StartAppView.tsx                                                                                   *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import Button from "../../shared/components/Button";
import "./welcome.css";

/**
 * View with application's progress
 *
 * @returns StartAppView
 */
const StartAppView: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-menu-start-app-view">
          <div className="grid-container-start-app-view">
            <div className="item-logo-start-app-view">Corrector diálogo v8</div>
            <div className="item-button-start-app-view">
              <Button
                id="start"
                path="/startMenu"
                classStyle="btn-primary item-button"
                type="button"
              >
                Comenzar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartAppView;
