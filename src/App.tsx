import { Github } from 'lucide-react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ListItem } from './components/ListItem';
import { SocialLink } from './components/SocialLink';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-gray-200">
      <main className="max-w-2xl mx-auto px-6 py-16">
        <Header 
          name="Hi, i am Sanjay!"
          description={[
            "Student, Data analyst, machine learning enthusiast, and networking.",
            "Passionate about solving problems with data and building intelligent systems."
          ]}
        />

        <Section title="Experience">
          <ul>
            <ListItem>Intern @SkillCraft</ListItem>
            <ListItem>Design Lead @Chipset</ListItem>
          </ul>
        </Section>

        <Section title="Technologies & Tools">
          <TechStack 
            title="Languages"
            items={["HTML", "CSS", "JavaScript", "Python"]}
          />
          <TechStack 
            title="Frameworks"
            items={["React"]}
          />
          <TechStack 
            title="Tools & Databases" items={["Git", "MySQL", "Supabase"]}
          />
        </Section>

        <Section title="What I'm currently learning">
          <ul>
            <ListItem>AI/ML</ListItem>
            <ListItem>UI/UX Design</ListItem>
          </ul>
        </Section>

        <Section title="How to reach me">
          <Contact />
        </Section>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex space-x-6 text-sm">
            <SocialLink href="https://github.com/san7mr" icon={<Github size={16} />}>
              Github
            </SocialLink>
          </div>
        </footer>
      </main>
    </div>
  );
}