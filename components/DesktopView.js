"use cleint";
import { React } from "react";
import { motion } from "framer-motion";

export default function DesktopView({ t, open, setOpen }) {
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="lg:flex flex-col px-4 gap-2 hidden">
      <div className="flex items-center gap-4 overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1.4,
          }}
        ></motion.div>
        <motion.p
          className="font-bold text-xl pointer-events-none"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        >
          {t("f1text")}
        </motion.p>
        <motion.img
          src="/logo-1.png"
          alt="whatsapp"
          className="w-10 lg:self-start self-center flex"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        />
      </div>

      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1.4,
          }}
        ></motion.div>
        <motion.p
          className="font-bold text-large text-primary leading-tight"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        >
          {t("s2text")}
        </motion.p>
        <motion.div
          className="w-full h-2 absolute bg-primary bottom-[18%]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        ></motion.div>
      </div>

      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1.4,
          }}
        ></motion.div>
        <motion.p
          className="font-bold text-large leading-tight"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        >
          {t("t3text")}
        </motion.p>
        <motion.div
          className="w-full h-2 absolute bg-black bottom-[18%]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        ></motion.div>
      </div>
      <div className="overflow-hidden  w-fit relative flex h-full">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1.4,
          }}
        ></motion.div>
        <motion.p
          className="text-[#898989] text-lg w-full h-fit mb-4 text-mid"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            type: "tween",
            delay: 2.4,
          }}
        >
          {t("f4text")}
        </motion.p>
      </div>
      <div className="overflow-hidden h-full w-fit relative">
        <motion.div
          className="w-full h-full bg-primary absolute"
          initial={{ x: -1000 }}
          animate={{ x: 1000 }}
          transition={{
            duration: 1.5,
            type: "tween",
            delay: 1.4,
          }}
        ></motion.div>
        <div className="flex gap-4 pointer-events-auto items-center">
          <a href={t("url")} target="_blank">
            <motion.button
              className="bg-primary font-semibold italic py-2 px-10 w-fit text-white rounded-full shadow-md lg:hover:bg-primary/85 "
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
              delay: 2.4,
            }}
            className="font-semibold"
          >
            {t("e8text")}
          </motion.p>
          <motion.button
            className="bg-black font-semibold italic py-2 px-10 w-fit text-white rounded-full shadow-md lg:hover:bg-black/85 "
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "tween",
              delay: 2.4,
            }}
            onClick={handleOpen}
          >
            {t("s7text")}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
