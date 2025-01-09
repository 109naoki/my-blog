import React from "react";
import {
  Calendar,
  Briefcase,
  MapPin,
  Mail,
  Github,
  Code,
  Server,
  Database,
  Cloud,
} from "lucide-react";

export default function Page() {
  const timelineEvents = [
    {
      year: "2023-現在",
      title: "Webエンジニア",
      company: "クックビズ株式会社",
      description:
        "前職同様フルスタックエンジニアとして、飲食業界向けの求人アプリの開発をメインに担当。",
      icon: <Briefcase className="w-5 h-5" />,
      tech: [
        "Next.js AppRouter",
        "Next.js PagesRouter",
        "TypeScript",
        "React",
        "Remix",
        "TailwindCSS",
        "Node.js",
        "Nest JS",
        "Prisma",
        "AWS",
        "Vercel",
        "FireStore",
        "Firebase",
        "GitHub Actions",
        "OpenAPI",
        "Clean Architecture",
      ],
    },
    {
      year: "2021-2023",
      title: "Webエンジニア",
      company: "アーガイル株式会社",
      description:
        "フルスタックエンジニアとして、生成AI連携アプリの開発をメインに担当。少人数のチームだったので、Vercelやfirebaseを使ったインフラ構築も担当。",
      icon: <Briefcase className="w-5 h-5" />,
      tech: [
        "Next.js PagesRouter",
        "TypeScript",
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "Prisma",
        "FireStore",
        "Firebase",
        "Supabase",
        "Vercel",
        "GitHub Actions",
      ],
    },
    {
      year: "2019-2021",
      title: "ネットワークエンジニア",

      description: "法人向けの音声環境の構築をメインにSEとして業務",
      icon: <Briefcase className="w-5 h-5" />,
      tech: ["Cisco", "CCNA", "VoIP"],
    },
  ];

  const techStack = {
    frontend: {
      icon: <Code className="w-5 h-5" />,
      title: "フロントエンド",
      skills: ["React", "Next.js", "TypeScript", "Remix", "TailwindCSS", "css"],
    },
    backend: {
      icon: <Server className="w-5 h-5" />,
      title: "バックエンド",
      skills: ["Node.js", "NestJS", "Express"],
    },
    database: {
      icon: <Database className="w-5 h-5" />,
      title: "データベース",
      skills: ["PostgreSQL", "MySQL", "FireStore", "Supabase", "Prisma"],
    },
    infrastructure: {
      icon: <Cloud className="w-5 h-5" />,
      title: "インフラ",
      skills: ["AWS", "Vercel", "Firebase", "Docker", "GitHub Actions"],
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <img
              src="/icon.jpg"
              alt="アイコン"
              className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">伊藤直樹</h1>
            <p className="text-xl mb-4">フルスタックエンジニア</p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                東京都
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                naoki.109.0525@gmail.com
              </span>
              <a
                href="https://github.com/109naoki"
                className="flex items-center hover:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-1" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            技術スタック
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(techStack).map(([key, section]) => (
              <div
                key={key}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-2 text-white mr-3">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                経歴
              </h2>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-8 pb-8">
              {index !== timelineEvents.length - 1 && (
                <div className="absolute left-[11px] top-8 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              )}

              <div className="absolute left-0 top-0 bg-blue-500 dark:bg-blue-600 rounded-full p-1.5 text-white">
                {event.icon}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ml-4 transition-colors duration-200">
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {event.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
