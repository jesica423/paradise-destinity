interface Data {
  id: number;
  image: string;
  images: string[];
  title: string;
  description: string;
  incluye: string[];
  noIncluye: string[];
}

export const cardData: Data[] = [
  {
    id: 1,
    image: 'assets/images/cards/palaciorealmadrid.jpg',
    images: [
      'assets/images/cards/madrid1.jpg',
      'assets/images/cards/madrid2.jpg',
    ],
    title: 'Palacio Real De Madrid',
    description: `En esta visita guiada por el Palacio Real de Madrid descubriremos
            los secretos de uno de los palacios más grandes de Europa.
            Conoceremos la historia de la realeza española mientras recorremos
            sus estancias, salones y jardines.`,
    incluye: [
      'Guía local oficial',
      'Tickets de entrada al Palacio Real con acceso rápido.',
      'Visita guíada de una hora y media de duración.',
    ],
    noIncluye: ['Propinas', 'Traslados'],
  },
  {
    id: 2,
    image: 'assets/images/cards/museoprado.jpg',
    title: 'Museo Del Prado',
    images: ['assets/images/cards/museo1.jpg'],
    description: `El Museo del Prado es el museo más conocido de Madrid y uno de los
            museos de arte más importantes del mundo. El edificio es obra de
            Juan de Villanueva y se inauguró en 1819. La colección del Museo del
            Prado de Madrid se basa principalmente en pinturas de los siglos XVI
            al XIX.`,
    incluye: [
      'Guía local oficial',
      'Tickets de entrada al Palacio Real con acceso rápido.',
      'Visita guíada de una hora y media de duración.',
    ],
    noIncluye: ['Propinas', 'Traslados'],
  },
  {
    id: 3,
    image: 'assets/images/cards/temploegipcio.jpg',
    images: [
      'assets/images/cards/templo1.jpg',
      'assets/images/cards/templo2.jpg',
    ],
    title: 'Parque Del Templo Debodo',
    description: `Se trata de un templo egipcio del siglo II a. d. C. instalado en el
            Parque del Templo de Debod Cuartel de la Montaña, cerca de la Plaza
            de España. El templo fue donado a España por el gobierno egipcio
            para evitar que quedara inundado tras la construcción de la gran
            presa de Asuán.`,
    incluye: [
      'Tour en bicicleta eléctrica por el templo debod,  este es ideal para evitar las aglomeraciones.',
      'Uso de bicicleta y cascos.',
      'Medidas de seguridad.',
      'Un guía que les brindará un excelente servicio.',
    ],
    noIncluye: ['Propinas', 'Traslados'],
  },
  {
    id: 4,
    image: 'assets/images/cards/fontaditrevi.jpg',
    images: [
      'assets/images/cards/fonta1.jpg',
      'assets/images/cards/fonta2.jpg',
    ],
    title: 'La Fontana di Trevi',
    description: `La Fontana di Trevi es una de las fuentes más bonitas del mundo. No solo por su tamaño o por su diseño, sino también por su energía. Tan pronto llegas allí, su belleza es capaz de enamorarte hasta la médula.  Si estás planificando tu viaje a Roma, la Fontana di Trevi debería ser uno de los primeros lugares que ver en Roma.`,
    incluye: [
      'Tour por la fontana di Trevi.',
      'Visita guíada por un historiador local, partida desde un punto de encuentro .',
      'Una caminata guiada por la fontana di Trevi de 3 horas, un pequeño refrigerio frente a la fontana di Trevi .',
    ],
    noIncluye: [],
  },
  {
    id: 5,
    image: 'assets/images/cards/piazzanavona.jpg',
    images: [
      'assets/images/cards/piazza1.jpg',
      'assets/images/cards/piazza2.jpg',
    ],
    title: 'Piazza Navona',
    description: `La gran Piazza Navona es uno de los lugares más destacados de toda Roma, una de sus plazas más céntricas y un punto de reunión para viandantes. En ella se pueden ver bellos edificios antiguos, varias fuentes y monumentos, además de un gran ambiente que siempre está presente. Es uno de los puntos fuertes de la visita a la ciudad de Roma.`,
    incluye: [
      'Tour en bicicleta eléctrica por el templo debod,  este es ideal para evitar las aglomeraciones.',
      'Uso de bicicleta y cascos.',
      'Medidas de seguridad.',
      'Un guía que les brindará un excelente servicio.',
    ],
    noIncluye: [],
  },
  {
    id: 6,
    image: 'assets/images/cards/castillo.jpg',
    images: [
      'assets/images/cards/castillo1.jpg',
      'assets/images/cards/castillo2.jpg',
    ],
    title: `Castillo de Sant'Angelo`,
    description: `El Castillo de Sant'Angelo está dividido en cinco plantas a las que se accede a través de una rampa en espiral que lleva primeramente hasta la cámara de las cenizas y posteriormente hasta las celdas en las que permanecieron encerrados algunos personajes históricos.`,
    incluye: [
      'Guía local oficial',
      'Tickets de entrada al Palacio Real con acceso rápido.',
      'Visita guíada de una hora y media de duración.',
    ],
    noIncluye: [],
  },
];
