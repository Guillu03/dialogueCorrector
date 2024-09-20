export type LevelType = {
  key: number;
  name: string;
  description: string;
};

export const LEVELS: Record<string, LevelType> = {
  A1: {
    key: 1,
    name: "Principiante",
    description: "Comprensión y uso de expresiones cotidianas básicas.",
  },
  A2: {
    key: 2,
    name: "Básico",
    description:
      "Comprensión de frases y expresiones frecuentes en contextos conocidos.",
  },
  B1: {
    key: 3,
    name: "Intermedio",
    description:
      "Comprensión de puntos principales en temas habituales como trabajo o estudios.",
  },
  B2: {
    key: 4,
    name: "Intermedio Alto",
    description:
      "Comprensión de ideas principales en textos complejos y capacidad para interactuar fluidamente.",
  },
  C1: {
    key: 5,
    name: "Avanzado Alto",
    description:
      "Capacidad de expresarse con fluidez y precisión en temas complejos.",
  },
  C2: {
    key: 6,
    name: "Maestría",
    description:
      "Comprensión completa y uso adecuado del idioma en cualquier contexto.",
  },
};
