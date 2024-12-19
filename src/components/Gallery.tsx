import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const galleryItems = [
  {
    image: "/images/photo1.jpg",
    description: "Every stroke tells a story, every color breathes life.",
  },
  {
    image: "/images/photo2.jpg",
    description: "Where creativity meets passion — a glimpse into my world",
  },
  {
    image: "/images/photo3.jpg",
    description: "Your vision is your preview of life's coming attractions",
  },
];

export const Gallery = () => {
  return (
    <section className="py-20 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none">
                  <CardContent className="p-2">
                    <div className="overflow-hidden rounded-lg aspect-square">
                      <img
                        src={item.image}
                        alt={`Gallery image ${index + 1}`}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <p className="mt-4 text-sm text-center text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </motion.div>
    </section>
  );
};