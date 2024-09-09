import { useContext, useEffect, useState } from "react";
import { QuestionDTO } from "../../../shared/dtos/QuestionDTO";
import {
  emotionalStateQuestionsToGPTAfterUsingSystem,
  emotionalStateQuestionsToUserAfterUsingSystem,
  emotionalStateQuestionsToUserBeforeUsingSystem,
} from "../../../shared/constants/emotionalQuestionnaires";
import {
  empathyStateQuestionsToGPTAfterUsingSystem,
  empathyStateQuestionsToUserAfterUsingSystem,
} from "../../../shared/constants/empathyQuestionnaires";
import { AlexaContext } from "../../../App";
import useSpeechResponse from "./useSpeechResponse";
import useMessages from "../hooks/useMessages";
import { OpenAIMessageDTO } from "../../../shared/dtos/OpenAIDTO";
import { useDispatch, useSelector } from "react-redux";
import {
  OpenAIRootState,
  resetOpenAIState,
} from "../../../shared/redux/slices/openAISlice";
import useFirebaseDBModel from "../../../shared/hooks/useFirebaseDBModel";

const useQuestionnaire = (_setIsDialogBlocked: any) => {
  // Global Variables
  const messages = useSelector(
    (state: OpenAIRootState) => state.openAIState.messages
  );

  // Local Variables
  const [hasQuestionnaireStarted, setHasQuestionnaireStarted] =
    useState<boolean>(false);
  const [indexOfQuestion, setIndexOfQuestion] = useState<number>(0);
  const [questionnaireType, setQuestionnaireType] = useState<string>(
    "INITIAL" || "FINAL"
  );

  const [gptEmpathyQuestionnaire, setGptEmpathyQuestionnaire] = useState(
    empathyStateQuestionsToGPTAfterUsingSystem
  );
  const [gptEmotionalQuestionnaire, setGptEmotionalQuestionnaire] = useState(
    emotionalStateQuestionsToGPTAfterUsingSystem
  );
  const [userQuestionnaire, setUserQuestionnaire] = useState<QuestionDTO[]>([]);

  // Custom and React Hooks
  const dispatch = useDispatch();
  const { speechResponseToUserRequest } = useSpeechResponse();
  const { getResponseToNewSystemMessageWithoutUpdatingTokens } = useMessages();
  const {
    addUserAnswersToInitialQuestionnaireToFirebaseDB,
    addUserAnswersToFinalQuestionnaireToFirebaseDB,
    addGPTAnswersToEmotionalQuestionnaireToFirebaseDB,
    addGPTAnswersToEmpathyQuestionnaireToFirebaseDB,
  } = useFirebaseDBModel();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  const handleStartInitialQuestionnaire = () => {
    resetQuestionIndex();
    resetQuestionnairesAnswers();
    dispatch(resetOpenAIState());
    setHasQuestionnaireStarted(true);
    setQuestionnaireType("INITIAL");
    setUserQuestionnaire(emotionalStateQuestionsToUserBeforeUsingSystem);
    speechResponseToUserRequest(
      "¡Vamos a comenzar!" +
        emotionalStateQuestionsToUserBeforeUsingSystem[0].question
    );
  };

  const handleStartFinalQuestionnaire = () => {
    resetQuestionIndex();
    resetQuestionnairesAnswers();
    setHasQuestionnaireStarted(true);
    setQuestionnaireType("FINAL");
    setUserQuestionnaire(
      emotionalStateQuestionsToUserAfterUsingSystem.concat(
        empathyStateQuestionsToUserAfterUsingSystem
      )
    );
    speechResponseToUserRequest(
      "¡Vamos a comenzar!" +
        empathyStateQuestionsToUserAfterUsingSystem[0].question
    );
  };

  const handleAnswerToQuestionnaire = async (_userRequest: string) => {
    if (isUserAnswerToQuestionnaireValid(_userRequest)) {
      const updatedQuestions = registerUserAnswerToQuestion(_userRequest);
      printDebug(
        `+++ Inside handleAnswerToQuestionnaire - updatedQuestions before 1 => ${JSON.stringify(
          updatedQuestions
        )} `
      );

      const updatedQuestionIndex = incrementQuestionIndex();
      printDebug(
        `+++ Inside handleAnswerToQuestionnaire - updatedQuestionIndex value after => ${updatedQuestionIndex} `
      );

      if (updatedQuestions.length > 0) {
        if (isTheLastQuestion(updatedQuestionIndex, updatedQuestions)) {
          await endQuestionnaire(messages, updatedQuestions);
        } else {
          speechResponseToUserRequest(
            updatedQuestions[updatedQuestionIndex].question
          );
        }
      } else {
        printDebug("Error: updatedQuestions is empty");
      }
    } else {
      speechResponseToUserRequest(
        `Tu respuesta no es válida. Recuerda que solamente puedes decir un número comprendido entre el 1 y el 5. 
         También puedes decir si o no, si no estas seguro de qué número escoger.`
      );
    }
  };

  const isUserAnswerToQuestionnaireValid = (_userAnswer: string) => {
    const possibleLikertAnswers = new Set([
      "1",
      "2",
      "3",
      "4",
      "5",
      "si",
      "no",
    ]);

    if (possibleLikertAnswers.has(_userAnswer)) {
      return true;
    }

    return false;
  };

  const registerUserAnswerToQuestion = (_userRequest: string) => {
    printDebug(
      `+++ Inside registerUserAnswerToQuestion - questionnaireType before => ${questionnaireType} `
    );
    printDebug(
      `+++ Inside registerUserAnswerToQuestion - indexOfQuestion before => ${indexOfQuestion} `
    );
    printDebug(
      `+++ Inside registerUserAnswerToQuestion - _userRequest before => ${_userRequest} `
    );

    const likertNumber = getLikertNumber(_userRequest);

    if (userQuestionnaire) {
      const questions = [...userQuestionnaire];
      questions[indexOfQuestion] = {
        ...questions[indexOfQuestion],
        answer: likertNumber,
      };
      setUserQuestionnaire(questions);

      printDebug(
        `+++ Inside registerUserAnswerToQuestion - userQuestionnaire before => ${JSON.stringify(
          questions
        )} `
      );

      return questions;
    } else {
      printDebug("Error: could not registerUserAnswerToQuestion");
    }

    return [];
  };

  const getLikertNumber = (_userAnswer: string): string => {
    if (_userAnswer === "si") {
      return "4"; // De acuerdo
    } else if (_userAnswer === "no") {
      return "2"; // En desacuerdo
    }

    return _userAnswer;
  };

  const incrementQuestionIndex = () => {
    let updatedQuestionIndex: number = indexOfQuestion + 1;
    setIndexOfQuestion(updatedQuestionIndex);

    return updatedQuestionIndex;
  };

  const isTheLastQuestion = (
    _questionIndex: number,
    _updatedQuestions: QuestionDTO[]
  ) => {
    return _questionIndex >= _updatedQuestions.length;
  };

  const endQuestionnaire = async (
    _messages: OpenAIMessageDTO[],
    _updatedQuestions: QuestionDTO[]
  ) => {
    printDebug(
      `+++ Inside endQuestionnaire - _updatedQuestions value => ${JSON.stringify(
        _updatedQuestions
      )} `
    );

    setHasQuestionnaireStarted(false);
    resetQuestionIndex();
    resetQuestionnairesAnswers();
    dispatch(resetOpenAIState());

    _setIsDialogBlocked(true);
    await handleQuestionnaireAnswers(_messages, _updatedQuestions);
    _setIsDialogBlocked(false);
  };

  const resetQuestionIndex = () => {
    setIndexOfQuestion(0);
  };

  const resetQuestionnairesAnswers = () => {
    setUserQuestionnaire([]);
    setGptEmpathyQuestionnaire([...empathyStateQuestionsToGPTAfterUsingSystem]);
    setGptEmotionalQuestionnaire([
      ...emotionalStateQuestionsToGPTAfterUsingSystem,
    ]);
  };

  const handleQuestionnaireAnswers = async (
    _messages: OpenAIMessageDTO[],
    _updatedQuestions: QuestionDTO[]
  ) => {
    if (_updatedQuestions.length > 0) {
      if (questionnaireType === "INITIAL") {
        // Guardar cuestionario en BD
        await addUserAnswersToInitialQuestionnaireToFirebaseDB(
          _updatedQuestions
        );
        speechResponseToUserRequest(
          "El cuestionario ha finalizado y la información ha sido registrada. ¿Qué es lo que te gustaría decirme?",
          "time-for-general-requests"
        );
      } else if (questionnaireType === "FINAL") {
        // Guardar cuestionario en BD
        await addUserAnswersToFinalQuestionnaireToFirebaseDB(_updatedQuestions);
        speechResponseToUserRequest(
          "El cuestionario ha finalizado. Voy a registrar tus respuestas. Por favor, espere.",
          "no-reprompt"
        );
      }
    } else {
      printDebug("Error: could not setUserAnswersToFinalQuestionnaire");
    }
  };

  const handleGPTAnswersToEmpathyQuestionnaire = async () => {
    printDebug(
      `+++ Inside handleGPTAnswersToEmpathyQuestionnaire - messages[0] => ${messages[0]}`
    );
    _setIsDialogBlocked(true);
    await sendQuestionnaireToAIForAutocompletion(
      messages,
      gptEmpathyQuestionnaire,
      "EMPATHY"
    );
    speechResponseToUserRequest(
      "La información ha sido registrada. ¿Qué es lo que te gustaría decirme?",
      "time-for-general-requests"
    );
    _setIsDialogBlocked(false);
  };

  const handleGPTAnswersToEmotionalQuestionnaire = async () => {
    printDebug(
      `+++ Inside handleGPTAnswersToEmpathyQuestionnaire - messages[0] => ${messages[0]}`
    );
    _setIsDialogBlocked(true);
    await sendQuestionnaireToAIForAutocompletion(
      messages,
      gptEmotionalQuestionnaire,
      "EMOTIONAL"
    );
    speechResponseToUserRequest(
      "La información ha sido registrada. ¿Qué es lo que te gustaría decirme?",
      "time-for-general-requests"
    );
    _setIsDialogBlocked(false);
  };

  const sendQuestionnaireToAIForAutocompletion = async (
    _messages: OpenAIMessageDTO[],
    _questionnaire: QuestionDTO[],
    _questionnaireType: string
  ) => {
    //Enviar cuestionario a GPT para completar automáticamente en base a las respuestas recogidas por el usuario
    const questionnaireCompletedByAI =
      await getQuestionnaireCompletedByAIWithLikertScale(
        _messages,
        _questionnaire
      );

    printDebug(
      `+++ Inside endQuestionnaire -  questionnaireCompletedByAI => ${questionnaireCompletedByAI}`
    );

    const questionnaireObject = getQuestionnaireObject(
      questionnaireCompletedByAI
    );
    // Guardar cuestionario en BD
    if (_questionnaireType === "EMPATHY") {
      await addGPTAnswersToEmpathyQuestionnaireToFirebaseDB(
        questionnaireObject
      );
    } else if (_questionnaireType === "EMOTIONAL") {
      await addGPTAnswersToEmotionalQuestionnaireToFirebaseDB(
        questionnaireObject
      );
    }

    printDebug(
      `+++ Inside endQuestionnaire -  questionnaireObject => ${JSON.stringify(
        questionnaireObject
      )}`
    );
  };

  const getQuestionnaireCompletedByAIWithLikertScale = async (
    _messages: OpenAIMessageDTO[],
    _questionnaire: QuestionDTO[]
  ) => {
    const systemMessageContent = `Voy a enviarte un cuestionario que deberás completar según la información recogida en los mensajes que te voy a pasar.
    Dichos mensajes podrán ser las respuestas que te ha proporcionado el usuario a lo largo de la conversación completa, o bien, 
    el resumen de la conversación que has mantenido con el usuario.
    Deberás analizar la información que te he pasado y completar el cuestionario utilizando para ello la escala Liker. Es decir, para cada cuestión
    deberás devolver como respuesta un número del 1 al 5, donde 1 significa que estas totalmente en desacuerdo con la cuestión, y 5 significa que 
    estás totalmente de acuerdo con la cuestión. 
    No olvides que la puntuación deberá depender de la información que has extraído de la conversación mantenida con el usuario.
    El cuestionario es el siguiente: ${JSON.stringify(_questionnaire)}. 
    Deberás devolverme un JSON con el siguiente formato:
    {"results": [{"question": <pregunta del cuestionario>, "answer": <tu puntuación>}]} 
    donde se recogan las preguntas y las respuestas que has proporcionado para cada pregunta.
    Recuerda que solamente me debes devolver tus puntuaciones a las preguntas que te he pasado."`;

    const copyOfMessages: OpenAIMessageDTO[] = [..._messages];

    const artificialIntelligenceResponse =
      await getResponseToNewSystemMessageWithoutUpdatingTokens(
        systemMessageContent,
        copyOfMessages
      );

    printDebug(
      `+++ Inside getQuestionnaireCompletedByAI -  copyOfMessages => ${JSON.stringify(
        copyOfMessages
      )}`
    );

    return artificialIntelligenceResponse;
  };

  const getQuestionnaireObject = (_questionnaireString: string) => {
    const questionnaireObject = JSON.parse(_questionnaireString);

    const questionnaireDTO: QuestionDTO[] = questionnaireObject.results.map(
      (questionDTO: QuestionDTO) => ({
        question: questionDTO.question,
        answer: questionDTO.answer,
      })
    );

    return questionnaireDTO;
  };

  return {
    hasQuestionnaireStarted,
    setHasQuestionnaireStarted,
    handleStartInitialQuestionnaire,
    handleStartFinalQuestionnaire,
    handleAnswerToQuestionnaire,
    handleGPTAnswersToEmpathyQuestionnaire,
    handleGPTAnswersToEmotionalQuestionnaire,
    getQuestionnaireCompletedByAIWithLikertScale, // FOR TEST,
    endQuestionnaire, // FOR TEST
    getQuestionnaireObject, // FOR TEST
  };
};

export default useQuestionnaire;
