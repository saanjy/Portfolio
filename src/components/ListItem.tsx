interface ListItemProps {
  children: string;
}

export function ListItem({ children }: ListItemProps) {
  return (
    <li className="mb-3 group">
      <span className="inline-flex items-center space-x-2 text-gray-800 hover:text-black transition-colors duration-300">
        <span className="font-mono text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
          •
        </span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          {children}
        </span>
      </span>
    </li>
  );
}