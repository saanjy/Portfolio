interface HeaderProps {
  name: string;
  description: string[];
}

export function Header({ name, description }: HeaderProps) {
  return (
    <header className="mb-16 animate-fade-in">
      <h1 className="text-4xl font-mono mb-4 hover:text-gray-800 transition-colors">
        {name}
      </h1>
      {description.map((line, index) => (
        <p key={index} className="text-gray-600 mb-2 leading-relaxed">
          {line}
        </p>
      ))}
    </header>
  );
}