import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">About Me</h2>
              <p className="text-lg text-muted-foreground">
              My name is Priyanka Nath, born in 2004 in Lala, Assam, India. I began my educational journey at Primrose English Medium School, where I studied from KG 1 to Class 10. I then pursued my higher secondary education in the science stream at Ramanuj Gupta Senior Secondary School. Currently, I am pursuing a BSc in Biotechnology from Assam down town University.

Beyond academics, I have a passion for painting, which allows me to express my creativity. I also have a deep love for pets and animals, finding joy in their companionship. My personality leans toward being a little extroverted—I enjoy talking and connecting with others.

I am equally passionate about technology and coding. With a curiosity-driven mindset, I explored computer science concepts and taught myself to become a front-end and back-end developer. Through self-learning from online resources, I developed a strong foundation in coding, which I continue to build upon.

Always eager to explore new opportunities and challenges, I strive to grow both academically and professionally.
              </p>
              <div className="flex items-center space-x-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/images/profile.jpg" alt="Profile" />
                  <AvatarFallback>PN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <Card className="overflow-hidden">
              <img
                src="/images/about.jpg"
                alt="About"
                className="w-full h-[400px] object-cover"
              />
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};