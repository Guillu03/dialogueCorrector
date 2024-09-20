import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMessages from "../../hooks/useMessages";
import useLanguage from "../../../../shared/hooks/useLanguage";
import { AlexaContext } from "../../../../App";
import { OpenAIMessageDTO } from "../../../../shared/dtos/OpenAIDTO";
import { LanguageRootState } from "../../../../shared/redux/slices/languageSlice";
import { resetOpenAIState } from "../../../../shared/redux/slices/openAISlice";
import { resetUserData } from "../../../../shared/redux/slices/userDBSlice";

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
  const level = useSelector(
    (state: LanguageRootState) => state.languageState.languageData.level
  );

  // Custom and React Hooks
  const { getResponseToNewSystemMessageWithoutUpdatingTokens, addMessageToDB } =
    useMessages();
  const { getLanguageObjectByKey, getLanguageLevelObjectByKey } = useLanguage();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);
  const dispatch = useDispatch();

  const getUserCorrections = async (
    _messages: OpenAIMessageDTO[]
  ): Promise<string> => {
    const copyOfResetMessages = [..._messages];
    const systemMessageContent = `
      En base a una conversación mantenida con el usuario en el idioma ${
        getLanguageObjectByKey(languageKey)?.name
      } y el nivel ${level} - ${getLanguageLevelObjectByKey(level).name}.
      Necesito que realices una corrección de las entradas del usuario del siguiente diálogo ${_messages}. 
      Necesito que corrijas todas las entradas del usuario, teniendo en cuenta que el idioma hablado ha sido el  ${
        getLanguageObjectByKey(languageKey)?.name
      }.
      Deberás separar por categorías los errores más importantes cometidos por el usuario durante la conversación. 
      Para cada error detectado, deberás devolver la categoría de error cometido, la frase del usuario completa con el error cometido, 
      una explicación del error cometido y un ejemplo de cómo sería la frase corregida. 

      Deberás responder siempre con el siguiente JSON con la información solicitada y sin ningún otro texto adicional:
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

    printDebug("BEFORE CORRECTIONS RESPONSE");

    const artificialIntelligenceResponse =
      await getResponseToNewSystemMessageWithoutUpdatingTokens(
        systemMessageContent,
        copyOfResetMessages
      );

    printDebug(
      "AFTER CORRECTIONS RESPONSE => " +
        JSON.stringify(artificialIntelligenceResponse)
    );

    await addMessageToDB("assistant", artificialIntelligenceResponse);

    const responseObject = JSON.parse(artificialIntelligenceResponse);

    printDebug(
      `+++ getUserCorrections() - responseObject => ${JSON.stringify(
        _messages
      )} `
    );

    return responseObject.corrections;
  };

  useEffect(() => {
    const fetchCorrections = async () => {
      try {
        const userMessages = getNumberOfMessagesWithRoleUser(messages);
        printDebug("userMessages => " + userMessages);
        if (userMessages.length > 3) {
          setMessagesSufficientForCorrection(true);
          const retrievedCorrections = await getUserCorrections(userMessages);
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
    return userMessages;
  };

  useEffect(() => {
    // Función de limpieza para ejecutar al desmontar el componente
    return () => {
      printDebug("CORRECTIONS DISABLED");
      dispatch(resetOpenAIState());
      dispatch(resetUserData());
      setSeeCorrectionsEnabled(false);
    };
  }, [setSeeCorrectionsEnabled]);

  return {
    corrections,
    messagesSufficientForCorrection,
  };
};

export default useCorrectionsView;
