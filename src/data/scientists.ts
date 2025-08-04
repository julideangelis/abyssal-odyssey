export interface ScientistData {
  id: number;
  name: string;
  role: string;
  institution: string;
  specialty: string;
  description: string;
  highlight: string;
  profileLink?: string;
  profilePhoto?: string;
}

export const scientists: ScientistData[] = [
  {
    id: 1,
    name: "Dr. Daniel Lauretta",
    role: "Jefe científico de la expedición",
    institution: "Museo Argentino de Ciencias Naturales - CONICET",
    specialty: "Diversidad y biología reproductiva de cnidarios bentónicos",
    description: "Lidera la expedición Talud Continental IV. Especialista en corales de profundidad y hábitats bentónicos vulnerables del Atlántico Sur.",
    highlight: "Coordinador general del equipo científico en la campaña 2025",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=23784&datos_academicos=yes"
  },
  {
    id: 2,
    name: "Dr. Emiliano Ocampo",
    role: "Investigador de crustáceos decápodos",
    institution: "IIMyC (UNMDP - CONICET)",
    specialty: "Evolución y respuesta a estresores en crustáceos",
    description: "Estudia cómo los cangrejos y langostas de profundidad se adaptan a los cambios del entorno. Participa activamente en la caracterización de especies del talud.",
    highlight: "Especialista en adaptaciones al estrés ambiental",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=36320&datos_academicos=yes"
  },
  {
    id: 3,
    name: "Rodrigo Calderón",
    role: "Becario doctoral en taxonomía de corales",
    institution: "Museo Argentino de Ciencias Naturales - CONICET",
    specialty: "Taxonomía de corales duros del Atlántico Sudoccidental",
    description: "Doctorando dedicado a clasificar y estudiar corales escleractinios hallados en la expedición. Su trabajo permite comprender mejor los ecosistemas de profundidad.",
    highlight: "Documenta corales duros del Atlántico sur",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=67229&keywords=&datos_academicos=yes",
  },
  {
    id: 4,
    name: "Dr. Diego Urteaga",
    role: "Investigador en moluscos",
    institution: "Museo Argentino de Ciencias Naturales - CONICET",
    specialty: "Moluscos poliplacóforos, fósiles y actuales",
    description: "Investiga linajes antiguos de moluscos como los chitones, claves para entender la evolución y diversidad del fondo marino profundo.",
    highlight: "Especialista en chitones fósiles y modernos",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=34778&datos_academicos=yes"
  },
  {
    id: 5,
    name: "Dr. Mariano Martínez",
    role: "Investigador en equinodermos",
    institution: "Museo Argentino de Ciencias Naturales - CONICET",
    specialty: "Taxonomía y reproducción de equinodermos",
    description: "Conocido por describir a 'Batatita', fue protagonista de uno de los momentos más emotivos de la expedición al verlo vivo por primera vez.",
    highlight: "Descubridor del icónico 'Batatita'",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=28314&datos_academicos=yes"
  },
  {
    id: 6,
    name: "Dr. Leonel Pacheco",
    role: "Becario postdoctoral",
    institution: "Museo Argentino de Ciencias Naturales - CONICET",
    specialty: "Taxonomía de bivalvos",
    description: "Trabaja en la identificación y clasificación de almejas de profundidad, aportando al registro biológico del Mar Argentino.",
    highlight: "Especialista en bivalvos abisales",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=54067&datos_academicos=yes"
  },
  {
    id: 7,
    name: "Dra. Renata Pertossi",
    role: "Becaria postdoctoral",
    institution: "Museo Argentino de Ciencias Naturales - CONICET",
    specialty: "Crinoideos: taxonomía, reproducción y biogeografía",
    description: "Estudia los lirios de mar (crinoideos) del talud, organismos clave para entender la estructura de la fauna bentónica.",
    highlight: "Especialista en crinoideos de profundidad",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=53571&datos_academicos=yes"
  },
  {
    id: 8,
    name: "Jessica Risaro",
    role: "Becaria doctoral",
    institution: "Museo Argentino de Ciencias Naturales - CONICET",
    specialty: "Taxonomía y reproducción de corales blandos",
    description: "Contribuye a la identificación de octocorales, sumando datos clave sobre su distribución en el Cañón de Mar del Plata.",
    highlight: "Investiga octocorales del talud continental",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=62842&datos_academicos=yes"
  },
  {
    id: 9,
    name: "Dra. Valeria Teso",
    role: "Investigadora en moluscos",
    institution: "Museo Argentino de Ciencias Naturales - CONICET",
    specialty: "Taxonomía y ecología de gasterópodos marinos",
    description: "Estudia caracoles de profundidad, enfocándose en su rol ecológico y su adaptación al ambiente abisal.",
    highlight: "Referente en gasterópodos del Atlántico Sur",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=33196&datos_academicos=yes"
  },
  {
    id: 10,
    name: "Dra. Noelia Sánchez",
    role: "Becaria postdoctoral",
    institution: "Museo Argentino de Ciencias Naturales - CONICET",
    specialty: "Gasterópodos de aguas profundas",
    description: "Su trabajo apunta a descubrir nuevas especies y comprender la evolución de caracoles que habitan zonas extremas.",
    highlight: "Especialista en caracoles abisales",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=48517&datos_academicos=yes"
  },
  {
    id: 11,
    name: "Dr. Nahuel Farías",
    role: "Investigador en crustáceos",
    institution: "IIMyC (UNMDP - CONICET)",
    specialty: "Biogeografía y ecología de decápodos",
    description: "Analiza patrones de distribución de cangrejos y langostinos a lo largo del talud argentino.",
    highlight: "Experto en crustáceos del Mar Argentino",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=27567&datos_academicos=yes"
  },
  {
    id: 12,
    name: "Dr. Ezequiel Mabragaña",
    role: "Investigador en peces cartilaginosos",
    institution: "IIMyC (UNMDP - CONICET)",
    specialty: "Taxonomía y ecología de rayas",
    description: "Registra y estudia especies de rayas abisales, muchas de las cuales aparecen por primera vez en estas imágenes.",
    highlight: "Especialista en rayas de aguas profundas",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=32736&datos_academicos=yes"
  },
  {
    id: 13,
    name: "Florencia Matusevich",
    role: "Becaria doctoral",
    institution: "IIMyC (UNMDP - CONICET)",
    specialty: "Taxonomía y filogenia de rayas",
    description: "Colabora en la identificación de nuevas especies de rayas del talud, mediante análisis morfológicos y genéticos.",
    highlight: "Estudia evolución de rayas abisales",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=62134&datos_academicos=yes"
  },
  {
    id: 14,
    name: "Dr. Emanuel Pereira",
    role: "Becario postdoctoral",
    institution: "IBBEA (UBA - CONICET)",
    specialty: "Sistemática y biogeografía de isópodos",
    description: "Investiga la diversidad de pequeños crustáceos del fondo marino, fundamentales para el equilibrio del ecosistema.",
    highlight: "Especialista en isópodos bentónicos",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=51136&datos_academicos=yes"
  },
  {
    id: 15,
    name: "Dra. Brenda Doti",
    role: "Investigadora en isópodos",
    institution: "IBBEA (UBA - CONICET)",
    specialty: "Taxonomía de isópodos de aguas profundas",
    description: "Lidera estudios sobre pequeños crustáceos adaptados a ambientes extremos, claves en la red trófica profunda.",
    highlight: "Referente en isópodos abisales",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=23187&datos_academicos=yes"
  },
  {
    id: 16,
    name: "Dra. María Carla de Aranzamendi",
    role: "Investigadora en invertebrados",
    institution: "IDEA (CONICET) - Córdoba",
    specialty: "Taxonomía de ascideas",
    description: "Estudia ascidias marinas (organismos filtradores), contribuyendo al conocimiento de especies poco documentadas en profundidad.",
    highlight: "Especialista en ascidias del talud",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=34786&datos_academicos=yes"
  },
  {
    id: 17,
    name: "Dr. Martín Brogger",
    role: "Investigador de impacto humano",
    institution: "IBIOMAR (CONICET) - Puerto Madryn",
    specialty: "Equinodermos y contaminación marina",
    description: "Estudia cómo los residuos humanos afectan la biodiversidad abisal, incluyendo estrellas, erizos y pepinos de mar.",
    highlight: "Documenta basura marina hasta 3.900 m",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=34637&datos_academicos=yes"
  },
  {
    id: 18,
    name: "Dr. Javier Signorelli",
    role: "Investigador en moluscos",
    institution: "IBIOMAR (CONICET) - Puerto Madryn",
    specialty: "Taxonomía de bivalvos",
    description: "Aporta al registro y descripción de almejas y mejillones abisales, fundamentales en los ecosistemas marinos.",
    highlight: "Identifica bivalvos del fondo oceánico",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=35617&datos_academicos=yes"
  },
  {
    id: 19,
    name: "Dr. Gregorio Bigatti",
    role: "Investigador en biodiversidad marina",
    institution: "IBIOMAR (CONICET) - Puerto Madryn",
    specialty: "Biología integrativa de invertebrados",
    description: "Integra conocimientos anatómicos, ecológicos y genéticos para entender la diversidad de invertebrados marinos.",
    highlight: "Enfoque multidisciplinario en invertebrados",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=29358&datos_academicos=yes"
  },
  {
    id: 20,
    name: "Dr. Ignacio Chiesa",
    role: "Investigador en crustáceos",
    institution: "CADIC (CONICET) - Ushuaia",
    specialty: "Sistemática de anfípodos",
    description: "Trabaja con pequeños crustáceos de zonas frías y profundas, claves para la cadena alimentaria marina.",
    highlight: "Especialista en anfípodos australes",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=34904&datos_academicos=yes"
  },
  {
    id: 21,
    name: "Dra. Graziella Bozzano",
    role: "Geóloga marina",
    institution: "Servicio de Hidrografía Naval - CONICET",
    specialty: "Procesos sedimentarios en ambientes profundos",
    description: "Analiza cómo se forman los sedimentos y relieves submarinos del cañón, aportando al contexto físico del ecosistema.",
    highlight: "Estudia la geología del fondo marino",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?keywords=&id=50766&datos_academicos=yes"
  },
  {
    id: 22,
    name: "Dr. Santiago Herrera",
    role: "Investigador en ADN ambiental",
    institution: "Smithsonian NMNH",
    specialty: "Diversidad de corales marinos con ADN ambiental",
    description: "Aplica técnicas moleculares para identificar especies a partir de trazas genéticas en el agua. Clave en muestreos no invasivos.",
    highlight: "Detecta biodiversidad con análisis de ADN",
    profileLink: "https://orcid.org/0000-0001-7204-9434",
    profilePhoto: "/src/assets/scientists/herrera.jpg"
  },
  {
    id: 23,
    name: "Dra. Nadia Cerino",
    role: "Investigadora en corales",
    institution: "Prefectura Naval Argentina",
    specialty: "Taxonomía y distribución de corales blandos",
    description: "Contribuye a la clasificación de octocorales, ampliando el conocimiento de su distribución en el talud sudoccidental.",
    highlight: "Especialista en octocorales del Atlántico Sur",
    profileLink: "https://www.linkedin.com/in/nadia-cerino-09a41563/?originalSubdomain=ar"
  },
  {
    id: 24,
    name: "Dr. Guido Pastorino",
    role: "Investigador en moluscos",
    institution: "Museo Argentino de Ciencias Naturales - CONICET",
    specialty: "Sistemática y biogeografía de moluscos marinos",
    description: "Tiene una amplia trayectoria en el estudio de la evolución y distribución de caracoles y almejas marinas.",
    highlight: "Investigador senior en malacología",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=32722&datos_academicos=yes"
  },
  {
    id: 25,
    name: "Dra. Cristina Dambonerea",
    role: "Investigadora en invertebrados planos",
    institution: "Facultad de Cs. Naturales y Museo - UNLP",
    specialty: "Diversidad de turbelarios",
    description: "Estudia gusanos planos marinos, un grupo poco explorado que cumple funciones clave en los sedimentos.",
    highlight: "Especialista en turbelarios marinos",
    profileLink: "https://www.conicet.gov.ar/new_scp/detalle.php?id=19886&datos_academicos=yes&keywords="
  },
  {
    id: 26,
    name: "Dra. Johanna Weston",
    role: "Becaria postdoctoral en conectividad marina",
    institution: "Woods Hole Oceanographic Institution",
    specialty: "Biodiversidad y conectividad de ecosistemas marinos",
    description: "Busca entender cómo se conectan las comunidades del fondo marino a través de corrientes y procesos evolutivos.",
    highlight: "Estudia conectividad ecológica entre hábitats",
    profileLink: "https://directory.whoi.edu/profile/johanna-weston/"
  }
]; 