import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Ruler, Search } from "lucide-react";

interface CreatureData {
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

interface CreatureCardProps {
  creature: CreatureData;
}

const CreatureCard = ({ creature }: CreatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAccentClass = (color: string) => {
    switch (color) {
      case "pink":
        return "border-creature-pink bg-creature-pink/10 text-creature-pink";
      case "purple":
        return "border-creature-purple bg-creature-purple/10 text-creature-purple";
      case "coral":
        return "border-creature-coral bg-creature-coral/10 text-creature-coral";
      default:
        return "border-primary bg-primary/10 text-primary";
    }
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-card/60 backdrop-blur-sm border-ocean-deep hover:border-primary/50 transition-all duration-500 animate-float"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${creature.id * 0.2}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={creature.imageUrl}
          alt={creature.nickname}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        <Badge 
          className={`absolute top-3 right-3 ${getAccentClass(creature.accentColor)} border-2`}
        >
          {creature.group}
        </Badge>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              "{creature.nickname}"
            </h3>
            <p className="text-sm text-muted-foreground italic">
              {creature.scientificName}
            </p>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{creature.depth}</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                variant="outline"
              >
                <Search className="h-4 w-4 mr-2" />
                Ver detalles
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  "{creature.nickname}"
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={creature.imageUrl}
                      alt={creature.nickname}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Datos Científicos</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Nombre científico:</strong> {creature.scientificName}</p>
                        <p><strong>Grupo:</strong> {creature.group}</p>
                        <p><strong>Profundidad:</strong> {creature.depth}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Dato Curioso</h4>
                      <p className="text-sm text-muted-foreground">
                        {creature.funFact}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Descripción</h4>
                  <p className="text-muted-foreground">
                    {creature.description}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>

      {/* Animated background effect */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${
          creature.accentColor === "pink" ? "from-creature-pink" :
          creature.accentColor === "purple" ? "from-creature-purple" :
          "from-creature-coral"
        } to-transparent pointer-events-none`}
      />
    </Card>
  );
};

export default CreatureCard;