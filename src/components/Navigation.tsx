import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Waves } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio", icon: "🌊" },
    { path: "/creatures", label: "Criaturas", icon: "🦑" },
    { path: "/scientists", label: "Científicos", icon: "👩‍🔬" },
    { path: "/rov", label: "ROV SuBastian", icon: "🤖" },
    { path: "/mission", label: "La Misión", icon: "🗺️" },
  ];

  const NavContent = () => (
    <nav className="flex flex-col space-y-4">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setIsOpen(false)}
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
            location.pathname === item.path
              ? "bg-primary text-primary-foreground"
              : "hover:bg-ocean-deep/50 text-foreground hover:text-ocean-surface"
          }`}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-ocean-deep">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Waves className="h-8 w-8 text-primary animate-wave" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Expedición Abisal</h1>
              <p className="text-sm text-muted-foreground">Mar del Plata Canyon</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-card">
              <div className="mt-8">
                <NavContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;