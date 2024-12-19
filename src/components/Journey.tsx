import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const Journey = () => {
  const journeyEntries = [
    {
      title: "Went to Assam Down Town University",
      description: "Currently pursuing Bsc in Biotechnology at Guwahati, Assam ,India",
      dateStart: "2023",
      dateEnd: "Present",
    },
    {
      title: "Pursued Higher Secondary Education at silchar ,Assam ,India.",
      description: "Went to Ramanuj Gupta Senior Secondary School",
      dateStart: "2022",
      dateEnd: "2020",
    },
    {
      title: "Pursued Elementary Education at lala",
      description: "Went to Primrose English Medium School",
      dateStart: "2020",
      dateEnd: "2007",
    },
  ];

  return (
    <section id="journey" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">My Journey</h2>
          <div className="space-y-8">
            {journeyEntries.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{entry.title}</h3>
                        <p className="text-muted-foreground mt-2">
                          {entry.description}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {entry.dateStart} - {entry.dateEnd}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};