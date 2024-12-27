import { Blog } from './types';

const technologies = [
  { id: 'next', name: 'Next.js' },
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'node', name: 'Node.js' },
  { id: 'python', name: 'Python' },
];

const tags = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'devops', name: 'DevOps' },
  { id: 'database', name: 'Database' },
  { id: 'security', name: 'Security' },
];

export function generateDemoBlogs(count: number): Blog[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `demo-${i + 1}`,
    title: `${technologies[i % technologies.length].name} Development Best Practices (Part ${i + 1})`,
    content: `<p>This is a demo article about ${technologies[i % technologies.length].name}...</p>`,
    eyecatch: {
      url: `https://source.unsplash.com/800x600?programming,${technologies[i % technologies.length].name.toLowerCase()}`,
      width: 800,
      height: 600,
    },
    category: technologies[i % technologies.length],
    tags: [
      tags[i % tags.length],
      tags[(i + 1) % tags.length],
    ],
    publishedAt: new Date(Date.now() - i * 86400000).toISOString(),
    revisedAt: new Date(Date.now() - i * 86400000).toISOString(),
    createdAt: new Date(Date.now() - i * 86400000).toISOString(),
    updatedAt: new Date(Date.now() - i * 86400000).toISOString(),
  }));
}