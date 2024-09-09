import { useContext } from "react";
import { OpenAIMessageDTO } from "../../../shared/dtos/OpenAIDTO";
import useMessages from "../hooks/useMessages";
import { AlexaContext } from "../../../App";

const useUserEmotionalAnalysis = () => {
  // Custom and React Hooks
  const {
    getResponseToNewSystemMessageWithoutUpdatingTokens,
    addMessageToDB,
    addUserMessageAndUpdateTokens,
  } = useMessages();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  const handleUserEmotionalAnalysis = async (
    _messages: OpenAIMessageDTO[]
  ): Promise<string> => {
    if (isTimeToMakeUserEmotionalAnalysis(_messages)) {
      const userEmotion = await getUserEmotionalAnalysis(_messages);

      return userEmotion;
    }
    return "";
  };

  const isTimeToMakeUserEmotionalAnalysis = (_messages: OpenAIMessageDTO[]) => {
    printDebug(
      `+++ isTimeToMakeUserEmotionalAnalysis() - updatedNumberOfMessages => ${JSON.stringify(
        getNumberOfMessagesWithRoleUser(_messages)
      )} `
    );

    if (
      getNumberOfMessagesWithRoleUser(_messages) > 0 &&
      getNumberOfMessagesWithRoleUser(_messages) % 3 === 0
    ) {
      return true;
    }

    return false;
  };

  const getNumberOfMessagesWithRoleUser = (_messages: OpenAIMessageDTO[]) => {
    // Filtrar mensajes que tienen role "user".
    const userMessages = _messages.filter((message) => message.role === "user");
    return userMessages.length;
  };

  const getUserEmotionalAnalysis = async (
    _messages: OpenAIMessageDTO[]
  ): Promise<string> => {
    const copyOfResetMessages = [..._messages];
    const systemMessageContent = `
      En base a la información anterior proporcionada, que puede ser, o bien, 
      toda la conversación mantenida con el usuario, o bien, un resumen de la conversación mantenida con dicho usuario, 
      analiza dicha información y devuelve el resultado del análisis emocional del usuario 
      y la emoción que más se adecúa al usuario en base a la conversación analizada.

      Responde únicamente con el siguiente JSON con la información solicitada y sin ningún texto adicional:

      {
        "emotionalAnalysisSummary": "<resultadoAnálisisEmocional>", 
        "emotion": "<triste | alegre | aburrido | deprimido | enfadado | frustrado | disgustado | asustado | sorprendido>"
      }
    `;

    const artificialIntelligenceResponse =
      await getResponseToNewSystemMessageWithoutUpdatingTokens(
        systemMessageContent,
        copyOfResetMessages
      );

    const responseObject = JSON.parse(artificialIntelligenceResponse);

    printDebug(
      `+++ getUserEmotionalAnalysis() - responseObject => ${JSON.stringify(
        responseObject
      )} `
    );
    printDebug(
      `+++ getUserEmotionalAnalysis() - emotion => ${responseObject.emotion} `
    );

    await addMessageToDB("assistant", responseObject.emotionalAnalysisSummary);

    return responseObject.emotion;
  };

  return {
    handleUserEmotionalAnalysis,
    addUserMessageAndUpdateTokens,
    getUserEmotionalAnalysis,
  };
};

export default useUserEmotionalAnalysis;
