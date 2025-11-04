"use client";

const AnimatedSection = ({ children, className = "", id, ...props }: any) => {
  // lightweight local replacement for the missing component:
  // preserves usage as <AnimatedSection id="..." className="...">...</AnimatedSection>
  return (
    <section id={id} className={className} {...props}>
      {children}
    </section>
  );
};
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiSqlite,
} from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/ricardo-alves-jr/", label: "LinkedIn" },
  { href: "https://github.com/RicardoJrn1", label: "GitHub" },
  { href: "mailto:ricardo727jrn@gmail.com", label: "E-mail" },
];

const FRONTEND_SKILLS: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
];
const BACKEND_SKILLS: Skill[] = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "SQLite", icon: SiSqlite, color: "#003B57" },
];

// Em um cenário real, estes seriam componentes importados
// Ex: import { NavLink } from '@/components/NavLink';
const NavLink = (props: React.ComponentProps<"a">) => (
  <a {...props} className="text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100 transition-all duration-300 hover:scale-105" />
);
const ActionButton = (props: React.ComponentProps<"a">) => (
  <a {...props} className="group px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300 hover:scale-105" />
);

const SkillCard = ({ name, icon: Icon, color }: Skill) => (
  <div className="group flex flex-col items-center justify-center gap-2 p-4 bg-stone-50 dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 transition-transform duration-300 hover:scale-110 hover:bg-stone-100 dark:hover:bg-stone-700">
    <Icon
      className="w-10 h-10 text-stone-600 dark:text-stone-400 transition-colors"
      style={{ color: color }}
    />
    <span className="text-sm font-medium text-stone-700 dark:text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </span>
  </div>
);


export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="font-sans min-h-screen bg-white dark:bg-stone-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border-b border-stone-200 dark:border-stone-700 shadow-sm">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">


            {/* Links de Navegação */}
            <div className="hidden md:flex items-center space-x-8 mx-auto justify-center">
              {NAV_LINKS.map(link => (
                <NavLink key={link.href} href={link.href} onClick={handleScroll}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Botão Mobile Menu */}
            <div className="md:hidden">
              <button aria-label="Abrir menu" className="text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="px-6 py-16 sm:px-8 lg:px-12">
        <main className="mx-auto max-w-5xl">
          {/* HERO */}
          <section id="inicio" className="scroll-target flex flex-col gap-8 sm:gap-10">
            <div className="text-center space-y-4">
              <h1
                className="text-5xl sm:text-7xl font-bold tracking-tight text-stone-800 dark:text-stone-100 animate-in fade-in-up duration-500"
              >
                Ricardo Alves
              </h1>
              <h2
                className="text-xl sm:text-2xl text-stone-600 dark:text-stone-300 font-medium animate-in fade-in-up duration-500"
                style={{ animationDelay: "200ms" }}
              >
                Estudante de Ciência da Computação (8º Semestre) e Desenvolvedor Web
              </h2>
              <p
                className="max-w-2xl mx-auto text-stone-500 dark:text-stone-400 text-lg animate-in fade-in-up duration-500"
                style={{ animationDelay: "400ms" }}
              >
                Desenvolvedor Web focado em FrontEnd, com conhecimentos em Backend.
              </p>
            </div>

          </section>

          {/* SKILLS */}
          <AnimatedSection id="skills" className="scroll-target mt-20">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-stone-500 dark:text-stone-400 mb-2">Minhas Habilidades</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-stone-800 dark:text-stone-100">
                Skills
              </h2>
            </div>
            
            <div className="space-y-8">
              {/* Frontend */}
              <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm">
                <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center">
                  Frontend
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                  {FRONTEND_SKILLS.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm">
                <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center">
                  Backend
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                  {BACKEND_SKILLS.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* PROJETOS */}
          <AnimatedSection id="projetos" className="scroll-target mt-20">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-stone-500 dark:text-stone-400 mb-2">Meus Trabalhos</p>
              <h3 className="text-4xl sm:text-5xl font-bold text-stone-800 dark:text-stone-100">
                Projetos em Destaque
              </h3>
              <p className="text-stone-500 dark:text-stone-400 mt-4 text-lg">Meus projetos aqui</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group bg-white dark:bg-stone-800 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm hover:scale-105 transition-all duration-300">
                <div className="h-32 rounded-xl bg-stone-50 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-400 border-2 border-dashed border-stone-300 dark:border-stone-600">
                  <span className="text-lg font-medium">🚀 Projeto 1</span>
                </div>
              </div>
              <div className="group bg-white dark:bg-stone-800 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm hover:scale-105 transition-all duration-300">
                <div className="h-32 rounded-xl bg-stone-50 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-400 border-2 border-dashed border-stone-300 dark:border-stone-600">
                  <span className="text-lg font-medium">💡 Projeto 2</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CONTATO */}
          <AnimatedSection id="contato" className="scroll-target mt-20">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-stone-500 dark:text-stone-400 mb-2">Entre em Contato comigo</p>
              <h3 className="text-4xl sm:text-5xl font-bold text-stone-800 dark:text-stone-100">
                Contato
              </h3>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm max-w-2xl mx-auto">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Nome</label>
                  <input type="text" name="name" id="name" required className="block w-full px-4 py-3 bg-stone-50 dark:bg-stone-700 border-stone-300 dark:border-stone-600 rounded-lg focus:ring-sky-500 focus:border-sky-500 text-stone-900 dark:text-stone-100" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Mensagem</label>
                  <textarea name="message" id="message" rows={5} required className="block w-full px-4 py-3 bg-stone-50 dark:bg-stone-700 border-stone-300 dark:border-stone-600 rounded-lg focus:ring-sky-500 focus:border-sky-500 text-stone-900 dark:text-stone-100"></textarea>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-sky-600 rounded-full border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-300">
                    Enviar Mensagem
                  </button>
                </div>
              </form>

            <div>
              <h4 className="text-lg font-bold text-stone-800 dark:text-stone-100 mt-8 mb-4">Ou me encontre em:</h4>
              <div className="flex space-x-6">
                {SOCIAL_LINKS.map(link => (
                  <ActionButton key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </ActionButton>
                ))}
              </div>
            </div>
            </div>
          </AnimatedSection>
        </main>
      </div>
    </div>
  );
}
