import avatarNotSpeakingIcon from "../../../public/images/main/avatar-not-speaking.gif";
import avatarSpeakingIcon from "../../../public/images/main/avatar-speaking.gif";
import gifOjosParpadeando from "../../../public/images/main/ojos-parpadeando.gif";
import robotHablando from "../../../public/images/main/robot-speaking.gif";
import sensoresHablando from "../../../public/images/main/sensores_alexa_speaking.gif";
import sensoresIdle from "../../../public/images/main/sensores_alexa_idle.gif";
import loadingIcon from "../../../public/images/main/load-icon.gif";

const MAIN_IMAGES = {
  avatarNotSpeakingIcon: {
    imageSrc: sensoresIdle,
    imageAlt: "Ojos en reposo",
    imageAttribution: "GIF local",
    searchLink: "",
  },
  avatarSpeakingIcon: {
    imageSrc: sensoresHablando,
    imageAlt: "Ojos hablando",
    imageAttribution: "GIF local",
    searchLink: "",
  },
  loadingIcon: {
    imageSrc: loadingIcon,
    imageAlt: "cargando",
    imageAttribution: "Avatar Speaking Icon created by Raquel Arcaz Arias",
    searchLink: "",
  },
};

export { MAIN_IMAGES };
