import { DocumentData, DocumentReference } from "firebase/firestore";
import { OpenAIMessageDTO } from "./OpenAIDTO";
import { LanguageCode } from "../types/languageCode";

export interface UserDTO {
  docRef?: DocumentReference<DocumentData, DocumentData> | null; // docRef for the user document
  pseudonym: string;
  language: LanguageCode;
  messages: OpenAIMessageDTO[];
  timestamp: string;
}
