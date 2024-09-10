import { useContext } from "react";
import { greetings } from "../constants/greetings";
import { LANGUAGES } from "../constants/languages";
import { LanguageCode } from "../types/languageCode";
import { AlexaContext } from "../../App";
import { LEVELS } from "../constants/levels";

const useLanguage = () => {
  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  const getGreetings = (_languageCode: LanguageCode) => {
    return greetings[_languageCode];
  };

  const getGreetingsWithSSML = (_languageCode: LanguageCode) => {
    const message = greetings[_languageCode];

    return message;
  };

  const getLanguageObjectByCode = (_languageCode: LanguageCode) => {
    return LANGUAGES.find((language) => language.code === _languageCode);
  };

  const getLanguageLevelObjectByKey = (_levelKey: number) => {
    return LEVELS.find((level) => level.key === _levelKey);
  };

  return {
    getGreetings,
    getGreetingsWithSSML,
    getLanguageObjectByCode,
    getLanguageLevelObjectByKey,
  };
};
export default useLanguage;
