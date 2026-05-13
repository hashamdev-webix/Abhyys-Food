import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionBlockProps {
  image: string;
  title: string;
  children: ReactNode;
  reverse?: boolean;
  id?: string;
  cta?: ReactNode;
}

const SectionBlock = ({ image, title, children, reverse = false, id, cta }: SectionBlockProps) => {
  return (
    <section id={id} className="py-12 xl:py-16 2xl:py-20">
      <div className={`container mx-auto px-4 xl:px-6 2xl:px-8 flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 xl:gap-8 2xl:gap-12 items-center`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <img src={image} alt={title} className="rounded-xl shadow-lg w-full h-64 xl:h-80 2xl:h-96 object-cover" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-foreground mb-3 xl:mb-4 2xl:mb-6">{title}</h2>
          <div className="text-sm xl:text-base 2xl:text-lg text-muted-foreground leading-relaxed space-y-2 xl:space-y-3">{children}</div>
          {cta && <div className="mt-4 xl:mt-6 2xl:mt-8">{cta}</div>}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionBlock;
