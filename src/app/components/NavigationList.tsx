"use client";
import { motion } from "framer-motion";

export type NavigationItem = {
  title: string;
  href: string;
};

const NavigationList = ({ items }: { items: NavigationItem[] }) => {
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
          <motion.a
            whileHover={{ x: 10 }}
            href={item.href}
            className={`block min-w-48 ${
              index === 0
                ? "pb-4"
                : index === items.length - 1
                ? "pt-4"
                : "py-4"
            }`}
          >
            {item.title}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavigationList;
