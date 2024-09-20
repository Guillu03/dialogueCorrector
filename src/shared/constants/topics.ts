export type TopicType = {
  key: number;
  name: string;
  description: string;
};

export type TopicByLevel = {
  [level: string]: TopicType[];
};

export const TOPICS: TopicByLevel = {
  A1: [
    {
      key: 1,
      name: "Presentaciones personales",
      description: "Habla sobre tu nombre, edad, y de dónde eres.",
    },
    {
      key: 2,
      name: "Rutinas diarias",
      description:
        "Describe las actividades que haces cada día, como ir al trabajo o a la escuela.",
    },
    {
      key: 3,
      name: "La familia",
      description:
        "Habla sobre los miembros de tu familia (padres, hermanos, etc.).",
    },
    {
      key: 4,
      name: "Comidas y bebidas",
      description: "Describe tus comidas y bebidas favoritas.",
    },
    {
      key: 5,
      name: "Direcciones",
      description: "Pregunta y da indicaciones para llegar a un lugar.",
    },
    {
      key: 6,
      name: "La casa",
      description:
        "Habla sobre las partes de una casa y los objetos que hay en cada habitación.",
    },
    {
      key: 7,
      name: "El tiempo y el clima",
      description: "Describe el clima en tu ciudad o cómo es el clima hoy.",
    },
    {
      key: 8,
      name: "Actividades de tiempo libre",
      description:
        "Habla sobre lo que te gusta hacer en tu tiempo libre (leer, ver televisión, etc.).",
    },
    {
      key: 9,
      name: "Compras",
      description:
        "Practica cómo pedir y comprar cosas en una tienda o supermercado.",
    },
    {
      key: 10,
      name: "Lugares de la ciudad",
      description:
        "Describe lugares comunes en la ciudad como parques, estaciones de tren, o supermercados.",
    },
  ],
  A2: [
    {
      key: 11,
      name: "Vacaciones",
      description: "Habla sobre tus vacaciones pasadas o dónde te gustaría ir.",
    },
    {
      key: 12,
      name: "La salud",
      description:
        "Describe cómo te sientes o habla sobre una visita al médico.",
    },
    {
      key: 13,
      name: "Planes futuros",
      description:
        "Habla sobre lo que vas a hacer el próximo fin de semana o en el futuro cercano.",
    },
    {
      key: 14,
      name: "Trabajo y profesiones",
      description: "Describe tu trabajo o el trabajo de personas que conoces.",
    },
    {
      key: 15,
      name: "Describir personas",
      description:
        "Habla sobre la apariencia y personalidad de amigos o familiares.",
    },
    {
      key: 16,
      name: "El transporte",
      description:
        "Habla sobre cómo te desplazas por la ciudad (autobús, tren, coche).",
    },
    {
      key: 17,
      name: "Invitaciones",
      description:
        "Cómo invitar a alguien a una fiesta o rechazar/aceptar una invitación.",
    },
    {
      key: 18,
      name: "Describir lugares",
      description: "Habla sobre tu ciudad o un lugar que has visitado.",
    },
    {
      key: 19,
      name: "Hablar sobre gustos y preferencias",
      description:
        "Explica qué te gusta y qué no te gusta en relación con comida, deportes, música, etc.",
    },
    {
      key: 20,
      name: "Experiencias pasadas",
      description:
        "Habla sobre una experiencia sencilla en el pasado, como una excursión o una fiesta.",
    },
  ],
  B1: [
    {
      key: 21,
      name: "Rutinas diarias y hábitos",
      description: "Describe tu día típico o las actividades de fin de semana.",
    },
    {
      key: 22,
      name: "Viajes y vacaciones",
      description: "Habla sobre un viaje o destino de vacaciones memorable.",
    },
    {
      key: 23,
      name: "Salud y bienestar",
      description: "Comenta cómo mantener un estilo de vida saludable.",
    },
    {
      key: 24,
      name: "Educación y vida escolar",
      description: "Describe tu experiencia escolar o educativa.",
    },
    {
      key: 25,
      name: "Aficiones y tiempo libre",
      description:
        "Comparte tus pasatiempos favoritos y explica por qué los disfrutas.",
    },
    {
      key: 26,
      name: "Planes futuros",
      description:
        "Habla sobre tus metas futuras o aspiraciones profesionales.",
    },
    {
      key: 27,
      name: "Compras y consumismo",
      description: "Comenta sobre tus hábitos y preferencias de compra.",
    },
    {
      key: 28,
      name: "Tecnología en la vida cotidiana",
      description: "Explica cómo la tecnología impacta tu vida.",
    },
    {
      key: 29,
      name: "Eventos culturales y tradiciones",
      description: "Habla sobre una tradición cultural importante en tu país.",
    },
    {
      key: 30,
      name: "Familia y amigos",
      description:
        "Describe el papel de la familia y las amistades en tu vida.",
    },
  ],
  B2: [
    {
      key: 31,
      name: "Redes sociales y comunicación",
      description: "Habla sobre los pros y los contras de las redes sociales.",
    },
    {
      key: 32,
      name: "Problemas ambientales",
      description:
        "Habla sobre los mayores problemas ambientales y cómo abordarlos.",
    },
    {
      key: 33,
      name: "Sistemas educativos",
      description: "Compara diferentes sistemas educativos y su efectividad.",
    },
    {
      key: 34,
      name: "Mercado laboral y empleo",
      description:
        "Comenta los desafíos y oportunidades en el mercado laboral.",
    },
    {
      key: 35,
      name: "Experiencias de viaje y diferencias culturales",
      description:
        "Habla sobre las diferencias culturales que has encontrado mientras viajabas.",
    },
    {
      key: 36,
      name: "Tecnología e innovación",
      description:
        "Comenta el impacto de los avances tecnológicos recientes en la sociedad.",
    },
    {
      key: 37,
      name: "Globalización",
      description:
        "Explora los efectos de la globalización en las culturas y economías locales.",
    },
    {
      key: 38,
      name: "Salud y bienestar",
      description:
        "Habla sobre la salud mental y su importancia en la sociedad moderna.",
    },
    {
      key: 39,
      name: "Consumo ético",
      description:
        "Comenta la importancia de comprar productos de origen ético.",
    },
    {
      key: 40,
      name: "Trabajo voluntario y responsabilidad social",
      description:
        "Comparte los beneficios del voluntariado y su impacto en las comunidades.",
    },
  ],
  C1: [
    {
      key: 41,
      name: "El papel de la inteligencia artificial",
      description:
        "Habla sobre las implicaciones éticas de la IA en la vida cotidiana.",
    },
    {
      key: 42,
      name: "Cambio climático y sostenibilidad",
      description: "Debate soluciones para combatir el cambio climático.",
    },
    {
      key: 43,
      name: "Reforma educativa",
      description: "Analiza cómo se podrían mejorar los sistemas educativos.",
    },
    {
      key: 44,
      name: "El futuro del trabajo",
      description:
        "Explora cómo el teletrabajo y la automatización cambiarán los mercados laborales.",
    },
    {
      key: 45,
      name: "Desafíos globales de salud",
      description:
        "Habla sobre los problemas de salud globales, como las pandemias, y cómo se pueden gestionar.",
    },
    {
      key: 46,
      name: "Identidad cultural en un mundo globalizado",
      description:
        "Debate si la globalización amenaza o enriquece la diversidad cultural.",
    },
    {
      key: 47,
      name: "Influencia de las redes sociales en la opinión pública",
      description:
        "Habla sobre cómo las redes sociales moldean la política y los movimientos sociales.",
    },
    {
      key: 48,
      name: "Dependencia tecnológica",
      description:
        "Explora los efectos de la creciente dependencia de la tecnología en las interacciones humanas.",
    },
    {
      key: 49,
      name: "Privacidad vs. seguridad",
      description:
        "Discute el equilibrio entre la privacidad personal y la seguridad nacional.",
    },
    {
      key: 50,
      name: "El papel del arte y la literatura en la sociedad",
      description:
        "Debate la importancia de las artes para reflejar y moldear la cultura.",
    },
  ],
  C2: [
    {
      key: 51,
      name: "Ética de la ingeniería genética",
      description:
        "Debate los límites morales de la modificación genética humana.",
    },
    {
      key: 52,
      name: "Impacto de la globalización en los países en desarrollo",
      description:
        "Habla sobre si la globalización beneficia o perjudica a las naciones en desarrollo.",
    },
    {
      key: 53,
      name: "Filosofía de la mente",
      description:
        "Explora teorías sobre la relación entre la conciencia y el cerebro.",
    },
    {
      key: 54,
      name: "Inteligencia artificial y creatividad humana",
      description:
        "Debate si la IA puede llegar a replicar completamente la creatividad humana.",
    },
    {
      key: 55,
      name: "Libre albedrío vs. determinismo",
      description:
        "Discute si los humanos realmente tienen libre albedrío o si nuestras acciones están predeterminadas.",
    },
    {
      key: 56,
      name: "El papel de los medios en la formación del pensamiento político",
      description:
        "Analiza la influencia de los medios de comunicación en las políticas públicas y la opinión pública.",
    },
    {
      key: 57,
      name: "Desigualdad social en la era digital",
      description:
        "Discute cómo internet y la tecnología afectan las disparidades socioeconómicas.",
    },
    {
      key: 58,
      name: "Apropiación cultural vs. apreciación cultural",
      description:
        "Debate la delgada línea entre adoptar y explotar otra cultura.",
    },
    {
      key: 59,
      name: "El concepto de la política post-verdad",
      description:
        "Explora cómo se manipulan los hechos y la verdad en el discurso político moderno.",
    },
    {
      key: 60,
      name: "Ética ambiental",
      description:
        "Discute la responsabilidad ética que los humanos tienen para preservar la biodiversidad y los ecosistemas.",
    },
  ],
};
