export type LevelType = {
  key: string;
  name: string;
  description: string;
};

export const LEVELS: Record<string, LevelType> = {
  A1: {
    key: "A1",
    name: "Principiante",
    description: "Comprensión y uso de expresiones cotidianas básicas.",
  },
  A2: {
    key: "A2",
    name: "Básico",
    description:
      "Comprensión de frases y expresiones frecuentes en contextos conocidos.",
  },
  B1: {
    key: "B1",
    name: "Intermedio",
    description:
      "Comprensión de puntos principales en temas habituales como trabajo o estudios.",
  },
  B2: {
    key: "B2",
    name: "Intermedio Alto",
    description:
      "Comprensión de ideas principales en textos complejos y capacidad para interactuar fluidamente.",
  },
  C1: {
    key: "C1",
    name: "Avanzado Alto",
    description:
      "Capacidad de expresarse con fluidez y precisión en temas complejos.",
  },
  C2: {
    key: "C2",
    name: "Maestría",
    description:
      "Comprensión completa y uso adecuado del idioma en cualquier contexto.",
  },
};
