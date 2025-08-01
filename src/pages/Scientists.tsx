import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, User, Award, MapPin } from "lucide-react";

const Scientists = () => {
  const scientists = [
    {
      name: "Dr. Daniel Lauretta",
      role: "Jefe Científico de Talud Continental IV",
      institution: "Museo Argentino de Ciencias Naturales (MACN-CONICET)",
      specialty: "Biodiversidad bentónica",
      description: "Lidera la expedición histórica en colaboración con el Schmidt Ocean Institute. Su trabajo se centra en la documentación de especies de aguas profundas y la conservación de ecosistemas abisales.",
      highlight: "Más de 30 científicos argentinos bajo su liderazgo"
    },
    {
      name: "Dr. Mariano Martínez",
      role: "Especialista en Holoturias",
      institution: "CONICET-IIMyC",
      specialty: "Taxonomía de equinodermos abisales",
      description: "Describió a Benthodytes violeta ('Batatita') en 2014. Durante esta campaña tuvo la experiencia emotiva de observar su especie viva por primera vez en su hábitat natural.",
      highlight: "Primer científico en ver 'Batatita' viva"
    },
    {
      name: "Dra. Pamela Rivadeneira",
      role: "Taxonomista de Invertebrados",
      institution: "UBA - MACN",
      specialty: "Equinodermos (estrellas de mar)",
      description: "Experta en la identificación y clasificación de equinodermos abisales. Trabaja en la documentación de especies como la famosa 'estrella culona' Patricio.",
      highlight: "Especialista en estrellas de mar profundas"
    },
    {
      name: "Dr. Martín Brogger",
      role: "Investigador de Impacto Humano",
      institution: "Universidad Nacional de Mar del Plata - CONICET",
      specialty: "Peces abisales y contaminación marina",
      description: "Marino marplatense que estudia el impacto humano en ambientes remotos. Ha documentado la presencia de residuos plásticos incluso en las mayores profundidades.",
      highlight: "Documenta basura marina hasta 3,900m de profundidad"
    },
    {
      name: "Dra. Soledad Leonardi",
      role: "Directora IBIOMAR",
      institution: "CONICET-IBIOMAR",
      specialty: "Biodiversidad marina",
      description: "Directora del Instituto de Biología Marina y Pesquera. Celebró en redes sociales los descubrimientos de la expedición y contribuye al análisis de las especies halladas.",
      highlight: "Líder en biodiversidad marina argentina"
    },
    {
      name: "Equipo ROV SuBastian",
      role: "Pilotos y Tecnólogos",
      institution: "Schmidt Ocean Institute",
      specialty: "Operación de vehículos submarinos",
      description: "Randy Prickett y su equipo maniobran el ROV SuBastian con precisión milimétrica, capturando imágenes en 4K y recolectando muestras científicas valiosas.",
      highlight: "Operan hasta 4,500m de profundidad"
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