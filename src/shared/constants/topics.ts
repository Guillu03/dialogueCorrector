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
      key: 0,
      name: "Aleatorio",
      description: "Selecciona un tema cualquiera del que hablar.",
    },
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
      key: 0,
      name: "Aleatorio",
      description: "Selecciona un tema cualquiera del que hablar.",
    },
    {
      key: 1,
      name: "Vacaciones",
      description: "Habla sobre tus vacaciones pasadas o dónde te gustaría ir.",
    },
    {
      key: 2,
      name: "La salud",
      description:
        "Describe cómo te sientes o habla sobre una visita al médico.",
    },
    {
      key: 3,
      name: "Planes futuros",
      description:
        "Habla sobre lo que vas a hacer el próximo fin de semana o en el futuro cercano.",
    },
    {
      key: 4,
      name: "Trabajo y profesiones",
      description: "Describe tu trabajo o el trabajo de personas que conoces.",
    },
    {
      key: 5,
      name: "Describir personas",
      description:
        "Habla sobre la apariencia y personalidad de amigos o familiares.",
    },
    {
      key: 6,
      name: "El transporte",
      description:
        "Habla sobre cómo te desplazas por la ciudad (autobús, tren, coche).",
    },
    {
      key: 7,
      name: "Invitaciones",
      description:
        "Cómo invitar a alguien a una fiesta o rechazar/aceptar una invitación.",
    },
    {
      key: 8,
      name: "Describir lugares",
      description: "Habla sobre tu ciudad o un lugar que has visitado.",
    },
    {
      key: 9,
      name: "Hablar sobre gustos y preferencias",
      description:
        "Explica qué te gusta y qué no te gusta en relación con comida, deportes, música, etc.",
    },
    {
      key: 10,
      name: "Experiencias pasadas",
      description:
        "Habla sobre una experiencia sencilla en el pasado, como una excursión o una fiesta.",
    },
  ],
  B1: [
    {
      key: 0,
      name: "Aleatorio",
      description: "Selecciona un tema cualquiera del que hablar.",
    },
    {
      key: 1,
      name: "Rutinas diarias y hábitos",
      description: "Describe tu día típico o las actividades de fin de semana.",
    },
    {
      key: 2,
      name: "Viajes y vacaciones",
      description: "Habla sobre un viaje o destino de vacaciones memorable.",
    },
    {
      key: 3,
      name: "Salud y bienestar",
      description: "Comenta cómo mantener un estilo de vida saludable.",
    },
    {
      key: 4,
      name: "Educación y vida escolar",
      description: "Describe tu experiencia escolar o educativa.",
    },
    {
      key: 5,
      name: "Aficiones y tiempo libre",
      description:
        "Comparte tus pasatiempos favoritos y explica por qué los disfrutas.",
    },
    {
      key: 6,
      name: "Planes futuros",
      description:
        "Habla sobre tus metas futuras o aspiraciones profesionales.",
    },
    {
      key: 7,
      name: "Compras y consumismo",
      description: "Comenta sobre tus hábitos y preferencias de compra.",
    },
    {
      key: 8,
      name: "Tecnología en la vida cotidiana",
      description: "Explica cómo la tecnología impacta tu vida.",
    },
    {
      key: 9,
      name: "Eventos culturales y tradiciones",
      description: "Habla sobre una tradición cultural importante en tu país.",
    },
    {
      key: 10,
      name: "Familia y amigos",
      description:
        "Describe el papel de la familia y las amistades en tu vida.",
    },
  ],
  B2: [
    {
      key: 0,
      name: "Aleatorio",
      description: "Selecciona un tema cualquiera del que hablar.",
    },
    {
      key: 1,
      name: "Redes sociales y comunicación",
      description: "Habla sobre los pros y los contras de las redes sociales.",
    },
    {
      key: 2,
      name: "Problemas ambientales",
      description:
        "Habla sobre los mayores problemas ambientales y cómo abordarlos.",
    },
    {
      key: 3,
      name: "Sistemas educativos",
      description: "Compara diferentes sistemas educativos y su efectividad.",
    },
    {
      key: 4,
      name: "Mercado laboral y empleo",
      description:
        "Comenta los desafíos y oportunidades en el mercado laboral.",
    },
    {
      key: 5,
      name: "Experiencias de viaje y diferencias culturales",
      description:
        "Habla sobre las diferencias culturales que has encontrado mientras viajabas.",
    },
    {
      key: 6,
      name: "Tecnología e innovación",
      description:
        "Comenta el impacto de los avances tecnológicos recientes en la sociedad.",
    },
    {
      key: 7,
      name: "Globalización",
      description:
        "Explora los efectos de la globalización en las culturas y economías locales.",
    },
    {
      key: 8,
      name: "Salud y bienestar",
      description:
        "Habla sobre la salud mental y su importancia en la sociedad moderna.",
    },
    {
      key: 9,
      name: "Consumo ético",
      description:
        "Comenta la importancia de comprar productos de origen ético.",
    },
    {
      key: 10,
      name: "Trabajo voluntario y responsabilidad social",
      description:
        "Comparte los beneficios del voluntariado y su impacto en las comunidades.",
    },
  ],
  C1: [
    {
      key: 0,
      name: "Aleatorio",
      description: "Selecciona un tema cualquiera del que hablar.",
    },
    {
      key: 1,
      name: "El papel de la inteligencia artificial",
      description:
        "Habla sobre las implicaciones éticas de la IA en la vida cotidiana.",
    },
    {
      key: 2,
      name: "Cambio climático y sostenibilidad",
      description: "Debate soluciones para combatir el cambio climático.",
    },
    {
      key: 3,
      name: "Reforma educativa",
      description: "Analiza cómo se podrían mejorar los sistemas educativos.",
    },
    {
      key: 4,
      name: "El futuro del trabajo",
      description:
        "Explora cómo el teletrabajo y la automatización cambiarán los mercados laborales.",
    },
    {
      key: 5,
      name: "Desafíos globales de salud",
      description:
        "Habla sobre los problemas de salud globales, como las pandemias, y cómo se pueden gestionar.",
    },
    {
      key: 6,
      name: "Identidad cultural en un mundo globalizado",
      description:
        "Debate si la globalización amenaza o enriquece la diversidad cultural.",
    },
    {
      key: 7,
      name: "Influencia de las redes sociales en la opinión pública",
      description:
        "Habla sobre cómo las redes sociales moldean la política y los movimientos sociales.",
    },
    {
      key: 8,
      name: "Dependencia tecnológica",
      description:
        "Explora los efectos de la creciente dependencia de la tecnología en las interacciones humanas.",
    },
    {
      key: 9,
      name: "Privacidad vs. seguridad",
      description:
        "Discute el equilibrio entre la privacidad personal y la seguridad nacional.",
    },
    {
      key: 10,
      name: "El papel del arte y la literatura en la sociedad",
      description:
        "Debate la importancia de las artes para reflejar y moldear la cultura.",
    },
  ],
  C2: [
    {
      key: 0,
      name: "Aleatorio",
      description: "Selecciona un tema cualquiera del que hablar.",
    },
    {
      key: 1,
      name: "Ética de la ingeniería genética",
      description:
        "Debate los límites morales de la modificación genética humana.",
    },
    {
      key: 2,
      name: "Impacto de la globalización en los países en desarrollo",
      description:
        "Habla sobre si la globalización beneficia o perjudica a las naciones en desarrollo.",
    },
    {
      key: 3,
      name: "Filosofía de la mente",
      description:
        "Explora teorías sobre la relación entre la conciencia y el cerebro.",
    },
    {
      key: 4,
      name: "Inteligencia artificial y creatividad humana",
      description:
        "Debate si la IA puede llegar a replicar completamente la creatividad humana.",
    },
    {
      key: 5,
      name: "Libre albedrío vs. determinismo",
      description:
        "Discute si los humanos realmente tienen libre albedrío o si nuestras acciones están predeterminadas.",
    },
    {
      key: 6,
      name: "El papel de los medios en la formación del pensamiento político",
      description:
        "Analiza la influencia de los medios de comunicación en las políticas públicas y la opinión pública.",
    },
    {
      key: 7,
      name: "Desigualdad social en la era digital",
      description:
        "Discute cómo internet y la tecnología afectan las disparidades socioeconómicas.",
    },
    {
      key: 8,
      name: "Apropiación cultural vs. apreciación cultural",
      description:
        "Debate la delgada línea entre adoptar y explotar otra cultura.",
    },
    {
      key: 9,
      name: "El concepto de la política post-verdad",
      description:
        "Explora cómo se manipulan los hechos y la verdad en el discurso político moderno.",
    },
    {
      key: 10,
      name: "Ética ambiental",
      description:
        "Discute la responsabilidad ética que los humanos tienen para preservar la biodiversidad y los ecosistemas.",
    },
  ],
};
