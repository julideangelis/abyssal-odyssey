import CreatureCard from "@/components/CreatureCard";
import { creatures } from "@/data/creatures";
import { funfacts } from "@/data/funfacts";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const Creatures = () => {

  const [funfactsActual, setfunfactsActual] = useState(() => {
    const random = Math.floor(Math.random() * funfacts.length);
    return funfacts[random];
  });

  useEffect(() => {
    if (funfacts.length > 0) {
      const random = Math.floor(Math.random() * funfacts.length);
      setfunfactsActual(funfacts[random]);
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-abyss via-ocean-deep to-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            🐙 Bestiario Abisal
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-ocean-surface via-primary to-accent bg-clip-text text-transparent">
            Criaturas del Abismo
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conoce a los "personajes" más famosos de la expedición submarina. 
            Estas criaturas abisales capturaron la imaginación del público y se volvieron virales durante la transmisión en vivo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {creatures.map((creature) => (
            <CreatureCard key={creature.id} creature={creature} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/60 backdrop-blur-sm border border-ocean-deep rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Sabías que...?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {funfactsActual.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creatures;