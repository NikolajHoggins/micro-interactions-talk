const LinkButton = ({ href, children }: { href: string; children: string }) => {
  return (
    <a
      href={href}
      className="bg-white border-gray-300 border shadow-md rounded-md p-2"
    >
      {children}
    </a>
  );
};

export default function Home() {
  return (
    <div className="flex gap-6">
      <LinkButton href="/examples/button">Buttons</LinkButton>
      <LinkButton href="/examples/placeholder">Placeholder</LinkButton>
    </div>
  );
}
