import { DocumentData, DocumentReference } from "firebase/firestore";
import { OpenAIMessageDTO } from "./OpenAIDTO";
import { QuestionDTO } from "./QuestionDTO";

export interface UserDTO {
  docRef?: DocumentReference<DocumentData, DocumentData> | null; // docRef for the user document
  pseudonym: string;
  messages: OpenAIMessageDTO[];
  userAnswersToInitialQuestionnaire: QuestionDTO[];
  userAnswersToFinalQuestionnaire: QuestionDTO[];
  gptAnswersToEmotionalQuestionnaire: QuestionDTO[];
  gptAnswersToEmpathyQuestionnaire: QuestionDTO[];
  timestamp: string;
}
