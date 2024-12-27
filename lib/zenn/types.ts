export type Blog = {
  id: string;
  title: string;
  link: string;
  publishedAt: string;
  content: string;
  topics: string[];
  thumbnail?: string;
};
export type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type Tag = {
  id: string;
  name: string;
};
