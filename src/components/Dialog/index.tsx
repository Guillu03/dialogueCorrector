import CorrectionsView from "./components/Corrections";
import Speech from "./components/Speech";
import useDialogController from "./useDialogController";

/**
 * Vista principal del diálogo que decide si mostrar la conversación o las correcciones.
 */
const DialogView = () => {
  const {
    messages,
    seeCorrectionsEnabled,
    isLoading,
    isSpeechOn,
    latestTemperature,
    latestHumidity,
    latestMq2,
    latestMq3,
    latestMq7,
    latestMq135,
    latestMq138,
    handleOnTouchStartEvent,
    handleSeeCorrectionsOnTouchEvent,
    setSeeCorretionsEnabled,
  } = useDialogController();

  return (
    <>
      {seeCorrectionsEnabled ? (
        <CorrectionsView
          messages={messages}
          setSeeCorrectionsEnabled={setSeeCorretionsEnabled}
        />
      ) : (
        <Speech
          isLoading={isLoading}
          isSpeechOn={isSpeechOn}
          latestTemperature={latestTemperature}
          latestHumidity={latestHumidity} 
          latestMq2={latestMq2}
          latestMq3={latestMq3}
          latestMq7={latestMq7}
          latestMq135={latestMq135}
          latestMq138={latestMq138}
          handleOnTouchStartEvent={handleOnTouchStartEvent}
          handleSeeCorrectionsOnTouchEvent={handleSeeCorrectionsOnTouchEvent}
        />
      )}
    </>
  );
};

export default DialogView;