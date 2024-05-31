"use client";

import DesktopView from "@/components/DesktopView";
import MobView from "@/components/MobView";
import { motion } from "framer-motion";
import Loading from "@/components/Loading";
import { useTranslations } from "next-intl";
import LocalSwitcher from "@/components/LocalSwitcher";
import Footer from "@/components/Footer";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function Home({ params: { locale } }) {
  const t = useTranslations("Index");

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-[100dvh] lg:min-h-screen lg:justify-center pt-4 lg:py-10 w-full items-center justify-between gap-2 pointer-events-none">
      <Loading />
      <Modal open={open} close={() => setOpen(false)} locale={locale} t={t} />
      <div className="absolute lg:right-20 lg:top-20 top-6 right-6">
        <LocalSwitcher />
      </div>
      <motion.img
        src="/bg.png"
        alt="whatsapp"
        className="fixed min-h-screen w-full -z-10 object-cover inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{
          duration: 1,
          type: "tween",
        }}
      />
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="flex items-center justify-between lg:justify-center lg:gap-36 lg:flex-row flex-col min-h-[100dvh]"
      >
        <motion.img
          src="/logo.png"
          alt="whatsapp"
          className="w-20 lg:hidden self-center flex"
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            type: "tween",
          }}
        />
        <MobView t={t} open={open} setOpen={setOpen} />
        <div className="flex relative w-[80%] lg:w-[25vw]" dir="ltr">
          <motion.img
            src={t("mobImage")}
            alt="whatsapp"
            className="w-full h-full lg:hidden flex"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "tween",
              delay: 2.4,
            }}
          />
          <motion.img
            src={t("desktopImage")}
            alt="whatsapp"
            className="w-full h-full lg:flex hidden"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "tween",
              delay: 2.6,
            }}
          />
          <motion.img
            src="/glasses.png"
            alt="whatsapp"
            className="w-[40%] absolute bottom-0 animate-bounce"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "tween",
              delay: 2.6,
            }}
          />
          <motion.img
            src="/crazy.png"
            alt="whatsapp"
            className="w-[30%] absolute top-16 right-0 animate-bounce"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "tween",
              delay: 2.6,
            }}
          />
        </div>
        <DesktopView t={t} open={open} setOpen={setOpen} />
      </div>
      <Footer t={t} />
    </div>
  );
}
