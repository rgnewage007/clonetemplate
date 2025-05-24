import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accesibilidad",
    description:
      "Diseñada para ser intuitiva, cómoda y segura, nuestra máquina es accesible para personas con movilidad reducida y compatible con la mayoría de las plantas purificadoras.",
  },
  {
    icon: <MapIcon />,
    title: "Comunidad",
    description:
      "Conectamos con nuestros clientes, generando información para su capacitación para crear redes de distribución de agua confiables, impulsando el desarrollo local y el acceso al agua de calidad.",
  },
  {
    icon: <PlaneIcon />,
    title: "Escalabilidad",
    description:
      "Gracias a su diseño modular y facilidad de operación, puedes empezar con una unidad y expandirte a múltiples ubicaciones con un sistema centralizado.",
  },
  {
    icon: <GiftIcon />,
    title: "Compatibilidad",
    description:
      "Nuestra máquina vending es compatible con la mayoría de sistemas de purificación de agua existentes, lo que facilita su integración sin necesidad de modificaciones complejas.",
  }

];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        ¿Comó  {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          operamos?{" "}
        </span>
        Guía paso a paso
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Hablamos con la verdad y tiramos la casa por la ventana por nuestros clientes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
