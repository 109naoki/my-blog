import Parser from "rss-parser";
import type { Blog, Tag } from "./types";

type CustomItem = {
  enclosure?: {
    url: string;
    type: string;
  };
};

const parser = new Parser<{ item: CustomItem }>({
  customFields: {
    item: ["enclosure"],
  },
});

const ZENN_RSS_URL = "https://zenn.dev/109naoki/feed";

// 固定のタグを定義
const FIXED_TAGS: Tag[] = [
  { id: "nextjs", name: "Next.js" },
  { id: "nestjs", name: "Nest.js" },
  { id: "reactnative", name: "React Native" },
  { id: "", name: "Clear" },
];

export async function getBlogs({
  limit = 12,
  offset = 0,
  q = "",
  tag = "",
}: {
  limit?: number;
  offset?: number;
  q?: string;
  tag?: string;
}) {
  try {
    const feed = await parser.parseURL(ZENN_RSS_URL);
    let articles = feed.items.map((item): Blog => {
      // タイトルに基づいてタグを判定
      const topics = [];
      const title = (item.title || "").toLowerCase();

      if (title.includes("next.js")) topics.push(FIXED_TAGS[0].name);
      if (title.includes("nest.js")) topics.push(FIXED_TAGS[1].name);
      if (title.includes("reactnative") || title.includes("react native"))
        topics.push(FIXED_TAGS[2].name);

      return {
        id: item.guid || item.link || "",
        title: item.title || "",
        link: item.link || "",
        publishedAt: item.pubDate || "",
        content: item.content || item.contentSnippet || "",
        topics,
      };
    });

    // 検索フィルター
    if (q) {
      articles = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(q.toLowerCase()) ||
          article.content.toLowerCase().includes(q.toLowerCase())
      );
    }

    // タグフィルター
    if (tag) {
      const normalizedTag = FIXED_TAGS.find(
        (t) => t.id === tag.toLowerCase()
      )?.name;
      if (normalizedTag) {
        articles = articles.filter((article) =>
          article.topics.includes(normalizedTag)
        );
      }
    }

    return {
      contents: articles.slice(offset, offset + limit),
      totalCount: articles.length,
    };
  } catch (error) {
    console.error("Error fetching Zenn articles:", error);
    return {
      contents: [],
      totalCount: 0,
    };
  }
}

export async function getAllTags() {
  return {
    contents: FIXED_TAGS,
  };
}
