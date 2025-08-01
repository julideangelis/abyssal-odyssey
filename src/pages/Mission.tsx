import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Target, Microscope, ExternalLink, Globe } from "lucide-react";

const Mission = () => {
  const objectives = [
    {
      title: "Biodiversidad Bentónica",
      description: "Estudiar la distribución de especies de invertebrados, peces y corales en relación a factores ambientales y topográficos.",
      icon: <Microscope className="h-6 w-6" />,
      color: "primary"
    },
    {
      title: "Límite Biogeográfico",
      description: "Investigar cómo la convergencia de las corrientes de Brasil y Malvinas afecta la vida marina en el cañón.",
      icon: <Globe className="h-6 w-6" />,
      color: "accent"
    },
    {
      title: "Impacto Humano",
      description: "Monitorear la presencia de basura marina y microplásticos en estos ecosistemas remotos y vulnerables.",
      icon: <Target className="h-6 w-6" />,
      color: "destructive"
    }
  ];

  const timeline = [
    { date: "22 de Julio 2025", event: "Inicio de la expedición", status: "completed" },
    { date: "25-30 de Julio", event: "Primeras inmersiones y descubrimientos virales", status: "completed" },
    { date: "31 de Julio", event: "Observación de 'Batatita' en vivo", status: "completed" },
    { date: "1-10 de Agosto", event: "Inmersiones en curso", status: "current" },
    { date: "11 de Agosto", event: "Finalización prevista", status: "upcoming" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-abyss via-ocean-deep to-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-creature-coral/20 text-creature-coral border-creature-coral/30">
            🗺️ Expedición Histórica
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-ocean-surface via-creature-coral to-primary bg-clip-text text-transparent">
            Underwater Oases of Mar del Plata Canyon
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            La campaña <strong>Talud Continental IV</strong> es una expedición pionera que explora el cañón submarino 
            frente a Mar del Plata. Una misión que representa un salto tecnológico y científico sin precedentes 
            para Argentina.
          </p>
        </div>

        {/* Mission Overview */}
        <div className="mb-16">
          <Card className="bg-card/60 backdrop-blur-sm border-ocean-deep">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    La Misión
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">19-20 días de expedición</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="text-muted-foreground">Cañón de Mar del Plata, Argentina</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-creature-coral" />
                      <span className="text-muted-foreground">Hasta 3,900 metros de profundidad</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-6">
                    Es la primera vez que se utiliza en aguas argentinas un ROV de última generación 
                    capaz de capturar video en ultra alta definición y recolectar muestras sin alterar 
                    el entorno. La expedición se transmite en vivo, acercando la ciencia al público general.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-ocean-deep to-ocean-abyss p-8 rounded-lg">
                    <div className="text-6xl mb-4 animate-float">🌊</div>
                    <h3 className="text-xl font-bold text-ocean-surface mb-2">Primera Vez en Argentina</h3>
                    <p className="text-ocean-shallow text-sm">ROV de última generación explorando el Atlántico Sudoccidental</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Objetivos Científicos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card 
                key={index} 
                className="group bg-card/60 backdrop-blur-sm border-ocean-deep hover:border-primary/50 transition-all duration-500 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className={`bg-${objective.color}/20 p-4 rounded-full inline-block text-${objective.color} group-hover:animate-pulse`}>
                      {objective.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {objective.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Cronología de la Expedición
          </h2>
          <Card className="bg-card/60 backdrop-blur-sm border-ocean-deep">
            <CardContent className="p-8">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                      item.status === 'completed' ? 'bg-primary' :
                      item.status === 'current' ? 'bg-accent animate-pulse' :
                      'bg-muted'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-foreground">{item.date}</span>
                        <Badge className={`text-xs ${
                          item.status === 'completed' ? 'bg-primary/20 text-primary border-primary/30' :
                          item.status === 'current' ? 'bg-accent/20 text-accent border-accent/30' :
                          'bg-muted/20 text-muted-foreground border-muted/30'
                        }`}>
                          {item.status === 'completed' ? '✓ Completado' :
                           item.status === 'current' ? '🔄 En curso' :
                           '⏳ Próximo'}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="text-center">
          <Card className="bg-card/60 backdrop-blur-sm border border-ocean-deep max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Impacto Científico y Social
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-3 text-accent">Legado Científico</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    La expedición generará abundantes nuevos datos: especies, muestras, mapas y modelos 3D 
                    que nutrirán investigaciones en los años venideros. Todas las muestras biológicas serán 
                    depositadas en las colecciones del Museo Argentino de Ciencias Naturales.
                  </p>
                  <h4 className="font-semibold text-lg mb-3 text-primary">Impacto Social</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Miles de personas siguen día a día las inmersiones, acercando la ciencia al público general. 
                    Esta experiencia de <strong>ciencia abierta</strong> ha creado un fenómeno viral que democratiza 
                    el acceso al descubrimiento científico.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">∞</div>
                    <div className="text-sm text-muted-foreground">Especies por descubrir</div>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent">100K+</div>
                    <div className="text-sm text-muted-foreground">Espectadores del stream</div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Seguir en YouTube
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Mission;