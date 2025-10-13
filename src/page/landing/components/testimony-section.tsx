import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "@/assets/derapr.jpg";
import { motion } from "framer-motion";

type Temoin = {
  name: string;
  description: string;
};

export const TestimonySection = () => {
  const temoin: Temoin[] = [
    {
      name: "Marie Rasoamalala",
      description:
        "Grâce à la formation de qualité à ASJA, j'ai pu décrocher un poste de développeuse web dans une entreprise internationale. Les professeurs sont excellents et le programme est très complet.",
    },
    {
      name: "David Andriamanana",
      description:
        "L'université ASJA m'a donné toutes les compétences nécessaires pour réussir dans le domaine de l'informatique. Je travaille maintenant comme chef de projet IT et je n'aurais pas pu y arriver sans cette formation.",
    },
    {
      name: "Paul Rakotondrabe",
      description:
        "Formation excellente qui m’a permis de lancer ma propre startup tech. Les compétences acquises à ASJA sont directement applicables dans le monde professionnel.",
    },
    {
      name: "Sarah Randrianarisoa",
      description:
        "La formation à ASJA m’a permis de découvrir ma passion pour la cybersécurité. Aujourd’hui, je travaille comme analyste sécurité dans une entreprise locale. Les cours pratiques m’ont énormément aidée à progresser rapidement.",
    },
    {
      name: "Jean Michel Ravelomanana",
      description:
        "Grâce à l’accompagnement des enseignants d’ASJA, j’ai pu créer ma première application mobile dès la deuxième année. L’université m’a donné confiance et les bases solides pour me lancer dans le développement.",
    },
  ];
  return (
    <section
      id="temoignages"
      className="bg-zinc-100 dark:bg-zinc-900 h-full transition-all duration-500 p-0 lg:p-10 md:p-5"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-6xl font-bold text-green-700 p-10">Témoignage</h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-w-3/4 lg:max-w-2/3 md:max-w-2/3 "
        >
          <CarouselContent>
            {temoin.map((temoin, key) => (
              <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="dark:bg-zinc-800 transition-all m-10duration-500 h-120">
                    <CardContent className="flex h-full flex-col aspect-square items-center justify-center ">
                      <div className="flex h-40 w-40 justify-center items-center overflow-hidden">
                        <img className="rounded-[50%] w-full h-full border-2" src={Image} alt="" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold p-5">
                          {temoin.name}
                        </h3>
                        <p className="px-2">{temoin.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  );
};
