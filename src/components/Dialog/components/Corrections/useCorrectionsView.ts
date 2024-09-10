import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserDBRootState } from "../../../../shared/redux/slices/userDBSlice";
import useMessages from "../../hooks/useMessages";
import useLanguage from "../../../../shared/hooks/useLanguage";
import { AlexaContext } from "../../../../App";
import { OpenAIMessageDTO } from "../../../../shared/dtos/OpenAIDTO";
import { LanguageRootState } from "../../../../shared/redux/slices/languageSlice";

const useCorrectionsView = (
  messages: OpenAIMessageDTO[],
  setSeeCorrectionsEnabled: any
) => {
  //Local variables
  const [corrections, setCorrections] = useState<any>();
  const [messagesSufficientForCorrection, setMessagesSufficientForCorrection] =
    useState<boolean>(false);

  // Global variables
  const languageKey = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.languageKey
  );
  const levelKey = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.levelKey
  );

  // Custom and React Hooks
  const { getResponseToNewSystemMessageWithoutUpdatingTokens, addMessageToDB } =
    useMessages();
  const { getLanguageObjectByKey, getLanguageLevelObjectByKey } = useLanguage();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  const getUserCorrections = async (
    _messages: OpenAIMessageDTO[]
  ): Promise<string> => {
    const copyOfResetMessages = [..._messages];
    const systemMessageContent = `
      En base a una conversación mantenida con el usuario en el idioma ${
        getLanguageObjectByKey(languageKey)?.name
      } y el nivel ${getLanguageLevelObjectByKey(levelKey)?.name}.
      Necesito que realices una corrección de las entradas del usuario del siguiente diálogo ${_messages}. 
      Deberás separar por categorías los errores más importantes cometidos por el usuario durante la conversación. 
      Para cada error detectado, deberás devolver la categoría de error cometido, la frase del usuario completa con el error cometido, 
      una explicación del error cometido y un ejemplo de cómo sería la frase corregida. 

      Responde únicamente con el siguiente JSON con la información solicitada y sin ningún texto adicional:
      {
        "corrections": [
          {
            "category": "<categoría>",
            "error": "<error>",
            "explanation": "<explanation>",
            "correction": "<correction>",
          }
          // Aquí deben ir los demás objetos correspondientes a los errores detectados
        ]
      }

      En el caso en el que no hayas detectado ningún error en los mensajes deberás devolver el array "corrections" vacío.
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
      `+++ getUserEmotionalAnalysis() - emotion => ${JSON.stringify(
        responseObject.corrections
      )} `
    );

    await addMessageToDB(
      "assistant",
      JSON.stringify(responseObject.corrections)
    );

    return responseObject.corrections;
  };

  useEffect(() => {
    const fetchCorrections = async () => {
      try {
        if (getNumberOfMessagesWithRoleUser(messages) > 4) {
          setMessagesSufficientForCorrection(true);
          const retrievedCorrections = await getUserCorrections(messages);
          setCorrections(retrievedCorrections);
        } else {
          setMessagesSufficientForCorrection(false);
        }
      } catch (error) {
        console.error("Error fetching corrections:", error);
      }
    };

    fetchCorrections();
  }, [messages, languageKey]);

  const getNumberOfMessagesWithRoleUser = (_messages: OpenAIMessageDTO[]) => {
    // Filtrar mensajes que tienen role "user".
    const userMessages = _messages.filter((message) => message.role === "user");
    return userMessages.length;
  };

  useEffect(() => {
    // Función de limpieza para ejecutar al desmontar el componente
    return () => {
      printDebug("CORRECTIONS DISABLED");
      setSeeCorrectionsEnabled(false);
    };
  }, [setSeeCorrectionsEnabled]);

  return {
    corrections,
    messagesSufficientForCorrection,
  };
};

export default useCorrectionsView;
