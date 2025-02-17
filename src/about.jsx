import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
  

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{}} // Triggers every time the component comes into view
        className="flex flex-col md:flex-row justify-around items-center m-4 mb-14 mt-14 "
      >
     
     
  

        {/* Image Section */}
        <div className="group flex  justify-center md:justify-start">

        
          <img

            src="./special3.jpg"
            alt="about"
            className="rounded-3xl h-[400px] w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 p-3 md:p-14 w-full md:w-[50vw] lg:w-[40vw]">
        <h1 className="text-3xl xl:text-4xl  text-center md:text-left  m-auto font-extrabold uppercase">
            About US
          </h1>
          <p className="text-justify text-base sm:text-lg font-normal font-serif">
          
          At Sonjictive, we believe great sound should be an experience, not just a feature. Our premium earbuds are designed to bring you crystal-clear audio, powerful bass, and unparalleled comfort — all packed into a sleek, compact design.

Whether you're working out, commuting, or simply relaxing, our earbuds provide the perfect sound for every moment. With advanced noise cancellation and a long-lasting battery, you’ll stay immersed in your music, podcasts, or calls without interruption.

Fast, reliable, and stylish — that’s what you can expect from Sonjictive earbuds. Thank you for choosing us to elevate your listening experience.
          </p>
        </div>
      </motion.section>
    </>
  );
};




