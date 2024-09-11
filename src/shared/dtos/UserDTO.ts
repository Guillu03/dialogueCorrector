import { DocumentData, DocumentReference } from "firebase/firestore";
import { OpenAIMessageDTO } from "./OpenAIDTO";

export interface UserDTO {
  docRef?: DocumentReference<DocumentData, DocumentData> | null; // docRef for the user document
  pseudonym: string;
  age: number;
  languageName: string;
  levelName: string;
  messages: OpenAIMessageDTO[];
  timestamp: string;
}
