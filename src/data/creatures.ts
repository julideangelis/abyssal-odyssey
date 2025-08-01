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
    depth: "~3,900 m",
    description: "Esta estrella de mar de cuerpo robusto y color rosado-marrón sorprendió por los pliegues en su cara dorsal que parecían glúteos, recordando inmediatamente al personaje Patricio Estrella de Bob Esponja. Pertenece al género Hippasteria, una familia de estrellas abisales de cinco brazos con espinas pronunciadas, perfectamente adaptadas a las condiciones extremas del fondo oceánico.",
    funFact: "Su apariencia 'culona' se debe a que al estar posada verticalmente, la gravedad desplazó sus órganos internos, dando la ilusión de 'glúteos' - aunque en realidad su ano no está en esa posición dorsal.",
    imageUrl: "/src/assets/patricio-starfish.jpg",
    accentColor: "coral"
  },
  {
    id: 2,
    nickname: "Batatita",
    scientificName: "Benthodytes sp.",
    group: "Holoturia (pepino de mar)",
    depth: "~3,900 m",
    description: "Un organismo de cuerpo ovalado color violeta intenso, parecido a una batata. Fue descubierto como nueva especie en 2014 por el biólogo Mariano Martínez a partir de muestras recolectadas en expediciones previas. En esta campaña se lo observó vivo por primera vez, causando la emotiva reacción del Dr. Martínez en plena transmisión.",
    funFact: "Su color púrpura le sirve de camuflaje en el lecho marino abisal, y su observación en vivo marcó un hito científico y emotivo para el equipo de investigación.",
    imageUrl: "/src/assets/batatita-holothurian.jpg",
    accentColor: "purple"
  },
  {
    id: 3,
    nickname: "Langosta Barbie",
    scientificName: "cf. Neolithodes sp.",
    group: "Crustáceo decápodo",
    depth: "2,400 - 3,000 m",
    description: "Un crustáceo de un color rosa brillante que apareció sobre el lecho marino, apodado en broma 'la langosta Barbie' por los usuarios debido a su tono rosa furioso. Las imágenes ultra-HD permitieron apreciar detalles de sus extremidades y caparazón espinoso, típicos de adaptaciones a la vida en aguas profundas.",
    funFact: "Su apodo alude a la icónica muñeca Barbie, en un año donde todo lo rosa estuvo de moda. Fue vista aferrada a corales látigo en las profundidades.",
    imageUrl: "/src/assets/barbie-lobster.jpg",
    accentColor: "pink"
  },
  {
    id: 4,
    nickname: "Raya estrellada",
    scientificName: "Rajidae indet.",
    group: "Pez cartilaginoso",
    depth: "2,512 m",
    description: "Una raya bentónica con un patrón único de manchas que parecían estrellas sobre el dorso, lo cual maravilló a los investigadores. Representa la primera raya profunda registrada en esta campaña específica, mostrando las adaptaciones únicas de estos peces cartilaginosos a la vida abisal.",
    funFact: "Su patrón de manchas estrelladas es único en la región y podría tratarse de una especie aún no catalogada científicamente.",
    imageUrl: "/src/assets/stellar-ray.jpg",
    accentColor: "coral"
  },
  {
    id: 5,
    nickname: "Pulpo Dumbo",
    scientificName: "Grimpoteuthis sp.",
    group: "Cefalópodo",
    depth: "2,427 m",
    description: "Un pulpo abisal cuyas aletas laterales recuerdan inmediatamente las orejas del elefante Dumbo de Disney. Estos cefalópodos de profundidad han desarrollado aletas únicas que les permiten planear grácilmente por las aguas abisales, siendo una de las criaturas más carismáticas del océano profundo.",
    funFact: "Sus 'orejas' son en realidad aletas especializadas que ondean constantemente, permitiéndole desplazarse con elegancia por el agua como si volara.",
    imageUrl: "/src/assets/dumbo-octopus.jpg",
    accentColor: "purple"
  }
];