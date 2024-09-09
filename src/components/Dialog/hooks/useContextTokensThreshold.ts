import { useContext } from "react";
import { encoding_for_model } from "tiktoken";
import { AlexaContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import {
  OpenAIRootState,
  incrementTotalTokensWith,
  resetTotalTokens,
} from "../../../shared/redux/slices/openAISlice";

const useContextTokensThreshold = () => {
  // Constant Variables
  const MESSAGES_TOKENS_THRESHOLD: number = 12000;

  // Global Variables
  const contextTokensTotal = useSelector(
    (state: OpenAIRootState) => state.openAIState.contextTokensTotal
  );

  // Custom and React Hooks
  const dispatch = useDispatch();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  const handleIncrementOfTokensNumber = (_message: string) => {
    const numberOfTokensInContent = countTokens(_message);
    sumToTotalTokens(numberOfTokensInContent);
  };

  const countTokens = (_message: string) => {
    const encoding = encoding_for_model("gpt-3.5-turbo-1106");
    const encodedMessage = encoding.encode(_message);
    const numberOfTokens = encodedMessage.length;

    return numberOfTokens;
  };

  const sumToTotalTokens = (_tokensNumber: number) => {
    dispatch(incrementTotalTokensWith(_tokensNumber));
  };

  const isContextTokensThresholdOvercomeBy = (_newTokensCount: number) => {
    const tokensTotalNumber: number = contextTokensTotal + _newTokensCount;
    printDebug(
      `+++ isContextTokensThresholdOvercomeBy() - tokensTotalNumber => ${JSON.stringify(
        tokensTotalNumber
      )} `
    );

    if (tokensTotalNumber > MESSAGES_TOKENS_THRESHOLD) {
      return true;
    }

    return false;
  };

  const resetContextTokensTotal = () => {
    dispatch(resetTotalTokens());
  };

  return {
    handleIncrementOfTokensNumber,
    countTokens,
    isContextTokensThresholdOvercomeBy,
    resetContextTokensTotal,
  };
};

export default useContextTokensThreshold;
