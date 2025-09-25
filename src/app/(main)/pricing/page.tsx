import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Mensual",
    price: "$19",
    period: "/mes",
    description: "Ideal para empezar a aprender a tu propio ritmo.",
    features: [
      "Acceso a todos los cursos",
      "Nuevos cursos cada mes",
      "Certificados de finalización",
    ],
    isPopular: false,
  },
  {
    name: "Anual",
    price: "$199",
    period: "/año",
    description: "El mejor valor para un aprendizaje continuo.",
    features: [
      "Acceso a todos los cursos",
      "Nuevos cursos cada mes",
      "Certificados de finalización",
      "Acceso a contenido exclusivo",
      "Soporte prioritario",
    ],
    isPopular: true,
  },
  {
    name: "Equipo",
    price: "Contacto",
    period: "",
    description: "Soluciones personalizadas para tu equipo o empresa.",
    features: [
      "Todo lo del plan Anual",
      "Panel de administración de equipo",
      "Reportes de progreso",
      "Facturación centralizada",
    ],
    isPopular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Elige tu Plan
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Invierte en tu futuro. Cancela en cualquier momento.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn("flex flex-col", plan.isPopular && "border-primary ring-2 ring-primary shadow-lg")}
          >
            <CardHeader className="relative">
              {plan.isPopular && (
                <div className="absolute top-0 right-4 -mt-3">
                  <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                </div>
              )}
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div>
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                {plan.name === "Equipo" ? "Contactar a Ventas" : "Empezar Ahora"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
