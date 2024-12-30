import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="flex items-center space-x-2 text-gray-600">
      <Mail size={16} className="text-gray-400" />
      <span>san77m@outlook.com</span>
    </div>
  );
}