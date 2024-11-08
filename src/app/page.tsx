import NavigationList from "./components/NavigationList";

const items = [
  { title: "Buttons", href: "/examples/button" },
  { title: "Placeholder", href: "/examples/placeholder" },
  { title: "ButtonGroup", href: "/examples/button-group" },
];

export default function Home() {
  return <NavigationList items={items} />;
}
