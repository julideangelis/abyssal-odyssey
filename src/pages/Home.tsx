import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Play, Waves, ArrowRight, Users, Bot, Map } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-abyss via-ocean-deep to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 opacity-10 animate-shimmer" />
        
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            🔴 EN VIVO AHORA
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-ocean-surface via-primary to-accent bg-clip-text text-transparent animate-shimmer">
            Expedición Abisal
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-ocean-shallow mb-6">
            Underwater Oases of Mar del Plata Canyon
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Descubre las criaturas más fascinantes del océano profundo argentino. 
            Una expedición histórica que explora el Cañón de Mar del Plata hasta 3,900 metros de profundidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="https://www.youtube.com/watch?v=Fa-iwwxiDr0" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Play className="h-5 w-5 mr-2" />
                Ver Transmisión en Vivo
              </Button>
            </a>
            <Link to="/creatures">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3">
                <Waves className="h-5 w-5 mr-2" />
                Explorar Criaturas
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className="absolute top-1/4 left-10 text-4xl animate-float" style={{animationDelay: "0s"}}>🐙</div>
        <div className="absolute top-1/3 right-16 text-3xl animate-float" style={{animationDelay: "1s"}}>⭐</div>
        <div className="absolute bottom-1/4 left-1/4 text-5xl animate-float" style={{animationDelay: "2s"}}>🦑</div>
        <div className="absolute bottom-1/3 right-1/4 text-3xl animate-float" style={{animationDelay: "3s"}}>🦀</div>
      </section>

      {/* Live Stream Embed */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Transmisión en Vivo
            </h2>
            <p className="text-muted-foreground text-lg">
              Sumérgete en tiempo real a las profundidades del Mar Argentino
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border-ocean-deep">
            <CardContent className="p-6">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/Fa-iwwxiDr0?autoplay=1&mute=1"
                  title="Expedición Abisal - Transmisión en Vivo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
                  🔴 Schmidt Ocean Institute - ROV SuBastian
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Explora la Expedición
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/creatures">
              <Card className="group cursor-pointer bg-card/60 backdrop-blur-sm border-ocean-deep hover:border-primary/50 transition-all duration-300 animate-float" style={{animationDelay: "0s"}}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">🦑</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Criaturas Abisales</h3>
                  <p className="text-muted-foreground mb-4">Conoce a Patricio, Batatita y más personajes virales</p>
                  <ArrowRight className="h-5 w-5 mx-auto group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/scientists">
              <Card className="group cursor-pointer bg-card/60 backdrop-blur-sm border-ocean-deep hover:border-primary/50 transition-all duration-300 animate-float" style={{animationDelay: "0.5s"}}>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">Equipo Científico</h3>
                  <p className="text-muted-foreground mb-4">Los investigadores detrás de los descubrimientos</p>
                  <ArrowRight className="h-5 w-5 mx-auto group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/rov">
              <Card className="group cursor-pointer bg-card/60 backdrop-blur-sm border-ocean-deep hover:border-primary/50 transition-all duration-300 animate-float" style={{animationDelay: "1s"}}>
                <CardContent className="p-6 text-center">
                  <Bot className="h-12 w-12 mx-auto mb-4 text-accent group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">ROV SuBastian</h3>
                  <p className="text-muted-foreground mb-4">El robot submarino que hace posible la exploración</p>
                  <ArrowRight className="h-5 w-5 mx-auto group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/mission">
              <Card className="group cursor-pointer bg-card/60 backdrop-blur-sm border-ocean-deep hover:border-primary/50 transition-all duration-300 animate-float" style={{animationDelay: "1.5s"}}>
                <CardContent className="p-6 text-center">
                  <Map className="h-12 w-12 mx-auto mb-4 text-creature-coral group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">La Misión</h3>
                  <p className="text-muted-foreground mb-4">Objetivos y contexto de la expedición histórica</p>
                  <ArrowRight className="h-5 w-5 mx-auto group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-ocean-deep/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-float" style={{animationDelay: "0s"}}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3,900m</div>
              <div className="text-muted-foreground">Profundidad máxima</div>
            </div>
            <div className="animate-float" style={{animationDelay: "0.5s"}}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">30+</div>
              <div className="text-muted-foreground">Científicos argentinos</div>
            </div>
            <div className="animate-float" style={{animationDelay: "1s"}}>
              <div className="text-3xl md:text-4xl font-bold text-creature-coral mb-2">20</div>
              <div className="text-muted-foreground">Días de expedición</div>
            </div>
            <div className="animate-float" style={{animationDelay: "1.5s"}}>
              <div className="text-3xl md:text-4xl font-bold text-creature-purple mb-2">∞</div>
              <div className="text-muted-foreground">Descubrimientos</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;