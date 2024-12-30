import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  children: string;
}

export function SocialLink({ href, icon, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center space-x-2 text-gray-600 hover:text-black transition-all duration-300"
    >
      <span className="transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="border-b border-transparent group-hover:border-black transition-colors duration-300">
        {children}
      </span>
    </a>
  );
}