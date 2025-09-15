import { MAIN_IMAGES } from "../../../../shared/constants/images";
import Button from "../../../../shared/components/Button";
import "./speech.css";

interface SpeechViewProps {
  isLoading: boolean;
  isSpeechOn: boolean;
  latestTemperature: number | null;
  latestHumidity: number | null;
  latestMq2: number | null;
  latestMq3: number | null;
  latestMq7: number | null;
  latestMq135: number | null;
  latestMq138: number | null;
  handleOnTouchStartEvent: () => void; // Aún se pasa, pero no se usa en el contenedor principal
  handleSeeCorrectionsOnTouchEvent: (enabled: boolean) => void;
  handleMiEntornoClick: () => void;
  handleRecomendacionesClick: () => void;
}

const Speech: React.FC<SpeechViewProps> = ({
  isLoading,
  isSpeechOn,
  latestTemperature,
  latestHumidity,
  latestMq2,
  latestMq3,
  latestMq7,
  latestMq135,
  latestMq138,
  handleOnTouchStartEvent, // Ya no se usa directamente en el div principal
  handleSeeCorrectionsOnTouchEvent,
  handleMiEntornoClick,
  handleRecomendacionesClick,
}) => {
  return (
    // Se ha eliminado onTouchStart={handleOnTouchStartEvent} de este div principal
    <div className="container-menu"> 
      <div className="speech-view-main-layout">

          {/* Panel izquierdo para el avatar (70% del ancho) */}
          <div className="main-content-left-panel">
            <div className="avatar-area">
              {isLoading && (
                <div className="loading-icon-container">
                  <img
                    src={MAIN_IMAGES.loadingIcon.imageSrc}
                    alt={MAIN_IMAGES.loadingIcon.imageAlt}
                    className="loading-icon"
                  />
                </div>
              )}

              <div className="avatar-container">
                <img
                  src={isSpeechOn ? MAIN_IMAGES.avatarSpeakingIcon.imageSrc : MAIN_IMAGES.avatarNotSpeakingIcon.imageSrc}
                  alt={isSpeechOn ? MAIN_IMAGES.avatarSpeakingIcon.imageAlt : MAIN_IMAGES.avatarNotSpeakingIcon.imageAlt}
                  className={isSpeechOn ? "speaking-glow" : ""}
                />
              </div>
            </div>
          </div>

          {/* Panel derecho para los botones y sensores (30% del ancho) */}
          <div className="main-content-right-panel">
            
            {/* Sección superior para los botones (20% de la altura) */}
            <div className="button-container">
              <Button
                id="miEntorno"
                path="/mi-entorno"
                onClick={handleMiEntornoClick}
                classStyle="btn-primary item-button"
                type="button"
              >
                Mi entorno
              </Button>
              <Button
                id="recomendaciones"
                path="/recomendaciones"
                onClick={handleRecomendacionesClick}
                classStyle="btn-primary item-button"
                type="button"
              >
                Recomendaciones
              </Button>
            </div>

            {/* Sección inferior para los sensores (80% de la altura) */}
            <div className="sensors-right-panel">
              <div className="sensor-display">
                {latestTemperature !== null
                  ? `🌡️ Temperatura: ${latestTemperature.toFixed(1)} °C`
                  : "Cargando..."}
              </div>
              <div className="sensor-display">
                {latestHumidity !== null
                  ? `💧 Humedad: ${latestHumidity.toFixed(1)} %`
                  : "Cargando..."}
              </div>
              <div className="sensor-display">
                {latestMq2 !== null ? `MQ-2 (Humo): ${latestMq2}` : "Cargando..."}
              </div>
              <div className="sensor-display">
                {latestMq3 !== null ? `MQ-3 (Alcohol): ${latestMq3}` : "Cargando..."}
              </div>
              <div className="sensor-display">
                {latestMq7 !== null ? `MQ-7 (CO): ${latestMq7}` : "Cargando..."}
              </div>
              <div className="sensor-display">
                {latestMq135 !== null ? `MQ-135 (Aire): ${latestMq135}` : "Cargando..."}
              </div>
              <div className="sensor-display">
                {latestMq138 !== null ? `MQ-138 (Químicos): ${latestMq138}` : "Cargando..."}
              </div>
            </div>

          </div>
        </div>
      </div>
  );
};
export default Speech;
