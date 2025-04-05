import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Tech from "./Tech";
import { logo, menu, close, profile } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="md:w-2/3">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Thisura</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
            <p className="mt-8">
              I am a quality-oriented and self-motivated person with a strong
              passion for technology. I have a keen interest in technology and a
              high standard of quality in everything I do. I am looking for an
              opportunity that will challenge me and allow me to use my
              technical skills, work efficiency, and excellence mindset. I am
              always eager to learn new things and keep up with the latest
              developments in technology. I believe in practical learning and
              results-oriented work, and I'm ready to make a significant impact
              on your team.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center items-start mt-8 md:mt-0">
            <img
              src={profile}
              className="w-64 h-64 object-cover rounded-full border-4 border-[#915EFF]"
            />
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
