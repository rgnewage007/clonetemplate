import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Instrucciones claras",
    description:
      "La máquina guía al usuario con instrucciones claras, sencillas y visibles directamente en pantalla, facilitando su uso para cualquier persona.",
    image: image4,
  },
  {
    title: "Interfaz intuitiva",
    description:
      "La dispensación es fácil de usar y está acompañado de instrucciones en audio integrado, ideal para todo tipo de usuarios, incluyendo personas con discapacidad visual.",
    image: image3,
  },
  {
    title: "Plataforma integral",
    description:
      "Si ya eres cliente, tienes acceso a nuestra plataforma integral de monitoreo, donde podrás consultar ventas, bitácoras, y manuales tanto de la vending como del proceso completo de purificación de agua.",
    image: image,
  },
];

const featureList: string[] = [
  "Lista para operar",
  "Asesoría 24/7",
  "Alta compatibilidad",
  "Precios competitivos",
  "Asesoría de expertos",
  "Wifi Integrado",
  "Plataforma Integrada",
  "Información para la comunidad",

];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Excelentes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Características imperiales
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
