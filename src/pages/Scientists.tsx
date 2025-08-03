import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, User, Award, MapPin } from "lucide-react";

const Scientists = () => {
  const scientists = [
    {
      name: "Dr. Daniel Lauretta",
      role: "Jefe científico de la expedición",
      institution: "Museo Argentino de Ciencias Naturales - CONICET",
      specialty: "Diversidad y biología reproductiva de cnidarios bentónicos",
      description: "Lidera la expedición Talud Continental IV. Especialista en corales de profundidad y hábitats bentónicos vulnerables del Atlántico Sur.",
      highlight: "Coordinador general del equipo científico en la campaña 2025"
    },
    {
      name: "Dr. Emiliano Ocampo",
      role: "Investigador de crustáceos decápodos",
      institution: "IIMyC (UNMDP - CONICET)",
      specialty: "Evolución y respuesta a estresores en crustáceos",
      description: "Estudia cómo los cangrejos y langostas de profundidad se adaptan a los cambios del entorno. Participa activamente en la caracterización de especies del talud.",
      highlight: "Especialista en adaptaciones al estrés ambiental"
    },
    {
      name: "Rodrigo Calderón",
      role: "Becario doctoral en taxonomía de corales",
      institution: "Museo Argentino de Ciencias Naturales - CONICET",
      specialty: "Taxonomía de corales duros del Atlántico Sudoccidental",
      description: "Doctorando dedicado a clasificar y estudiar corales escleractinios hallados en la expedición. Su trabajo permite comprender mejor los ecosistemas de profundidad.",
      highlight: "Documenta corales duros del Atlántico sur"
    },
    {
      name: "Dr. Diego Urteaga",
      role: "Investigador en moluscos",
      institution: "Museo Argentino de Ciencias Naturales - CONICET",
      specialty: "Moluscos poliplacóforos, fósiles y actuales",
      description: "Investiga linajes antiguos de moluscos como los chitones, claves para entender la evolución y diversidad del fondo marino profundo.",
      highlight: "Especialista en chitones fósiles y modernos"
    },
    {
      name: "Dr. Mariano Martínez",
      role: "Investigador en equinodermos",
      institution: "Museo Argentino de Ciencias Naturales - CONICET",
      specialty: "Taxonomía y reproducción de equinodermos",
      description: "Conocido por describir a 'Batatita', fue protagonista de uno de los momentos más emotivos de la expedición al verlo vivo por primera vez.",
      highlight: "Descubridor del icónico 'Batatita'"
    },
    {
      name: "Dr. Leonel Pacheco",
      role: "Becario postdoctoral",
      institution: "Museo Argentino de Ciencias Naturales - CONICET",
      specialty: "Taxonomía de bivalvos",
      description: "Trabaja en la identificación y clasificación de almejas de profundidad, aportando al registro biológico del Mar Argentino.",
      highlight: "Especialista en bivalvos abisales"
    },
    {
      name: "Dra. Renata Pertossi",
      role: "Becaria postdoctoral",
      institution: "Museo Argentino de Ciencias Naturales - CONICET",
      specialty: "Crinoideos: taxonomía, reproducción y biogeografía",
      description: "Estudia los lirios de mar (crinoideos) del talud, organismos clave para entender la estructura de la fauna bentónica.",
      highlight: "Especialista en crinoideos de profundidad"
    },
    {
      name: "Jessica Risaro",
      role: "Becaria doctoral",
      institution: "Museo Argentino de Ciencias Naturales - CONICET",
      specialty: "Taxonomía y reproducción de corales blandos",
      description: "Contribuye a la identificación de octocorales, sumando datos clave sobre su distribución en el Cañón de Mar del Plata.",
      highlight: "Investiga octocorales del talud continental"
    },
    {
      name: "Dra. Valeria Teso",
      role: "Investigadora en moluscos",
      institution: "Museo Argentino de Ciencias Naturales - CONICET",
      specialty: "Taxonomía y ecología de gasterópodos marinos",
      description: "Estudia caracoles de profundidad, enfocándose en su rol ecológico y su adaptación al ambiente abisal.",
      highlight: "Referente en gasterópodos del Atlántico Sur"
    },
    {
      name: "Dra. Noelia Sánchez",
      role: "Becaria postdoctoral",
      institution: "Museo Argentino de Ciencias Naturales - CONICET",
      specialty: "Gasterópodos de aguas profundas",
      description: "Su trabajo apunta a descubrir nuevas especies y comprender la evolución de caracoles que habitan zonas extremas.",
      highlight: "Especialista en caracoles abisales"
    },
    {
      name: "Dr. Nahuel Farías",
      role: "Investigador en crustáceos",
      institution: "IIMyC (UNMDP - CONICET)",
      specialty: "Biogeografía y ecología de decápodos",
      description: "Analiza patrones de distribución de cangrejos y langostinos a lo largo del talud argentino.",
      highlight: "Experto en crustáceos del Mar Argentino"
    },
    {
      name: "Dr. Ezequiel Mabragaña",
      role: "Investigador en peces cartilaginosos",
      institution: "IIMyC (UNMDP - CONICET)",
      specialty: "Taxonomía y ecología de rayas",
      description: "Registra y estudia especies de rayas abisales, muchas de las cuales aparecen por primera vez en estas imágenes.",
      highlight: "Especialista en rayas de aguas profundas"
    },
    {
      name: "Florencia Matusevich",
      role: "Becaria doctoral",
      institution: "IIMyC (UNMDP - CONICET)",
      specialty: "Taxonomía y filogenia de rayas",
      description: "Colabora en la identificación de nuevas especies de rayas del talud, mediante análisis morfológicos y genéticos.",
      highlight: "Estudia evolución de rayas abisales"
    },
    {
      name: "Dr. Emanuel Pereira",
      role: "Becario postdoctoral",
      institution: "IBBEA (UBA - CONICET)",
      specialty: "Sistemática y biogeografía de isópodos",
      description: "Investiga la diversidad de pequeños crustáceos del fondo marino, fundamentales para el equilibrio del ecosistema.",
      highlight: "Especialista en isópodos bentónicos"
    },
    {
      name: "Dra. Brenda Doti",
      role: "Investigadora en isópodos",
      institution: "IBBEA (UBA - CONICET)",
      specialty: "Taxonomía de isópodos de aguas profundas",
      description: "Lidera estudios sobre pequeños crustáceos adaptados a ambientes extremos, claves en la red trófica profunda.",
      highlight: "Referente en isópodos abisales"
    },
    {
      name: "Dra. María Carla de Aranzamendi",
      role: "Investigadora en invertebrados",
      institution: "IDEA (CONICET) - Córdoba",
      specialty: "Taxonomía de ascideas",
      description: "Estudia ascidias marinas (organismos filtradores), contribuyendo al conocimiento de especies poco documentadas en profundidad.",
      highlight: "Especialista en ascidias del talud"
    },
    {
      name: "Dr. Martín Brogger",
      role: "Investigador de impacto humano",
      institution: "IBIOMAR (CONICET) - Puerto Madryn",
      specialty: "Equinodermos y contaminación marina",
      description: "Estudia cómo los residuos humanos afectan la biodiversidad abisal, incluyendo estrellas, erizos y pepinos de mar.",
      highlight: "Documenta basura marina hasta 3.900 m"
    },
    {
      name: "Dr. Javier Signorelli",
      role: "Investigador en moluscos",
      institution: "IBIOMAR (CONICET) - Puerto Madryn",
      specialty: "Taxonomía de bivalvos",
      description: "Aporta al registro y descripción de almejas y mejillones abisales, fundamentales en los ecosistemas marinos.",
      highlight: "Identifica bivalvos del fondo oceánico"
    },
    {
      name: "Dr. Gregorio Bigatti",
      role: "Investigador en biodiversidad marina",
      institution: "IBIOMAR (CONICET) - Puerto Madryn",
      specialty: "Biología integrativa de invertebrados",
      description: "Integra conocimientos anatómicos, ecológicos y genéticos para entender la diversidad de invertebrados marinos.",
      highlight: "Enfoque multidisciplinario en invertebrados"
    },
    {
      name: "Dr. Ignacio Chiesa",
      role: "Investigador en crustáceos",
      institution: "CADIC (CONICET) - Ushuaia",
      specialty: "Sistemática de anfípodos",
      description: "Trabaja con pequeños crustáceos de zonas frías y profundas, claves para la cadena alimentaria marina.",
      highlight: "Especialista en anfípodos australes"
    },
    {
      name: "Dra. Graziella Bozzano",
      role: "Geóloga marina",
      institution: "Servicio de Hidrografía Naval - CONICET",
      specialty: "Procesos sedimentarios en ambientes profundos",
      description: "Analiza cómo se forman los sedimentos y relieves submarinos del cañón, aportando al contexto físico del ecosistema.",
      highlight: "Estudia la geología del fondo marino"
    },
    {
      name: "Dr. Santiago Herrera",
      role: "Investigador en ADN ambiental",
      institution: "Smithsonian NMNH",
      specialty: "Diversidad de corales marinos con ADN ambiental",
      description: "Aplica técnicas moleculares para identificar especies a partir de trazas genéticas en el agua. Clave en muestreos no invasivos.",
      highlight: "Detecta biodiversidad con análisis de ADN"
    },
    {
      name: "Dra. Nadia Cerino",
      role: "Investigadora en corales",
      institution: "Prefectura Naval Argentina",
      specialty: "Taxonomía y distribución de corales blandos",
      description: "Contribuye a la clasificación de octocorales, ampliando el conocimiento de su distribución en el talud sudoccidental.",
      highlight: "Especialista en octocorales del Atlántico Sur"
    },
    {
      name: "Dr. Guido Pastorino",
      role: "Investigador en moluscos",
      institution: "Museo Argentino de Ciencias Naturales - CONICET",
      specialty: "Sistemática y biogeografía de moluscos marinos",
      description: "Tiene una amplia trayectoria en el estudio de la evolución y distribución de caracoles y almejas marinas.",
      highlight: "Investigador senior en malacología"
    },
    {
      name: "Dra. Cristina Dambonerea",
      role: "Investigadora en invertebrados planos",
      institution: "Facultad de Cs. Naturales y Museo - UNLP",
      specialty: "Diversidad de turbelarios",
      description: "Estudia gusanos planos marinos, un grupo poco explorado que cumple funciones clave en los sedimentos.",
      highlight: "Especialista en turbelarios marinos"
    },
    {
      name: "Dra. Johanna Weston",
      role: "Becaria postdoctoral en conectividad marina",
      institution: "Woods Hole Oceanographic Institution",
      specialty: "Biodiversidad y conectividad de ecosistemas marinos",
      description: "Busca entender cómo se conectan las comunidades del fondo marino a través de corrientes y procesos evolutivos.",
      highlight: "Estudia conectividad ecológica entre hábitats"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-abyss via-ocean-deep to-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
            👩‍🔬 Equipo Científico
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-ocean-surface via-accent to-primary bg-clip-text text-transparent">
            Los Exploradores del Abismo
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conoce a los científicos argentinos y expertos internacionales que hacen posible esta expedición histórica. 
            Un equipo multidisciplinario de más de 30 investigadores del CONICET trabajando codo a codo con el Schmidt Ocean Institute.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scientists.map((scientist, index) => (
            <Card 
              key={index} 
              className="group bg-card/60 backdrop-blur-sm border-ocean-deep hover:border-accent/50 transition-all duration-500"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-accent/20 p-3 rounded-full">
                      <User className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {scientist.name}
                      </h3>
                      <p className="text-sm text-accent font-medium">
                        {scientist.role}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{scientist.institution}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>{scientist.specialty}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {scientist.description}
                  </p>

                  <div className="pt-4 border-t border-ocean-deep">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                      ⭐ {scientist.highlight}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card/60 backdrop-blur-sm border border-ocean-deep max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Colaboración Internacional
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Esta expedición representa una colaboración histórica entre científicos argentinos del CONICET 
                    y el prestigioso Schmidt Ocean Institute. El trabajo conjunto permite acceder a tecnología 
                    de punta como el ROV SuBastian y el buque de investigación R/V Falkor (too).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Los investigadores abordan desde biodiversidad bentónica hasta ADN ambiental, 
                    carbono azul y dinámica de sedimentos, creando un panorama integral del ecosistema abisal argentino.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">30+</div>
                    <div className="text-muted-foreground">Científicos argentinos</div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver más en CONICET
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Scientists;