"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Modal({ open, close, locale, t }) {
  const [value, setValue] = useState("");
  const numWithoutSpaceAndPlus = value?.replace(/\s/g, "").replace("+", "");

  const redirectToNewPage = () => {
    window.open(
      `https://levw.gumroad.com/l/whatsapp-${locale}?userNumber=${numWithoutSpaceAndPlus}`,
      "_blank"
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          dir={locale === "ar" ? "rtl" : "ltr"}
          className="flex fixed inset-0 min-h-screen justify-center items-center z-[9999] overflow-y-hidden pointer-events-auto"
        >
          <div onClick={close} className="fixed inset-0 bg-black/70 z-[1]" />
          <div
            className={`p-4 bg-white shadow-lg rounded-lg z-[2] mx-4 desktop:mx-0 overflow-y-auto relative flex flex-col`}
          >
            <button
              onClick={close}
              className="font-medium text-2xl top-4 right-4 self-end mb-4"
            >
              <IoClose />
            </button>
            <p className="w-[90%] mb-6">{t("pleasePN")}</p>
            <PhoneInput
              dir="ltr"
              placeholder={t("placeholder")}
              defaultCountry={t("defaultCountry")}
              value={value}
              onChange={setValue}
              international
              countryCallingCodeEditable={false}
            />
            <button
              disabled={value === "" || value === undefined || value === null}
              className={`bg-primary text-white py-2 px-4 rounded-md mt-4 lg:hover:bg-primary/85 ${
                (value === "" || value === undefined || value === null) &&
                "cursor-not-allowed"
              }`}
              onClick={redirectToNewPage}
            >
              {t("subscribe")}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
