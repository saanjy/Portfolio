interface ExternalLinkProps {
  href: string;
  children: string;
}

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex text-gray-600 hover:text-black border-b border-gray-300 hover:border-gray-600 transition-all duration-300"
    >
      {children}
    </a>
  );
}