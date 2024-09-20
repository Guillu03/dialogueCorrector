import { LevelType } from "../constants/levels";
import { TopicType } from "../constants/topics";

export interface LanguageDTO {
  languageKey: number;
  levelObject: LevelType;
  topicObject: TopicType;
}
