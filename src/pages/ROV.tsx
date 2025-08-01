import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, Camera, Zap, Waves, ExternalLink } from "lucide-react";

const ROV = () => {
  const specifications = [
    { label: "Profundidad máxima", value: "4,500 metros", icon: "🌊" },
    { label: "Dimensiones", value: "2.7 × 2.2 × 1.8 m", icon: "📏" },
    { label: "Peso", value: "~3.2 toneladas", icon: "⚖️" },
    { label: "Velocidad", value: "Hasta 3 nudos", icon: "⚡" },
    { label: "Cámaras", value: "4K pan-tilt-zoom", icon: "📹" },
    { label: "Iluminación", value: "LEDs de alta potencia", icon: "💡" }
  ];

  const capabilities = [
    {
      title: "Sistemas de Video Avanzados",
      description: "Cámaras 4K de tipo pan-tilt-zoom que permiten capturar imágenes ultra-HD de la vida abisal con detalles nunca antes vistos.",
      icon: <Camera className="h-8 w-8" />
    },
    {
      title: "Brazos Manipuladores",
      description: "Brazos robóticos precisos para muestreo delicado de especímenes, recolección de sedimentos y manipulación de instrumentos científicos.",
      icon: <Settings className="h-8 w-8" />
    },
    {
      title: "Sensores Científicos",
      description: "Equipado con sensores CTD, sonar multihaz, y sistemas de muestreo de agua para análisis químico y biológico.",
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: "Transmisión en Tiempo Real",
      description: "Cable de fibra óptica que permite la telepresencia científica, transmitiendo video HD desde las profundidades hasta la superficie.",
      icon: <Waves className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-abyss via-ocean-deep to-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
            🤖 Tecnología Submarina
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-ocean-surface via-accent to-primary bg-clip-text text-transparent">
            ROV SuBastian
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            El vehículo submarino operado remotamente que hace posible esta expedición histórica. 
            Un robot de última generación diseñado especialmente para la investigación de aguas profundas.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="mb-16">
          <Card className="bg-card/60 backdrop-blur-sm border-ocean-deep overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-r from-ocean-deep to-ocean-abyss flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4 animate-float">🤖</div>
                  <h2 className="text-3xl font-bold mb-2">ROV SuBastian en Acción</h2>
                  <p className="text-ocean-surface">Explorando las profundidades del Cañón de Mar del Plata</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
                    🔴 EN VIVO
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Specifications Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Especificaciones Técnicas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <Card 
                key={index} 
                className="group bg-card/60 backdrop-blur-sm border-ocean-deep hover:border-accent/50 transition-all duration-500 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{spec.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{spec.label}</h3>
                  <p className="text-2xl font-bold text-accent">{spec.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Capacidades del ROV
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card 
                key={index} 
                className="group bg-card/60 backdrop-blur-sm border-ocean-deep hover:border-primary/50 transition-all duration-500 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-3 rounded-full text-primary group-hover:animate-pulse">
                      {capability.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Schmidt Ocean Institute Info */}
        <div className="text-center">
          <Card className="bg-card/60 backdrop-blur-sm border border-ocean-deep max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Schmidt Ocean Institute
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    El ROV SuBastian forma parte del buque de investigación R/V Falkor (too) del Schmidt Ocean Institute. 
                    Esta organización sin fines de lucro se dedica a acelerar el descubrimiento oceánico mediante 
                    tecnología avanzada y colaboraciones científicas internacionales.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>"Poder contar con el ROV SuBastian es un lujo"</strong>, destaca el Dr. Lauretta. 
                    <em>"Nos permite ver en directo lo que ocurre a casi 4.000 m de profundidad con mínimo impacto. 
                    Es como tener un submarino con ojos súper sensibles."</em>
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 p-6 rounded-lg mb-4">
                    <div className="text-6xl mb-4 animate-float">🚢</div>
                    <div className="text-sm text-muted-foreground">R/V Falkor (too)</div>
                    <div className="text-lg font-bold text-accent">Buque de Investigación</div>
                  </div>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visitar Schmidt Ocean Institute
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

export default ROV;