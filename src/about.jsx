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
        <div className="flex flex-col gap-6 p-14 w-full md:w-[50vw] lg:w-[40vw]">
        <h1 className="text-3xl xl:text-4xl  text-center md:text-left  m-auto font-extrabold uppercase">
            About US
          </h1>
          <p className="text-justify text-base sm:text-lg font-normal font-serif">
          
              At Delice, we make enjoying great food easy by delivering your favorite meals straight to your door.
         
             We partner with top local
            restaurants to offer a wide variety of options, ensuring you never{" "}
          run out of choices.Fast,
            reliable, and delicious — that's our promise to you. Thank you for
            choosing us!{" "}
          
              With a user-friendly app and reliable delivery team,
            
            we’re committed to bringing you an effortless and enjoyable food
            experience, every time. We believe in convenience.
          </p>
        </div>
      </motion.section>
    </>
  );
};




