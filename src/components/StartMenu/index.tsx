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
import { LANGUAGES } from "../../shared/constants/languages";
import { LEVELS, LevelType } from "../../shared/constants/levels";
import { TOPICS, TopicType } from "../../shared/constants/topics";

/**
 * View with application's progress
 *
 * @returns OptionsView
 */
const StartMenuView: React.FC = () => {
  const {
    age,
    selectedLanguage,
    selectedLevel,
    selectedTopic,
    selectedOtherTopic,
    isDisabled,
    isLoading,
    handleChangeOnPseudonymInput,
    handleChangeOnAgeInput,
    handleChangeOnLanguageInput,
    handleChangeOnLevelInput,
    handleChangeOnTopicInput,
    handleChangeOnOtherTopicInput,
    handleStartButtonClick,
  } = useStartMenuController();

  const languageList = LANGUAGES;
  const languageLevels = Object.entries(LEVELS);
  const topicsByLevel = selectedLevel.key ? TOPICS[selectedLevel.key] : [];

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
                <h5 className="header">
                  Rellena el siguiente formulario para poder comenzar el diálogo
                </h5>
                <Row>
                  <Col
                    xs={2}
                    className="label"
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
                </Row>{" "}
                <br />
                <Row>
                  <Col
                    xs={2}
                    className="label"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <div style={{ color: "red" }}>*</div>
                    Edad
                  </Col>
                  <Col>
                    <Form.Select
                      className="select"
                      aria-label="Default select example"
                      value={age}
                      onChange={handleChangeOnAgeInput}
                    >
                      <option className="option" value="-1">
                        Seleccione la edad del usuario
                      </option>
                      {Array.from({ length: 100 }, (_, i) => (
                        <option className="option" key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col
                    xs={2}
                    className="label"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <div style={{ color: "red" }}>*</div>
                    Idioma
                  </Col>
                  <Col>
                    <Form.Select
                      className="select"
                      aria-label="Default select example"
                      value={selectedLanguage}
                      onChange={handleChangeOnLanguageInput}
                    >
                      <option className="option" value="-1">
                        Selecciona un idioma
                      </option>
                      {languageList.map((language) => (
                        <option
                          className="option"
                          key={language.key}
                          value={language.key}
                        >
                          {language.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col
                    xs={2}
                    className="label"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <div style={{ color: "red" }}>*</div>
                    Nivel
                  </Col>
                  <Col>
                    <Form.Select
                      className="select"
                      aria-label="Default select example"
                      value={selectedLevel.key}
                      onChange={handleChangeOnLevelInput}
                    >
                      <option className="option" value="-1">
                        Selecciona un nivel
                      </option>
                      {languageLevels.map(
                        ([key, levelData]: [string, LevelType]) => (
                          <option
                            className="option"
                            key={levelData.key}
                            value={levelData.key}
                          >
                            {key} - {levelData.name}
                          </option>
                        )
                      )}
                    </Form.Select>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col
                    xs={2}
                    className="label"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    <div style={{ color: "red" }}>*</div>
                    Tema
                  </Col>
                  <Col>
                    <Form.Select
                      className="select"
                      aria-label="Default select example"
                      value={selectedTopic.key}
                      onChange={handleChangeOnTopicInput}
                    >
                      <option className="option" value="-2">
                        Selecciona un tema después de elegir un nivel
                      </option>
                      <option className="option" value="-1">
                        Otros
                      </option>
                      <option className="option" value="0">
                        Aleatorio
                      </option>
                      {topicsByLevel.map((topicData: TopicType) => (
                        <option
                          className="option"
                          key={topicData.key}
                          value={topicData.key}
                        >
                          {topicData.name}
                        </option>
                      ))}
                    </Form.Select>
                    <br />
                    {/* Mostrar campo de texto solo si se selecciona "Otros" */}
                    {selectedTopic.key == -1 && (
                      <Form.Group controlId="otherTopicInput">
                        <Form.Control
                          type="text"
                          placeholder="Introduce el tema deseado"
                          value={selectedOtherTopic}
                          onChange={handleChangeOnOtherTopicInput}
                        />
                      </Form.Group>
                    )}
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
                          <Col xs="2">
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
