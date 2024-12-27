import Image from "next/image";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import type { Blog } from "@/lib/zenn/types";
import { Card } from "@/components/ui/card";

export function BlogContent({ blog }: { blog: Blog }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <article className="max-w-4xl mx-auto">
        <Card className="overflow-hidden bg-[#1F2335] border-[#2A2F42]">
          {blog.eyecatch && (
            <div className="relative h-[400px] w-full">
              <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181B29] to-transparent" />
            </div>
          )}
          <div className="p-6 md:p-8">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {blog.title}
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Badge variant="secondary" className="bg-[#2A2F42]">
                {blog.category.name}
              </Badge>
              {blog.tags.map((tag) => (
                <Badge
                  key={tag.id}
                  variant="outline"
                  className="border-[#2A2F42]"
                >
                  {tag.name}
                </Badge>
              ))}
            </motion.div>
            <motion.time
              className="text-sm text-muted-foreground block mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {format(new Date(blog.publishedAt), "PPP")}
            </motion.time>
            <motion.div
              className="prose prose-invert max-w-none prose-pre:bg-[#1A1D2E] prose-pre:border prose-pre:border-[#2A2F42] prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </Card>
      </article>
    </motion.div>
  );
}
