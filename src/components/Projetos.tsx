import React from "react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt, FaGoogleDrive } from "react-icons/fa";
import { useLanguage } from "@/components/Linguagem";

interface Project {
  title: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  gradient: string;
  image?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Redimaq",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    links: {
      github: "https://github.com/RicardoJrn1/redimaq",
      demo: "https://www.redimaq.com.br",
    },
    gradient: "from-blue-500 to-cyan-500",
    image: "/redimaq.png",
  },
  {
    title: "Assessoria 74",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    links: {
      github: "https://github.com/RicardoJrn1/assessoria-74",
      demo: "https://assessoria-74.vercel.app",
    },
    gradient: "from-emerald-500 to-teal-500",
    image: "/assessoria74.png",
  },
  {
    title: "ShapeZap IA",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    links: {
      github: "https://github.com/RicardoJrn1/shapezap",
      demo: "https://shape-zap.vercel.app",
    },
    gradient: "from-orange-500 to-red-500",
    image: "/shapezap.png",
  },
  {
    title: "UsiSol",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    links: {
      github: "https://github.com/RicardoJrn1/UsiSol",
      demo: "https://usi-sol.vercel.app",
    },
    gradient: "from-purple-500 to-pink-500",
    image: "/usisol.png",
  },
];

export default function Projetos() {
  const { t, language } = useLanguage();
  return (
    <div id="projetos" className="scroll-target mt-20">
      <div className="text-center mb-16">
        <p className="inline-block relative rounded-full px-3 py-1 text-sm leading-6 text-stone-600 dark:text-stone-400 ring-1 ring-stone-900/10 dark:ring-stone-100/10 hover:ring-stone-900/20 dark:hover:ring-stone-100/20 transition-all">
          {t.projects.badge}
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 mt-6">
          {t.projects.title}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-stone-600 dark:text-stone-300 mt-4">
          {t.projects.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/50 dark:bg-stone-900/50 border border-stone-200/50 dark:border-stone-700/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Área da Imagem/Gradiente */}
            <div className="h-48 w-full relative overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className={`h-full w-full bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
              )}
              <div className="absolute inset-0 bg-white/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col flex-1 p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors hover:scale-110"
                      title={t.projects.view_code}
                    >
                      <SiGithub className="w-6 h-6" />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors hover:scale-110"
                      title={t.projects.view_demo}
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-stone-600 dark:text-stone-300 mb-6 leading-relaxed flex-1">
                {t.projects.items[index]}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="https://drive.google.com/file/d/1qn5Xk1EZEfWZCkm_z2zVJTfX5UvzrpOG/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 dark:bg-stone-900/50 border border-stone-200/50 dark:border-stone-700/50 backdrop-blur-sm hover:bg-white dark:hover:bg-stone-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <FaGoogleDrive className="text-xl text-stone-600 dark:text-stone-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" />
          <span className="text-sm font-semibold text-stone-600 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors">
            {language === "pt" ? "Acessar Portfólio no Drive" : "Access Portfolio on Drive"}
          </span>
        </a>
      </div>
    </div>
  );
}