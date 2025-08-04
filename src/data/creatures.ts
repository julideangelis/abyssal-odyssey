export interface CreatureData {
  id: number;
  nickname: string;
  scientificName: string;
  group: string;
  depth: string;
  description: string;
  funFact: string;
  imageUrl: string;
  accentColor: "pink" | "purple" | "coral";
}

export const creatures: CreatureData[] = [
  {
    id: 1,
    nickname: "Patricio (la estrella culona)",
    scientificName: "Hippasteria cf. phrygiana",
    group: "Equinodermo",
    depth: "1,195 m",
    description: "Esta estrella de mar de cuerpo robusto y color rosado-marrón sorprendió por los pliegues en su cara dorsal que parecían glúteos, recordando inmediatamente al personaje Patricio Estrella de Bob Esponja. Pertenece al género Hippasteria, una familia de estrellas abisales de cinco brazos con espinas pronunciadas, perfectamente adaptadas a las condiciones extremas del fondo oceánico.",
    funFact: "Su apariencia 'culona' se debe a que al estar posada verticalmente, la gravedad desplazó sus órganos internos, dando la ilusión de 'glúteos' - aunque en realidad su ano no está en esa posición dorsal.",
    imageUrl: "https://i.ibb.co/GQmHMfss/patricio-starfish.jpg",
    accentColor: "coral"
  },
  {
    id: 2,
    nickname: "Batatita",
    scientificName: "Benthodytes violetta sp.",
    group: "Holoturia (pepino de mar)",
    depth: "2,576 m",
    description: "Un organismo de cuerpo ovalado color violeta intenso, parecido a una batata. Fue descubierto como nueva especie en 2014 por el biólogo Mariano Martínez a partir de muestras recolectadas en expediciones previas. En esta campaña se lo observó vivo por primera vez, causando la emotiva reacción del Dr. Martínez en plena transmisión.",
    funFact: "Su color púrpura le sirve de camuflaje en el lecho marino abisal, y su observación en vivo marcó un hito científico y emotivo para el equipo de investigación.",
    imageUrl: "https://i.ibb.co/zhhVhFqj/batatita-holothurian.jpg",
    accentColor: "pink"
  },
  {
    id: 3,
    nickname: "Langosta Barbie",
    scientificName: "Thymops sp.",
    group: "Crustáceo decápodo",
    depth: "2,400 - 3,000 m",
    description: "Un crustáceo de un color rosa brillante que apareció sobre el lecho marino, apodado en broma 'la langosta Barbie' por los usuarios debido a su tono rosa furioso. Las imágenes ultra-HD permitieron apreciar detalles de sus extremidades y caparazón espinoso, típicos de adaptaciones a la vida en aguas profundas.",
    funFact: "Su apodo alude a la icónica muñeca Barbie, en un año donde todo lo rosa estuvo de moda. Fue vista aferrada a corales látigo en las profundidades.",
    imageUrl: "https://i.ibb.co/vx2gLBTR/barbie-lobster.jpg",
    accentColor: "purple"
  },
  {
    id: 4,
    nickname: "Raya estrellada",
    scientificName: "Amblyraja sp.",
    group: "Pez cartilaginoso",
    depth: "2,512 m",
    description: "Una raya bentónica con un patrón único de manchas que parecían estrellas sobre el dorso, lo cual maravilló a los investigadores. Representa la primera raya profunda registrada en esta campaña específica, mostrando las adaptaciones únicas de estos peces cartilaginosos a la vida abisal.",
    funFact: "Su patrón de manchas estrelladas es único en la región y podría tratarse de una especie aún no catalogada científicamente.",
    imageUrl: "https://i.ibb.co/gbMytbYr/stellar-ray.png",
    accentColor: "coral"
  },
  {
    id: 5,
    nickname: "Mama pulpo",
    scientificName: "Muusoctopus sp.",
    group: "Cefalópodo",
    depth: "2,439 m",
    description: "Hembra de pulpo abisal que protege un racimo de huevos grandes en una madriguera a casi 2,5 km de profundidad. Enrolla sus brazos en espiral alrededor de la puesta y los ventila sin descanso durante meses—o incluso años—hasta que las crías salgan completamente formadas.",
    funFact: "Los pulpos del género Muusoctopus han perdido el saco de tinta porque carece de sentido en la oscuridad eterna del fondo; en vez de escapar con una nube de tinta, confían en el camuflaje y una incubación maratónica que puede ser la más larga del reino animal.",
    imageUrl: "https://i.ibb.co/D6wwNwG/mamapulpo.png",
    accentColor: "purple"
  },
  {
    id: 6,
    nickname: "Centolla Dragqueen",
    scientificName: "Paralomis formosa (tentativo)",
    group: "Crustáceo decápodo",
    depth: "2,082 m",
    description: "Centolla abisal de caparazón robusto y espinoso, cubierta por decenas de percebes blancos que crecen sobre sus patas como si fueran flores. Su andar imponente y decoración viva cautivaron a los espectadores del stream.",
    funFact: "Las centollas de profundidad como esta pueden vivir más de 15 años y tolerar aguas muy frías. Los percebes que lleva encima se alimentan filtrando el agua mientras ella camina, formando una especie de ‘jardín móvil’ simbiótico.",
    imageUrl: "https://pbs.twimg.com/media/GxKldLLW8AAfOJz?format=jpg&name=large",
    accentColor: "coral"
  },

  {
    id: 7,
    nickname: "Esponja Vampiro",
    scientificName: "Cladorhizidae (esponja carnívora)",
    group: "Porífero",
    depth: "1,461 m",
    description: "No filtra agua como las esponjas comunes: atrapa pequeños crustáceos con filamentos pegajosos y luego los digiere lentamente.",
    funFact: "Es la primera esponja carnívora registrada viva en el Atlántico Sudoccidental; su hallazgo generó memes sobre ‘la esponja vampiro’.",
    imageUrl: "https://alpha-app.tadevel-cdn.com/hostname/noticiasargentinas.com/api/v1/resizer?asset=688d3e67f548bad1e8b2aecd&format=jpeg&width=1200&height=675&v=07f9b482e38160627a4871fe78fabf42&s=c277c77be1f267f73967e06952312cda",
    accentColor: "pink"
  },

  {
    id: 8,
    nickname: "Roz (Calamar de cristal)",
    scientificName: "Cranchiidae",
    group: "Cefalópodo",
    depth: "1039 m",
    description: "Cuerpo casi transparente de unos 20 cm, con ojos enormes y sólo el órgano digestivo visible; parece ‘de vidrio’ cuando lo ilumina el ROV.",
    funFact: "Cuando se asusta puede llenarse de agua y hacerse una pelota gelatina gigante para intimidar depredadores; luego se desinfla y huye a propulsión-chorro.",
    imageUrl: "https://media.lacapital.com.ar/p/ee8eccb19edf9cdf8af5503fe5fefc38/adjuntos/203/imagenes/102/576/0102576024/1200x675/smart/image-56.png",
    accentColor: "purple"
  },

  {
    id: 9,
    nickname: "Coral Arcoíris",
    scientificName: "Primnoidae (coral de aguas frías fluorescente)",
    group: "Cnidario",
    depth: "1,000 m",
    description: "Colonia arborescente que emite destellos verdosos bajo la luz del ROV, gracias a proteínas fluorescentes que protegen sus tejidos.",
    funFact: "La fluorescencia puede servir de ‘sombreado químico’ contra radiación ultravioleta o como atrayente de microfauna.",
    imageUrl: "https://www.dfo-mpo.gc.ca/oceans/images/mpa-zpm/gully/corail-bubblegum-coral.jpg",
    accentColor: "purple"
  },

  {
    id: 10,
    nickname: "Gelatina Fantasma",
    scientificName: "Enypniastes eximia",
    group: "Equinodermo (Holoturioideo)",
    depth: "2,570 m",
    description: "Pepino de mar translúcido que camina lentamente sobre el lecho marino usando estructuras tipo patas. Su cuerpo gelatinoso deja ver los órganos internos y se infla como una burbuja. Se lo ha comparado con una empanada, raviol o fantasma gelatinoso.",
    funFact: "Puede nadar alejándose del fondo mediante aletas dérmicas, algo raro entre los pepinos de mar. También se le conoce como 'headless chicken monster' (monstruo pollo sin cabeza) por su forma en ciertas posiciones.",
    imageUrl: "https://media.mdzol.com/p/93e04e64ec1899cf20e18e82d230ed68/adjuntos/373/imagenes/001/603/0001603957/760x0/smart/pepino-mar-profundidad-holothuroidea-conicet-2.png",
    accentColor: "purple"
  },
  {
    id: 11,
    nickname: "Calamar de profundidad",
    scientificName: "Architeuthis sp",
    group: "Cefalópodo",
    depth: "1,336 m",
    description: "Cuerpo pequeño con brazos y tentáculos extremadamente largos y delgados, que cuelgan hacia abajo formando ángulos rectos. Su silueta etérea y su modo de desplazamiento lento lo hacen parecer un fantasma del abismo.",
    funFact: "Los tentáculos de los Magnapinna pueden medir hasta 15 veces la longitud del cuerpo. Su morfología única sigue siendo un misterio para la ciencia, y nunca se ha capturado un ejemplar adulto vivo.",
    imageUrl: "https://media.mdzol.com/p/457aff6fd1c60b8d0994fa7f1593a5ce/adjuntos/373/imagenes/001/603/0001603949/760x0/smart/calamar-profundidad-architeuthis-sp-o-magnapinna-sp.jpg",
    accentColor: "purple"
  },
  {
    id: 12,
    nickname: "Caracol gigante",
    scientificName: "No definido",
    group: "Naticidae",
    depth: "3,682 m",
    description: "Caracol gigante que vive en el fondo del océano. Suele alimentarse de bivalvos. El ejemplar encontrado medía mas de 10 centimetros.",
    funFact: "En la transmision parece que lo encontraron comiendo. Lo extrayeron con la garra y casi no entra.",
    imageUrl: "/src/assets/caracol-gigante.png",
    accentColor: "coral"
  }
];