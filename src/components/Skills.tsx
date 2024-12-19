import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const Skills = () => {
  const skills = [
    { name: "communication", category: "ambivert", proficiency: 90 },
    { name: "Problem Solving", category: "Skilled", proficiency: 85 },
    { name: "Paintings and arts", category: "Hobby", proficiency: 88 },
    { name: "Python", category: "Languages", proficiency: 82 },
    { name: "Love for Pets", category: "Puppies,kittens etc..", proficiency: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground mb-4">{skill.category}</p>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground mt-2">
                    {skill.proficiency}%
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};