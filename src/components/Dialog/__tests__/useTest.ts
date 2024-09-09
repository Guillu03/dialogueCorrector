import { useContext, useEffect, useState } from "react";
import { AlexaContext } from "../../../App";
import useQuestionnaire from "../hooks/useQuestionnaire";
import useUserGeneralInput from "../hooks/useUserGeneralInput";
import useMessages from "../hooks/useMessages";
import { useDispatch, useSelector } from "react-redux";
import {
  OpenAIRootState,
  setMessages,
} from "../../../shared/redux/slices/openAISlice";
import { OpenAIMessageDTO } from "../../../shared/dtos/OpenAIDTO";
import { QuestionDTO } from "../../../shared/dtos/QuestionDTO";
import useUserEmotionalAnalysis from "../hooks/useUserEmotionalAnalysis";
import useOpenAI from "../../../api/open-ai/useOpenAI";

const useTest = () => {
  // Global Variables
  const messages = useSelector(
    (state: OpenAIRootState) => state.openAIState.messages
  );

  // Local variables
  const [isDialogBlocked, setIsDialogBlocked] = useState<boolean>(false);
  const {
    getQuestionnaireCompletedByAIWithLikertScale,
    endQuestionnaire,
    getQuestionnaireObject,
  } = useQuestionnaire(setIsDialogBlocked);
  const { getResponseToUserRequest } = useUserGeneralInput();
  const { askGPT } = useOpenAI();
  const { getUserEmotionalAnalysis } = useUserEmotionalAnalysis();

  /* App Context Data */
  const { printDebug } = useContext(AlexaContext);
  const dispatch = useDispatch();

  /**
   * Execution of the method on the first rendering and when dependencies upon the showLoadingIcon function are modified
   */
  useEffect(() => {
    // Testing function with userRequest and no conversations
    const testOne = async () => {
      const artificialIntelligenceSummary =
        await getQuestionnaireCompletedByAIWithLikertScale(messages, []);
    };

    //testOne();
  }, []);

  /**
   * Execution of the method on the first rendering and when dependencies upon the showLoadingIcon function are modified
   */
  useEffect(() => {
    const mockedUserRequest1: string = "me siento solo";
    const mockedMessages: OpenAIMessageDTO[] = [
      {
        role: "system",
        content: `Quiero que actúes como un psicólogo que está conversando con un usuario.`,
      },
      {
        role: "user",
        content: "me siento solo",
      },
      {
        role: "assistant",
        content:
          "Lamento escuchar eso. ¿Te gustaría hablar un poco más sobre lo que estás sintiendo? A veces, compartir lo que nos preocupa puede aliviar un poco la carga.",
      },
    ];
    const mockedUpdatedQuestionnaire: QuestionDTO[] = [
      {
        question: "",
        answer: "",
      },
    ];

    // Testing function with userRequest and no conversations
    const testOne = async () => {
      const artificialIntelligenceSummary1 = await endQuestionnaire(
        mockedMessages,
        mockedUpdatedQuestionnaire
      );
    };

    //testOne();
  }, []);

  /**
   * Execution of the method on the first rendering and when dependencies upon the showLoadingIcon function are modified
   */
  useEffect(() => {
    const empathyStateQuestionsToGPTAfterUsingSystem = [
      {
        question:
          "El sistema entiende exactamente cómo se siente el usuario en las situaciones que experimenta",
        answer: "<introduce tu valoración>",
      },
      {
        question: "El sistema conoce al usuario y sus necesidades",
        answer: "<introduce tu valoración>",
      },
    ];

    // Testing function with userRequest and no conversations
    const testOne = async () => {
      const questionnaireObject = getQuestionnaireObject(
        JSON.stringify(empathyStateQuestionsToGPTAfterUsingSystem)
      );

      printDebug("questionnaireObject => " + questionnaireObject);
    };

    //testOne();
  }, []);

  /**
   * Execution of the method on the first rendering and when dependencies upon the showLoadingIcon function are modified
   */
  useEffect(() => {
    const testOne = async () => {
      const mockedMessages: OpenAIMessageDTO[] = [
        {
          role: "system",
          content: `Quiero que actúes como un psicólogo que está conversando con un usuario.`,
        },
        {
          role: "user",
          content: "me siento solo",
        },
        {
          role: "assistant",
          content:
            "Lamento escuchar eso. ¿Te gustaría hablar un poco más sobre lo que estás sintiendo? A veces, compartir lo que nos preocupa puede aliviar un poco la carga.",
        },
      ];

      const response1 = await askGPT(mockedMessages);
      printDebug("response1 => " + response1);
      const response2 = await askGPT(mockedMessages);
      printDebug("response2 => " + response2);
      const response3 = await askGPT(mockedMessages);
      printDebug("response3 => " + response3);
    };

    //testOne();
  }, []);

  /**
   * Execution of the method on the first rendering and when dependencies upon the showLoadingIcon function are modified
   */
  useEffect(() => {
    const mockedUserRequest1: string = "no conozco a nadie";
    const mockedMessages: OpenAIMessageDTO[] = [
      {
        role: "system",
        content: `Quiero que actúes como un psicólogo que está conversando con un usuario.`,
      },
      {
        role: "user",
        content: "me siento solo",
      },
      {
        role: "assistant",
        content:
          "Lamento escuchar eso. ¿Te gustaría hablar un poco más sobre lo que estás sintiendo? A veces, compartir lo que nos preocupa puede aliviar un poco la carga.",
      },
      {
        role: "user",
        content: "estoy encerrado en una residencia",
      },
      {
        role: "assistant",
        content:
          "Entiendo, estar en una residencia puede ser difícil, especialmente por la sensación de aislamiento. ¿Hay algo específico que te gustaría hablar sobre cómo te sientes en ese entorno?",
      },
      {
        role: "user",
        content: "no tengo a nadie con quien hablar",
      },
    ];

    // Testing function with userRequest and no conversations
    const testOne = async () => {
      const artificialIntelligenceSummary1 = await getUserEmotionalAnalysis(
        mockedMessages
      );
    };

    //testOne();
  }, []);
};

export default useTest;
