import { Github, Twitter } from 'lucide-react';
import { SocialLink } from './SocialLink';

export function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200">
      <div className="flex space-x-6 text-sm">
        <SocialLink href="https://github.com" icon={<Github size={16} />}>
          github
        </SocialLink>
        <span className="text-gray-300">|</span>
        <SocialLink href="https://x.com/sanjaaay__" icon={<Twitter size={16} />}>
          twitter
        </SocialLink>
      </div>
    </footer>
  );
}