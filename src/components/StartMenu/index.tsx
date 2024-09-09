/************************************************************************************************************
 *                                                                                                          *
 * File: StartMenuView.tsx                                                                                  *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import "./start-menu.css";
import useStartMenuController from "./useStartMenuController";
import Button from "react-bootstrap/Button";

/**
 * View with application's progress
 *
 * @returns OptionsView
 */
const StartMenuView: React.FC = () => {
  const {
    isDisabled,
    isLoading,
    handleChangeOnPseudonymInput,
    handleStartButtonClick,
  } = useStartMenuController();

  return (
    <>
      <div className="container-fluid">
        <div className="container-menu-start-menu-view">
          <div className="grid-container-start-menu-view">
            <div
              className="item-start-menu-view"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Container>
                <h3 style={{ marginBottom: "30px", fontWeight: "bold" }}>
                  Rellena el siguiente formulario para poder comenzar el diálogo
                </h3>
                <Row>
                  <Col
                    xs={2}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <div style={{ color: "red" }}>*</div>
                    Seudónimo
                  </Col>
                  <Col>
                    <Form>
                      <Form.Group controlId="pseudonym">
                        <Form.Control
                          type="string"
                          placeholder="Introduce los tres últimos dígitos del DNI del usuario (p.ej. 123X)"
                          onChange={handleChangeOnPseudonymInput}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
            <Container>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Col xs="6" className="item-button-start-menu-view">
                  <Button
                    id="start"
                    className="btn-primary item-button"
                    type="button"
                    onTouchEnd={handleStartButtonClick}
                    disabled={isDisabled || isLoading}
                  >
                    <Container>
                      <Row>
                        {isLoading && (
                          <Col xs="1">
                            <Spinner
                              as="span"
                              animation="border"
                              role="status"
                              aria-hidden="true"
                            />
                          </Col>
                        )}
                        <Col>Comenzar</Col>
                      </Row>
                    </Container>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartMenuView;
