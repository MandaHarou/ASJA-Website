import { motion } from "framer-motion";

export const SystemePedagogiqueSection = () => {
  return (
    <div
      id="systeme"
      className="bg-white dark:bg-zinc-800  dark:text-white transition-all duration-500"
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="w-full  py-16 px-10"
      >
        <h1 className="text-5xl font-bold text-green-700 transition-all duration-500 dark:text-green-700 text-center mb-20">
          SYSTEME PEDAGOGIQUE
        </h1>

        <div className="flex lg:flex-row flex-col items-center justify-center relative max-w-7xl mx-auto h-[600px] ">
          <div className="lg:flex hidden items-center justify-center w-3/4 flex-wrap z-[1]">
            <div className="flex flex-col justify-center items-center h-80 w-80 rounded-tl-full bg-gradient-to-tl from-gray-100 via-gray-200 to-gray-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-600 m-5 transition-all duration-500">
              <h2 className="text-3xl font-bold text-gray-700 transition-all duration-500 dark:text-white mb-4 text-center lg:text-right">
                LMD
              </h2>
              <p className="text-gray-600 transition-all duration-500 dark:text-gray-300 text-center lg:text-right text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                voluptatum?
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-80 w-80 rounded-tr-full bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-600 m-5 transition-all duration-500">
              <h2 className="text-3xl font-bold text-gray-700 text-center lg:text-left transition-all duration-500 dark:text-white mb-4 ">
                LOREM
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore dolor exercitationem sed perspiciatis vitae quod?
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-80 w-80 rounded-bl-full bg-gradient-to-bl from-gray-100 via-gray-200 to-gray-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-600 m-5 transition-all duration-500">
              <h2 className="text-3xl font-bold text-gray-700 transition-all duration-500 dark:text-white mb-4 text-center lg:text-right">
                LOREM
              </h2>
              <p className="text-gray-600 transition-all duration-500 dark:text-gray-300 text-center lg:text-right text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                ratione architecto aliquam a unde numquam.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center h-80 w-80 rounded-br-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-600 m-5 transition-all duration-500">
              <h2 className="text-3xl font-bold text-gray-700 transition-all duration-500 dark:text-white mb-4 text-center lg:text-left">
                LMD
              </h2>
              <p className="text-gray-600 transition-all duration-500 dark:text-gray-300 text-center lg:text-left text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                voluptatum?
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
