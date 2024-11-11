"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export type NavigationItem = {
  title: string;
  href: string;
};

const NavigationList = ({ items }: { items: NavigationItem[] }) => {
  const router = useRouter();
  return (
    <motion.ul className="flex flex-col divide-y">
      {items.map((item, index) => (
        <motion.li
          key={item.href}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ delay: 0.3 + 0.2 * index, type: "spring" }}
        >
          <motion.button
            onClick={() => router.push(item.href)}
            whileHover={{ x: 10 }}
            whileTap={{ scale: 1.02 }}
            className={`block min-w-56 text-left ${
              index === 0
                ? "pb-4"
                : index === items.length - 1
                ? "pt-4"
                : "py-4"
            }`}
          >
            {item.title}
          </motion.button>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavigationList;
