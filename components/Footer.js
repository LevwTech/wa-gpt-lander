import { motion } from "framer-motion";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

export default function Footer({ t }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-1 fixed bottom-0 right-[3%] lg:bottom-[4%] text-xs lg:text-sm lg:w-full lg:right-0"
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        type: "tween",
        delay: 2,
      }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-2 text-primary pointer-events-auto">
        <a
          className="cursor-pointer"
          target="_blank"
          href="https://www.tiktok.com/@whatsappai"
        >
          <FaTiktok size={20} />
        </a>
        <a
          className="cursor-pointer"
          target="_blank"
          href="https://twitter.com/whatsappai"
        >
          <FaSquareXTwitter size={20} />
        </a>
        <div className="flex h-10 w-[2px] bg-primary rounded-t-full lg:hidden mt-2"></div>
        {/* <FaSnapchatSquare size={25} /> */}
        <a
          className="cursor-pointer"
          target="_blank"
          href=" https://www.facebook.com/profile.php?id=61558650110817"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          className="cursor-pointer"
          target="_blank"
          href="https://www.instagram.com/whatsaiassistant/"
        >
          <AiFillInstagram size={25} />
        </a>
      </div>
      <p className="text-xs hidden lg:flex">{t("s6text")}</p>
    </motion.div>
  );
}
