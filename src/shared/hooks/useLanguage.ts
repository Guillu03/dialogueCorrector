import { useContext } from "react";
import { greetings } from "../constants/greetings";
import { LANGUAGES } from "../constants/languages";
import { AlexaContext } from "../../App";
import { LEVELS } from "../constants/levels";

const useLanguage = () => {
  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  const getGreetings = (_languageKey: number) => {
    return greetings[_languageKey];
  };

  const getGreetingsWithSSML = (_languageKey: number) => {
    const message = greetings[_languageKey];

    return message;
  };

  const getLanguageObjectByKey = (_languageKey: number) => {
    return LANGUAGES.find((language) => language.key == _languageKey);
  };

  const getLanguageLevelObjectByKey = (_levelKey: number) => {
    return LEVELS.find((level) => level.key == _levelKey);
  };

  return {
    getGreetings,
    getGreetingsWithSSML,
    getLanguageObjectByKey,
    getLanguageLevelObjectByKey,
  };
};
export default useLanguage;
