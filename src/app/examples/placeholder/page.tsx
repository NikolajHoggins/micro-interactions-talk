"use client";

import NavigationList from "@/app/components/NavigationList";
const items = [
  { title: "Simple Loading Text", href: "/examples/placeholder/bad" },
  {
    title: "Fancy pants micro-interactions",
    href: "/examples/placeholder/good",
  },
];

const Content = () => {
  return <NavigationList items={items} />;
};

const Page = () => {
  return <Content />;
};

export default Page;
