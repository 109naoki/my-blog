import { Suspense } from "react";
import { getBlogs, getAllTags } from "@/lib/zenn/client";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSkeleton } from "@/components/blog/BlogSkeleton";
import { AnimatedTitle } from "@/components/blog/AnimatedTitle";
import { SearchForm } from "@/components/search/SearchForm";
import { BlogPagination } from "@/components/pagination/BlogPagination";
import { Profile } from "@/components/sections/Profile";
import { TagFilter } from "@/components/filters/TagFilter";
import { Services } from "@/components/sections/Services";

const ITEMS_PER_PAGE = 12;

type Props = {
  searchParams: {
    q?: string;
    page?: string;
    tag?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const q = searchParams.q ?? "";
  const tag = searchParams.tag ?? "";
  const page = Number(searchParams.page) || 1;
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const [{ contents: blogs, totalCount }, { contents: tags }] =
    await Promise.all([
      getBlogs({
        limit: ITEMS_PER_PAGE,
        offset,
        q,
        tag,
      }),
      getAllTags(),
    ]);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <main>
      <Profile />
      <div className="space-y-8">
        <div className="flex flex-col gap-6">
          <Services />
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-4 mt-10 text-center">
            <div className="mb-6">
              <AnimatedTitle>最新の投稿</AnimatedTitle>
            </div>
            <SearchForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <TagFilter tags={tags} />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<BlogSkeleton count={ITEMS_PER_PAGE} />}>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </Suspense>
        </div>
        {totalPages > 1 && (
          <BlogPagination totalPages={totalPages} currentPage={page} />
        )}
      </div>
    </main>
  );
}
