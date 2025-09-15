import { useContext } from "react";
import { greetings } from "../constants/greetings";
import { LANGUAGES } from "../constants/languages";
import { AlexaContext } from "../../App";
import { LEVELS } from "../constants/levels";
import { TOPICS } from "../constants/topics";

const useLanguage = () => {
  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  const getGreetings = (_languageKey: number) => {
    // return greetings[_languageKey];
    return "";
  };

  const getGreetingsWithSSML = (_languageKey: number) => {
    // const message = greetings[_languageKey];

    // return message;
    return "";
  };

  const getLanguageObjectByKey = (_languageKey: number) => {
    return LANGUAGES.find((language) => language.key == _languageKey);
  };

  const getLanguageLevelObjectByKey = (_level: string) => {
    return LEVELS[_level];
  };

  const getLanguageTopicObjectByKey = (_level: string, _topicKey: number) => {
    return TOPICS[_level].find((topic) => topic.key == _topicKey);
  };

  return {
    getGreetings,
    getGreetingsWithSSML,
    getLanguageObjectByKey,
    getLanguageLevelObjectByKey,
    getLanguageTopicObjectByKey,
  };
};
export default useLanguage;
