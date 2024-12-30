import { Badge } from './Badge';

interface TechStackProps {
  title: string;
  items: string[];
}

export function TechStack({ title, items }: TechStackProps) {
  return (
    <div className="mb-6">
      <h3 className="text-gray-800 font-mono mb-3">{title}:</h3>
      <div className="flex flex-wrap">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
}