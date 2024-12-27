import { notFound } from "next/navigation";
import { getBlogById, getAllBlogIds } from "@/lib/zenn/client";
import { BlogContent } from "@/components/blog/BlogContent";

export async function generateStaticParams() {
  const { contents } = await getAllBlogIds();
  return contents.map((blog: { id: string }) => ({
    id: blog.id,
  }));
}

export default async function BlogPage({
  params: { id },
}: {
  params: { id: string };
}) {
  try {
    const blog = await getBlogById(id);
    return <BlogContent blog={blog} />;
  } catch (error) {
    notFound();
  }
}
