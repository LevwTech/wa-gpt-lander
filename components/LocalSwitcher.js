"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const [open, setOpen] = useState();

  const onSelectChange = (value) => {
    const nextLocale = value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
    localStorage.setItem("lang", value);
  };

  const langs = [
    {
      lang: "English",
      langMob: "EN",
      value: "en",
      icon: "https://img.icons8.com/color/great-britain.png",
    },
    {
      lang: "Espanol",
      langMob: "ES",
      value: "es",
      icon: "https://img.icons8.com/color/spain-2.png",
    },
    {
      lang: "العربية",
      langMob: "AR",
      value: "ar",
      icon: "https://img.icons8.com/color/saudi-arabia.png",
    },
  ];

  return (
    <motion.div
      className="relative pointer-events-auto flex items-center flex-col z-10"
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        type: "tween",
        delay: 2,
      }}
    >
      {langs.map(
        (lang, index) =>
          lang.value === localActive && (
            <div
              key={index}
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img className="lg:w-8 w-6" alt="flag" src={lang.icon} />
              <FaChevronDown size={10} />
            </div>
          )
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:py-4 py-1 bg-white/50 backdrop-blur-[4px] shadow w-[70px] lg:w-[150px] absolute lg:top-10 top-7 rounded-md"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 25, opacity: 0 }}
            transition={{
              duration: 0.3,
              type: "tween",
            }}
          >
            {langs.map(
              (lang, index) =>
                lang.value !== localActive && (
                  <div
                    key={index}
                    defaultValue={localActive}
                    onClick={() => onSelectChange(lang.value)}
                    disabled={isPending}
                    className="flex items-center gap-2 lg:px-4 px-2 py-1 w-full cursor-pointer lg:hover:bg-primary/10"
                  >
                    <img className="lg:w-8 w-6" alt="flag" src={lang.icon} />
                    <p className="text-sm hidden lg:flex">{lang.lang}</p>
                    <p className="text-xs lg:hidden">{lang.langMob}</p>
                  </div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
