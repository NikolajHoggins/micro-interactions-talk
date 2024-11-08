"use client";

import NavigationList from "@/app/components/NavigationList";
const items = [
  { title: "Simple Loading Text", href: "/examples/placeholder/bad" },
  {
    title: "Implementing placeholder",
    href: "/examples/placeholder/good",
  },
  {
    title: "Vanilla CSS",
    href: "/examples/placeholder/vanilla",
  },
];

const Content = () => {
  return <NavigationList items={items} />;
};

const Page = () => {
  return <Content />;
};

export default Page;
