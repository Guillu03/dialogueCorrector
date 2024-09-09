import { useContext, useEffect } from "react";
import { UserDTO } from "../../dtos/UserDTO";
import useFirebaseDBModel from "../useFirebaseDBModel";
import { AlexaContext } from "../../../App";
import { useSelector } from "react-redux";
import { UserDBRootState } from "../../redux/slices/userDBSlice";

const useTest = () => {
  const userData = useSelector(
    (state: UserDBRootState) => state.userDBState.userData
  );

  const { addUserToFirebaseDB } = useFirebaseDBModel();

  /* App Context Data */
  const { printDebug } = useContext(AlexaContext);

  /**
   * Execution of the method on the first rendering and when dependencies upon the showLoadingIcon function are modified
   */
  useEffect(() => {
    const mockedUserData: UserDTO = {
      pseudonym: "Lola",
      userAnswersToInitialQuestionnaire: [
        {
          question: "¿Te sientes miserable o infeliz?",
          answer: "1",
        },
        {
          question: "¿Últimamente no disfrutas de absolutamente nada?",
          answer: "5",
        },
      ],
      messages: [
        {
          role: "system",
          content: `Quiero que actúes como un amigo que está conversando con un usuario. Con el objetivo de obtener respuestas más precisas y acertadas,
                    te voy a enviar todos los diálogos mantenidos con el usuario.`,
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
          content:
            "Sí, no tengo a mi familia cerca. Estoy encerrado en una residencia. Tampoco me gusta socializar mucho",
        },
        {
          role: "assistant",
          content:
            "Entiendo, puede ser difícil estar lejos de la familia, especialmente en momentos como este. Aunque no te guste socializar mucho, ¿has considerado participar en actividades en la residencia para conocer a otras personas? A veces encontramos conexiones inesperadas cuando estamos abiertos a nuevas experiencias.",
        },
        {
          role: "user",
          content:
            "Vale. ¿Qué actividades o pasatiempos crees que serían adecuadas para mi?",
        },
        {
          role: "assistant",
          content:
            "Hay muchas actividades que podrías probar, dependiendo de tus intereses. ¿Disfrutas de la lectura, o tal vez te gustaría probar algún tipo de arte o manualidad? También podrías explorar nuevas aficiones, como la jardinería, la cocina o la fotografía. Incluso ejercicios suaves, como yoga o caminatas, podrían ayudarte a sentirte mejor. ¿Alguna de estas opciones te llama la atención?",
        },
        {
          role: "user",
          content:
            "He probado varias de estas ideas y ninguna me ha hecho sentir mejor.",
        },
        {
          role: "system",
          content: `Me gustaría que me devolvieras tu análisis acerca del estado emocional de un usuario basándote en los diálogos anteriores. 
                    Necesito que las próximas respuestas que devuelvas al usuario tengan como objetivo ayudar al usuario en función de su estado emocional.`,
        },
        {
          role: "user",
          content: "Ya no recuerdo que solía hacer en el pasado.",
        },
      ],
      userAnswersToFinalQuestionnaire: [
        {
          question:
            "El robot entiende exactamente cómo me siento en las situaciones que experimento",
          answer: "2",
        },
        {
          question: "El robot me conoce a mí y mis necesidades",
          answer: "5",
        },
      ],
      gptAnswersToEmotionalQuestionnaire: [
        {
          question:
            "El robot entiende exactamente cómo me siento en las situaciones que experimento",
          answer: "1",
        },
        {
          question: "El robot me conoce a mí y mis necesidades",
          answer: "3",
        },
      ],
      gptAnswersToEmpathyQuestionnaire: [
        {
          question:
            "El robot entiende exactamente cómo me siento en las situaciones que experimento",
          answer: "1",
        },
        {
          question: "El robot me conoce a mí y mis necesidades",
          answer: "3",
        },
      ],
      timestamp: new Date().toLocaleString(),
    };

    // Testing function with userRequest and no conversations
    const testOne = async () => {
      let userDataUpdated = { ...userData };
      userDataUpdated.timestamp = new Date().toLocaleString();

      printDebug(`userDataUpdated - ${JSON.stringify(userDataUpdated)}`);

      const docRef1 = await addUserToFirebaseDB(mockedUserData);
      printDebug(`docRef - ${docRef1}`);

      /*
      const docRef2 = await addUserToFirebaseDB(mockedUserData);
      printDebug(`docRef - ${docRef2}`);
      */
    };

    //testOne();
  }, []);
};

export default useTest;
