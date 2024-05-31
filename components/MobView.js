"use cleint";
import React from "react";
import { motion } from "framer-motion";

export default function MobView({ t, open, setOpen }) {
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col px-4 gap-1 items-center lg:hidden">
      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -750 }}
          animate={{ x: 750 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1,
          }}
        ></motion.div>
        <motion.p
          className="font-bold text-primary leading-none text-large"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        >
          {t("s2text")}
        </motion.p>
        <motion.div
          className="w-full h-2 absolute bg-primary bottom-[17%] hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        ></motion.div>
      </div>

      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -750 }}
          animate={{ x: 750 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1,
          }}
        ></motion.div>
        <motion.p
          className="font-bold text-large leading-none"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        >
          {t("t3text")}
        </motion.p>
        <motion.div
          className="w-full h-2 absolute bg-black bottom-[17%]  hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        ></motion.div>
      </div>
      <div className="overflow-hidden w-fit relative flex h-full">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -750 }}
          animate={{ x: 750 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1,
          }}
        ></motion.div>
        <motion.p
          className="text-[#898989] text-center text-md"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2,
          }}
        >
          {t("f4text")}
        </motion.p>
      </div>

      <div className="flex flex-col gap-2 pointer-events-auto items-center mt-4">
        <a href={t("url")} target="_blank">
          <motion.button
            className="bg-primary font-semibold italic py-2 px-12 w-fit text-white rounded-full shadow-md lg:hover:bg-primary/85 "
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 2.4,
            }}
          >
            {t("f5text")}
          </motion.button>
        </a>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.5,
          }}
          className="font-semibold"
        >
          {t("e8text")}
        </motion.p>
        <motion.button
          className="bg-black font-semibold italic py-2 px-12 w-fit text-white rounded-full shadow-md lg:hover:bg-black/85 "
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.6,
          }}
          onClick={handleOpen}
        >
          {t("s7text")}
        </motion.button>
      </div>
    </div>
  );
}
