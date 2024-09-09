import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserDBRootState } from "../../../../shared/redux/slices/userDBSlice";
import useMessages from "../../hooks/useMessages";
import useLanguage from "../../../../shared/hooks/useLanguage";
import { AlexaContext } from "../../../../App";
import { OpenAIMessageDTO } from "../../../../shared/dtos/OpenAIDTO";

const useCorrectionsView = (
  messages: OpenAIMessageDTO[],
  setSeeCorrectionsEnabled: any
) => {
  //Local variables
  const [corrections, setCorrections] = useState<string>("");

  // Global variables
  const userLanguageCode = useSelector(
    (state: UserDBRootState) => state.userDBState.userData.language
  );

  // Custom and React Hooks
  const { getResponseToNewSystemMessageWithoutUpdatingTokens, addMessageToDB } =
    useMessages();
  const { getLanguageObjectByCode } = useLanguage();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  const getUserCorrections = async (
    _messages: OpenAIMessageDTO[]
  ): Promise<string> => {
    const copyOfResetMessages = [..._messages];
    const systemMessageContent = `
      En base a la siguiente conversación mantenida con el usuario en el idioma ${
        getLanguageObjectByCode(userLanguageCode)?.name
      } 
      Necesito que realices una corrección de las entradas del usuario. Separando por categorías
      los errores más importantes cometidos por el usuario durante la conversación. Para cada error detectado,
      deberás ofrecer una explicación del error cometido y un ejemplo de cómo sería la frase correcta. 

      Responde únicamente con el siguiente JSON con la información solicitada y sin ningún texto adicional:
      {
        "corrections": <correccionesRealizadas>
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
      `+++ getUserEmotionalAnalysis() - emotion => ${JSON.stringify(
        responseObject.corrections
      )} `
    );

    await addMessageToDB(
      "assistant",
      JSON.stringify(responseObject.corrections)
    );

    return JSON.stringify(responseObject.corrections);
  };

  useEffect(() => {
    const fetchCorrections = async () => {
      try {
        const retrievedCorrections = await getUserCorrections(messages);
        setCorrections(retrievedCorrections);
      } catch (error) {
        console.error("Error fetching corrections:", error);
      }
    };

    fetchCorrections();
  }, [messages, userLanguageCode]);

  useEffect(() => {
    // Función de limpieza para ejecutar al desmontar el componente
    return () => {
      printDebug("CORRECTIONS DISABLED");
      setSeeCorrectionsEnabled(false);
    };
  }, [setSeeCorrectionsEnabled]);

  return {
    corrections,
  };
};

export default useCorrectionsView;
